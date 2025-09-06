// server.js (minimal adaptive engine)
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuid } = require('uuid');
const app = express();
app.use(bodyParser.json());
const SESSIONS = {};

// Sample activity bank
const activities = [
  { id: 'a1', type: 'mcq', prompt: 'What is 1/2 + 1/4?', choices: ['3/4','2/3','1/4'], correct: 0, difficulty: 'easy', skill: 'fractions', hint: 'Add numerators, common denominator.' },
  { id: 'a2', type: 'input', prompt: 'Fill: 2/5 + 1/5 = ___', answer: '3/5', difficulty: 'easy', skill: 'fractions', hint: 'Same denominator.' },
  { id: 'a3', type: 'mcq', prompt: 'Which is bigger: 1/2 or 1/3?', choices: ['1/2','1/3'], correct: 0, difficulty: 'easy', skill: 'fractions', hint: 'Visualize area.' },
  { id: 'a4', type: 'mcq', prompt: 'Add: 3/8 + 1/4 = ?', choices: ['1/2','5/8','3/4'], correct: 1, difficulty: 'medium', skill: 'fractions', hint: 'Convert 1/4 to 2/8.' },
  { id: 'a5', type: 'input', prompt: 'Fill: 5/6 + 1/3 = ___', answer: '7/6', difficulty: 'medium', skill: 'fractions', hint: 'Common denominator 6.' },
  { id: 'a6', type: 'mcq', prompt: 'Which is larger: 5/7 or 4/6?', choices: ['5/7','4/6','Equal'], correct: 1, difficulty: 'hard', skill: 'fractions', hint: 'Cross-multiply.' }
];

function computeCompetence(skill) {
  // (correct + 1) / (attempts + 2)
  return (skill.correct + 1) / (skill.attempts + 2);
}
function computeEngagement(time_ms, hints, retries) {
  const ideal = 6000;
  const rtNorm = Math.max(-1, Math.min(1, (time_ms - ideal) / ideal));
  const hintPenalty = 0.2 * (hints || 0);
  const retriesPenalty = 0.15 * (retries || 0);
  return Math.max(0, 1 - rtNorm - hintPenalty - retriesPenalty);
}
function decideNext(competence, engagement) {
  if (engagement < 0.35) return { action: 'break', rationale: 'low engagement' };
  if (competence < 0.4) return { action: 'easy', rationale: 'scaffolded hint + easy activity' };
  if (competence < 0.7) return { action: 'medium', rationale: 'same difficulty + explainer' };
  return { action: 'hard', rationale: 'challenge + assessment' };
}

app.post('/api/session/start', (req, res) => {
  const sessionId = uuid();
  SESSIONS[sessionId] = {
    id: sessionId,
    skills: { 'fractions': { attempts:0, correct:0 } },
    events: [],
    start: Date.now()
  };
  return res.json({ sessionId, skills: SESSIONS[sessionId].skills });
});

app.get('/api/session/:id/next', (req, res) => {
  const s = SESSIONS[req.params.id];
  if(!s) return res.status(404).send('not found');
  // Compute competence/engagement from last event
  const skill = s.skills['fractions'];
  const last = s.events[s.events.length-1];
  const competence = computeCompetence(skill);
  const engagement = last ? computeEngagement(last.time_ms, last.hints_used, last.retries) : 1;
  const next = decideNext(competence, engagement);
  // Pick activity by action
  let activity;
  if (next.action === 'break') activity = { id: 'break', type: 'tip', prompt: 'Take a short break!', difficulty: 0 };
  else activity = activities.find(a => a.difficulty === (next.action === 'easy' ? 'easy' : next.action));
  if (!activity) activity = activities[0];
  return res.json({ activity, rationale: next.rationale, competence, engagement });
});

app.post('/api/session/:id/submit', (req, res) => {
  const s = SESSIONS[req.params.id];
  if(!s) return res.status(404).send('not found');
  const { activity_id, answerIndex, answer, time_ms, hints_used, retries } = req.body;
  s.events.push({activity_id, answerIndex, answer, time_ms, hints_used, retries, t: Date.now()});
  // update simple competence:
  const skill = s.skills['fractions'];
  skill.attempts += 1;
  let correct = 0;
  const act = activities.find(a => a.id === activity_id);
  if (act) {
    if (act.type === 'mcq') correct = (answerIndex === act.correct) ? 1 : 0;
    if (act.type === 'input') correct = (String(answer).trim() === String(act.answer).trim()) ? 1 : 0;
  }
  skill.correct += correct;
  // compute mastery %
  const mastery = computeCompetence(skill);
  // compute engagement
  const engagement = computeEngagement(time_ms, hints_used, retries);
  return res.json({ mastery, engagement });
});

app.get('/api/session/:id/progress', (req, res) => {
  const s = SESSIONS[req.params.id];
  if(!s) return res.status(404).send('not found');
  const skill = s.skills['fractions'];
  const mastery = computeCompetence(skill);
  return res.json({ mastery, timeline: s.events });
});

app.listen(4000, ()=> console.log('listening 4000'));
