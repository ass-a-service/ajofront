import className from 'classnames';
import { useRouter } from 'next/router';

import { Gem, GemTheme, GemSize } from '../gem/Gem';
import { Icon } from '../icon/Icon';

type VariantX = 0 | 1 | 2 | 3;
type VariantY = 0 | 1 | 2;
type VariantTuple = [VariantX, VariantY];

type IVerticalFeatureRowProps = {
  title: string;
  icons?: Array<string>;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  gemTheme?: GemTheme;
  margin?: string;
  decoratedVariant?: VariantTuple;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    props.margin ? props.margin : 'mt-10',
    'flex',
    'vertical-feature',
    'max-w-screen-lg',
    'mx-auto',
    { decorated: props.decoratedVariant }
  );

  const getVariantClass = function (variant: VariantTuple) {
    return `deco-${variant[0]}-${variant[1]}`;
  };

  const decorativeClass = className(
    props.decoratedVariant ? getVariantClass(props.decoratedVariant) : ''
  );
  const router = useRouter();
  return (
    <div className={verticalFeatureClass}>
      {props.decoratedVariant && (
        <>
          <div className={`decorated-frame nw ${decorativeClass}`}></div>
          <div className={`decorated-frame ne ${decorativeClass}`}></div>
          <div className={`decorated-frame sw ${decorativeClass}`}></div>
          <div className={`decorated-frame se ${decorativeClass}`}></div>
        </>
      )}
      <div
        className={`content mx-2 my-3 flex flex-wrap items-stretch 
    ${props.reverse ? 'flex-row-reverse' : ''}`}
      >
        <div className="w-full sm:w-1/2 text-center p-7">
          <h3 className="text-3xl text-gold-400 font-serif uppercase">
            {props.title}
          </h3>
          {props.subtitle && (
            <h4 className="w-full text-xl text-primary-100 font-serif uppercase deco-gradient-top">
              {props.subtitle}
            </h4>
          )}
          <div className="w-full flex justify-center items-center">
            <Gem size={GemSize.sm} theme={props.gemTheme}></Gem>
            <Gem theme={props.gemTheme}></Gem>
            <Gem size={GemSize.sm} theme={props.gemTheme}></Gem>
          </div>
          <div className="mt-6 text-xl leading-9">{props.description}</div>
          <div className="mt-6">
            {props.icons?.map((icon, i) => {
              return <Icon key={i} icon={icon}></Icon>;
            })}
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex items-stretch">
          <img
            className="grow"
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
          />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
