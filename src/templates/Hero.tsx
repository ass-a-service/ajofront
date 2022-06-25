import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ass-a-service/ajobot">
            <a>GitHub</a>
          </Link>
        </li>
        <Link href="https://github.com/ass-a-service/ajobot/wiki">
          <a>Docs</a>
        </Link>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Farm ajos by spamming :garlic:\n'}
            <span className="text-primary-500">Beware of the VAMPIRE</span>
          </>
        }
        description="The most exciting game since El Mongo"
        button={
          <Link href="https://discord.com/api/oauth2/authorize?client_id=967138080375046214&permissions=265280&scope=bot%20applications.commands">
            <a>
              <Button xl>Put ajos in your discord</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
