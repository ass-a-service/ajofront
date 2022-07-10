import { ReactNode } from 'react';

import className from 'classnames';

import { getGemString, GemTheme } from '../gem/Gem';

type IButtonProps = {
  xl?: boolean;
  gem?: GemTheme;
  children: ReactNode;
};

const Button = (props: IButtonProps) => {
  const btnClass = className(
    {
      btn: true,
      'btn-xl': props.xl,
      'btn-base': !props.xl,
      'btn-primary': true,
    },
    props.gem ? `gem-btn ${getGemString(props.gem)}` : ''
  );

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
