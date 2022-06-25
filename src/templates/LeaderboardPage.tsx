import { Meta } from '../layout/Meta';
import { LeaderboardTable } from '../leaderboard/LeaderboardTable';
import { Leader } from '../types';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

const LeaderboardPage = () => {
  const table: Leader[] = [
    {
      name: 'Benmaster',
      id: BigInt('23132131'),
      ajos: 9000000,
    },
  ];
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <LeaderboardTable table={table} />
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
