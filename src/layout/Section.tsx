import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  yPadding?: string;
  bgClass?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-5xl text-gold-300 font-serif uppercase">
            {props.title}
          </h2>
        )}
        {props.subtitle && (
          <h3 className="text-2xl text-gold-400 font-serif uppercase">
            {props.subtitle}
          </h3>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
