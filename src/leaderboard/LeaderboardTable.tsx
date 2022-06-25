import { Leader } from '../types';

interface LeaderboardProps {
  table: Leader[];
}

const LeaderboardTable = ({ table }: LeaderboardProps) => (
  <div className="mt-8 flex justify-center">
    <table className="antialiased text-gray-600">
      <tr>
        <th>#</th>
        <th>User</th>
        <th>Ajos</th>
      </tr>
      {table.map((leader, i) => (
        <tr key={i}>
          <td>{i}</td>
          <td>{leader.name}</td>
          <td>{leader.ajos}</td>
        </tr>
      ))}
    </table>
  </div>
);

export { LeaderboardTable };
