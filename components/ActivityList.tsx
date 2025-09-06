
import { useState } from 'react';
import { activities } from '../data/activities';
import type { Activity } from '../lib/types';
import confetti from 'canvas-confetti';


export default function ActivityList() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const activity = activities[currentIdx];
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);

  function handleMCQ(choice: string) {
    const isCorrect = choice === activity.answer;
    setFeedback(isCorrect ? '🎉 Great job!' : '❌ Try again!');
    setCorrect(isCorrect);
    if (isCorrect) {
      setScore(s => s + 1);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  function handleInput() {
    const isCorrect = input.trim() === String(activity.answer).trim();
    setFeedback(isCorrect ? '🎉 Great job!' : '❌ Try again!');
    setCorrect(isCorrect);
    if (isCorrect) {
      setScore(s => s + 1);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }

  function nextActivity() {
    setFeedback(null);
    setCorrect(null);
    setInput('');
    setCurrentIdx((idx) => (idx + 1) % activities.length);
  }

  if (!activity) return <div>No activities found.</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white p-6">
      {/* Mascot and Progress */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-full max-w-xs bg-gray-200 rounded-full h-4 mb-2">
          <div className="bg-green-500 h-4 rounded-full transition-all" style={{ width: `${((score / activities.length) * 100).toFixed(0)}%` }}></div>
        </div>
        <div className="text-sm text-gray-600">Progress: {score} / {activities.length}</div>
        {score > 0 && score % 5 === 0 && (
          <div className="mt-2 text-yellow-500 font-bold animate-pulse">🏅 Milestone reached!</div>
        )}
      </div>

      {/* Activity Card */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 mb-6 animate-fade-in">
        <div className="mb-4 text-xl font-bold text-green-700">{activity.prompt}</div>
        {activity.type === 'mcq' && (
          <div className="grid gap-3 mb-4">
            {activity.choices?.map((c) => (
              <button key={c} onClick={() => handleMCQ(c)}
                className={`p-3 rounded-lg border text-left transition-colors ${feedback && c === activity.answer ? 'bg-green-100 border-green-500' : 'bg-white'}`}>{c}</button>
            ))}
          </div>
        )}
        {activity.type === 'input' && (
          <div className="mb-4 flex gap-2">
            <input className="w-full p-3 border rounded" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleInput} className="px-4 py-2 rounded bg-blue-600 text-white">Submit</button>
          </div>
        )}
        {feedback && (
          <div className={`mb-4 text-lg font-semibold ${correct ? 'text-green-600 animate-bounce' : 'text-red-500 animate-shake'}`}>{feedback}</div>
        )}
        <button onClick={nextActivity} className="px-6 py-2 rounded-lg bg-green-600 text-white mt-2 shadow hover:bg-green-700 transition">Next</button>
      </div>
    </div>
  );
}
