export type ActivityType = 'mcq' | 'input' | 'image' | 'example' | 'tip' | 'break';

export interface Activity {
  id: string;
  type: ActivityType;
  difficulty: number; // 1..3
  prompt: string;
  choices?: string[];
  answer?: string;
  hint?: string;
  image?: string;
}

export interface AdaptiveState {
  mastery: number; // 0..1
  streak: number;
  fatigue: number; // 0..1
}
