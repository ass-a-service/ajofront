import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { GemTheme } from '../gem/Gem';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarComplement } from '../navigation/NavbarComplement';

const Hero = () => (
  <>
    <Background video="embers3" image="ajo2.webp">
      <Section sectionClass="hero">
        <HeroOneButton
          title={
            <span className="deco-gradient-text">
              {'Farm ajos by spamming :garlic:'}
            </span>
          }
          description={
            <span className="deco-gradient-pad">{'Beware of the Vampire'}</span>
          }
          button={
            <Button gem={GemTheme.emerald}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/api/oauth2/authorize?client_id=967138080375046214&permissions=265280&scope=bot%20applications.commands"
              >
                Play free
              </a>
            </Button>
          }
        />
      </Section>
    </Background>
    <NavbarComplement></NavbarComplement>
  </>
);

export { Hero };
