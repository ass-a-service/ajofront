import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type IHeaderProps = {
  sticky?: boolean;
};

const Header = (props: IHeaderProps) => (
  <Section sectionClass={`header ${props.sticky ? 'sticky' : ''}`}>
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/leaderboard">
          <a>Leaderboard</a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/ass-a-service/ajobot/wiki">
          <a>Docs</a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/ass-a-service/ajobot">
          <a>GitHub</a>
        </Link>
      </li>
    </NavbarTwoColumns>
  </Section>
);

export { Header };
