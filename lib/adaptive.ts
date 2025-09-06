import { AdaptiveState, ActivityType } from './types';

export function initState(): AdaptiveState {
  return { mastery: 0.25, streak: 0, fatigue: 0 };
}

export function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

export function updateState(prev: AdaptiveState, correct: boolean, rtMs: number, hints: number): AdaptiveState {
  const learnRate = 0.12;
  const forgetRate = 0.08;
  const speedFactor = clamp01((60000 - rtMs) / 60000);
  const hintPenalty = 0.05 * hints;

  let mastery = prev.mastery + (correct ? learnRate : -forgetRate) + 0.05 * (speedFactor - 0.5) - hintPenalty;
  mastery = clamp01(mastery);

  const streak = correct ? prev.streak + 1 : 0;

  let fatigue = prev.fatigue + (rtMs > 45000 ? 0.08 : 0) + (hints > 0 ? 0.05 : 0) + (correct ? -0.02 : 0.04);
  fatigue = clamp01(fatigue);

  return { mastery, streak, fatigue };
}

export function decideNext(state: AdaptiveState) {
  if (state.fatigue > 0.6) return { type: 'break' as ActivityType, reason: 'fatigue high' };
  if (state.mastery < 0.4) return { type: 'example' as ActivityType, difficulty: 1, reason: 'low mastery' };
  if (state.mastery < 0.7) return { type: 'mcq' as ActivityType, difficulty: 2, reason: 'practice' };
  return { type: 'challenge' as ActivityType, difficulty: 3, reason: 'advanced' };
}
