import { ReactNode } from 'react';

import classNames from 'classnames';

type ISectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  sectionClass?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const sectionClass = classNames(props.sectionClass);
  return (
    <div className={sectionClass}>
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-5xl text-primary-100 font-serif uppercase">
              {props.title}
            </h2>
          )}
          {props.subtitle && (
            <h3 className="text-2xl text-primary-400 font-serif uppercase">
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
};

export { Section };
