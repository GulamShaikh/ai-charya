import { useState } from 'react';
import MicroStepCard from '../components/MicroStepCard';
import ActivityList from '../components/ActivityList';
import { activities } from '../data/activities';
import { initState, updateState, decideNext } from '../lib/adaptive';
import type { Activity } from '../lib/types';

export default function SessionPage() {
  const [phase, setPhase] = useState<'pre'|'run'|'post'|'done'>('pre');
  const [state, setState] = useState(() => initState());
  const [sessionLog, setSessionLog] = useState<any[]>([]);
  const [current, setCurrent] = useState<Activity | null>(null);
  const [stepCount, setStepCount] = useState(0);
  const MAX_STEPS = 8;

  function startSession() {
    setPhase('run');
    setState(initState());
    setSessionLog([]);
    setStepCount(0);
    // start with a simple activity (pretest item)
    const pre = activities.find(a => a.difficulty === 1) || activities[0];
    setCurrent(pre);
  }

  function pickByRule(rule: any, excludeIds: string[] = []) {
    if (!rule) return activities[(Math.random()*activities.length)|0];
    const pick = activities.find(a => (rule.type === 'challenge' ? a.type === 'mcq' : a.type === a.type) && (!rule.difficulty || a.difficulty === rule.difficulty) && !excludeIds.includes(a.id));
    if (pick) return pick;
    // fallback by difficulty
    const fallback = activities.find(a => a.difficulty === (rule.difficulty || 1) && !excludeIds.includes(a.id));
    return fallback || activities[(Math.random()*activities.length)|0];
  }

  const onComplete = (res: { correct: boolean; rtMs: number; hints: number; answerGiven?: string }) => {
    const newState = updateState(state, res.correct, res.rtMs, res.hints);
    setState(newState);
    setSessionLog(s => [...s, { activity: current?.id, ...res, state: newState }]);
    setStepCount(c => c + 1);

    console.log('STATE_UPDATED', newState);

    if (stepCount + 1 >= MAX_STEPS) {
      setPhase('post');
      return;
    }

    const rule = decideNext(newState);
    // simple selection: find next activity by rule
    let next: Activity | undefined;
    if (rule.type === 'break') {
      next = activities.find(a => a.type === 'break');
    } else if (rule.type === 'example') {
      next = activities.find(a => a.type === 'example' && a.difficulty === 1);
    } else if (rule.type === 'mcq') {
      next = activities.find(a => a.type === 'mcq' && a.difficulty === rule.difficulty);
    } else {
      next = activities.find(a => a.type === 'mcq' && a.difficulty === 3);
    }
    if (!next) next = activities[(stepCount + 1) % activities.length];
    setCurrent(next);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">AI-Charya — Fraction micro-session</h1>

        {phase === 'pre' && (
          <div>
            <p className="mb-4">Quick pre-test to measure baseline.</p>
            <button onClick={startSession} className="px-4 py-2 rounded bg-green-600 text-white">Start 8-step session</button>
          </div>
        )}

        {phase === 'run' && current && (
          <div>
            <div className="mb-4">Mastery: {(state.mastery*100).toFixed(0)}% • Fatigue: {(state.fatigue*100).toFixed(0)}% • Streak: {state.streak}</div>
            <MicroStepCard activity={current} onComplete={onComplete} />
            <div className="mt-3 text-sm text-gray-600">Step {stepCount+1} / {MAX_STEPS}</div>
          </div>
        )}

        {phase === 'post' && (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Session Complete</h2>
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg mb-6">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="text-gray-500 text-sm">Start Mastery</div>
                  <div className="text-xl font-bold">25%</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">End Mastery</div>
                  <div className="text-xl font-bold">{(state.mastery*100).toFixed(0)}%</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-500 text-sm mb-1">Session Summary</div>
                <ul className="space-y-2">
                  {sessionLog.map((log, i) => (
                    <li key={i} className="bg-slate-50 rounded p-2 text-sm flex flex-col">
                      <span className="font-semibold">Q{i+1}: {log.activity}</span>
                      <span>Answer: <span className={log.correct ? 'text-green-600' : 'text-red-500'}>{log.answerGiven}</span></span>
                      <span>Correct: {log.correct ? '✅' : '❌'} | Hints: {log.hints} | Time: {log.rtMs}ms</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  import('jspdf').then(jsPDF => {
                    const doc = new jsPDF.jsPDF();
                    doc.text('AI-Charya Session Report', 10, 10);
                    doc.text(`Start Mastery: 25%`, 10, 20);
                    doc.text(`End Mastery: ${(state.mastery*100).toFixed(0)}%`, 10, 30);
                    sessionLog.forEach((log, i) => {
                      doc.text(`Q${i+1}: ${log.activity} | Ans: ${log.answerGiven} | ${log.correct ? '✅' : '❌'} | Hints: ${log.hints} | Time: ${log.rtMs}ms`, 10, 40 + i*10);
                    });
                    doc.save('session-report.pdf');
                  });
                }}
                className="w-full py-2 mb-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Download PDF Report</button>
            </div>
            <button onClick={() => setPhase('done')} className="px-6 py-2 rounded-lg bg-green-600 text-white font-bold shadow hover:bg-green-700 transition">Finish</button>
          </div>
        )}

        {phase === 'done' && (
          <div className="mt-6">Thanks — session finished. You can refresh to start again.</div>
        )}
      </div>
    </div>
  );
}


