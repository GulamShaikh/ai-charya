
const users = [
  { name: 'Manuel Robbins', score: 35678, rank: 1 },
  { name: 'Marian Long', score: 9789, rank: 2 },
  { name: 'Russell Morrison', score: 3789, rank: 3 },
  { name: 'Marie Ball', score: 957, rank: 4 },
  { name: 'John Erickson', score: 743, rank: 5 },
  { name: 'Juan Huff', score: 512, rank: 6 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-200 via-green-200 to-blue-200 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center font-poppins tracking-tight">Leaderboard</h1>
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.name} className={`flex items-center justify-between rounded-xl px-4 py-3 font-poppins shadow transition-all duration-300 hover:scale-105 ${user.rank === 1 ? 'bg-yellow-100' : user.rank === 2 ? 'bg-orange-100' : user.rank === 3 ? 'bg-green-100' : 'bg-blue-100'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${user.rank === 1 ? 'bg-yellow-400 text-white' : user.rank === 2 ? 'bg-orange-400 text-white' : user.rank === 3 ? 'bg-green-400 text-white' : 'bg-blue-400 text-white'}`}>{user.rank}</div>
                <span className="font-semibold text-lg">{user.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-green-700">{user.score}</span>
                <span className="text-sm">pts</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
