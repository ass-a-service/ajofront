import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Icon } from '../icon/Icon';
import { Section } from '../layout/Section';
import { Header } from './Header';

const Hero = () => (
  <Background color="" bgImage="ajo1.webp">
    <Header />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'Farm ajos by spamming :garlic:'}</>}
        description={
          <>
            {'Beware of the Vampire'}
            <Icon icon="bat"></Icon>
          </>
        }
        button={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/api/oauth2/authorize?client_id=967138080375046214&permissions=265280&scope=bot%20applications.commands"
          >
            <Button xl>
              Put
              <Icon icon="garlic"></Icon>
              in your
              <Icon icon="discord"></Icon>
            </Button>
          </a>
        }
      />
    </Section>
  </Background>
);

export { Hero };
