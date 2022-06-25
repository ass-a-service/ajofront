import { Meta } from '../layout/Meta';
import { LeaderboardTable } from '../leaderboard/LeaderboardTable';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

const LeaderboardPage = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <LeaderboardTable />
    <Footer />
  </div>
);

export default LeaderboardPage;
