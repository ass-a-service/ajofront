import className from 'classnames';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

type BaseProps = {
  theme: string;
};

const Base = (props: BaseProps) => {
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
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };
