import { useState } from 'react';
import type { Activity } from '../lib/types';

type Props = {
  activity: Activity;
  onComplete: (result: { correct: boolean; rtMs: number; hints: number; answerGiven?: string }) => void;
};

export default function MicroStepCard({ activity, onComplete }: Props) {
  const [startTs] = useState(() => Date.now());
  const [hints, setHints] = useState(0);
  const [input, setInput] = useState('');

  const submit = (isCorrect: boolean, given?: string) => {
    const rtMs = Date.now() - startTs;
    onComplete({ correct: isCorrect, rtMs, hints, answerGiven: given });
  };

  if (activity.type === 'mcq') {
    return (
      <div className="p-6 bg-white rounded-2xl shadow max-w-md w-full">
        <div className="text-lg font-semibold mb-4">{activity.prompt}</div>
        <div className="grid gap-3">
          {activity.choices?.map((c) => (
            <button key={c} onClick={() => submit(c === activity.answer, c)}
              className="p-3 rounded-lg border text-left">{c}</button>
          ))}
        </div>
        <div className="mt-3 text-sm">
          <button onClick={() => { setHints(h => h + 1); alert(activity.hint ?? 'Hint'); }}>Hint</button>
        </div>
      </div>
    );
  }

  if (activity.type === 'input') {
    return (
      <div className="p-6 bg-white rounded-2xl shadow max-w-md w-full">
        <div className="text-lg font-semibold mb-4">{activity.prompt}</div>
        <input className="w-full p-3 border rounded mb-3" value={input} onChange={e => setInput(e.target.value)} />
        <div className="flex gap-2">
          <button onClick={() => submit(String(input).trim() === String(activity.answer).trim(), input)} className="px-4 py-2 rounded bg-blue-600 text-white">Submit</button>
          <button onClick={() => { setHints(h => h + 1); alert(activity.hint ?? 'Hint'); }} className="px-4 py-2 rounded border">Hint</button>
        </div>
      </div>
    );
  }

  if (activity.type === 'example') {
    return (
      <div className="p-6 bg-white rounded-2xl shadow max-w-md w-full">
        <div className="text-lg font-semibold mb-4">Worked example</div>
        <div className="mb-4">{activity.prompt}</div>
        <div className="flex gap-2">
          <button onClick={() => submit(true)} className="px-4 py-2 rounded bg-green-600 text-white">Got it</button>
          <button onClick={() => { setHints(h => h + 1); alert(activity.hint ?? 'Hint'); }} className="px-4 py-2 rounded border">Need hint</button>
        </div>
      </div>
    );
  }

  if (activity.type === 'image') {
    return (
      <div className="p-6 bg-white rounded-2xl shadow max-w-md w-full text-center">
        <div className="text-lg font-semibold mb-4">{activity.prompt}</div>
        {/* fallback simple inline svg if no image */}
        {activity.image ? <img src={activity.image} alt="activity" className="mx-auto mb-4 max-h-48"/> :
          <svg width="200" height="100" className="mx-auto mb-4"><rect width="200" height="100" fill="#efefef"/></svg>}
        {activity.choices?.map(c => <button key={c} onClick={() => submit(c === activity.answer, c)} className="w-full p-3 rounded border mb-2 text-left">{c}</button>)}
        <div><button onClick={() => { setHints(h=>h+1); alert(activity.hint ?? 'Hint'); }}>Hint</button></div>
      </div>
    );
  }

  if (activity.type === 'tip' || activity.type === 'break') {
    return (
      <div className="p-6 bg-white rounded-2xl shadow max-w-md w-full text-center">
        <div className="text-lg font-semibold mb-4">{activity.type === 'tip' ? 'Tip' : 'Take a short break'}</div>
        <div className="mb-4">{activity.prompt}</div>
        <button onClick={() => submit(true)} className="px-4 py-2 rounded bg-blue-600 text-white">Continue</button>
      </div>
    );
  }

  return null;
}
