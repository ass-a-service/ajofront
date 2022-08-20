import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section sectionClass="max-w-screen-lg mx-auto mb-8">
    <CTABanner
      title="Join the fight"
      subtitle="Launch your own ajobot."
      button={
        <Link href="https://github.com/ass-a-service/ajobot">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
