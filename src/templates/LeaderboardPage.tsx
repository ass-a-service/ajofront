import className from 'classnames';

import { Meta } from '../layout/Meta';
import { LeaderboardTable } from '../leaderboard/LeaderboardTable';
import { Leader } from '../types';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

type LeaderboardProps = {
  theme: string;
};
const LeaderboardPage = (props: LeaderboardProps) => {
  const table: Leader[] = [
    {
      name: 'Benmaster',
      id: BigInt('23132131'),
      ajos: 9000000,
    },
  ];
  const baseClass = className(
    'antialiased',
    'text-gray-600',
    'theme-wrapper',
    props.theme
  );
  const baseStyle = {
    position: 'relative',
  } as React.CSSProperties;

  return (
    <div className={baseClass} style={baseStyle}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <LeaderboardTable table={table} />
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
