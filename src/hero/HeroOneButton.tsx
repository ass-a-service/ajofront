import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  bg?: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header
    className={`text-center
      ${props.bg ? props.bg : ''}
    `}
  >
    <h1 className="text-5xl text-gold-200 whitespace-pre-line leading-hero font-serif uppercase">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 text-gold-700 font-serif uppercase">
      {props.description}
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };
