import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  bgImage?: string;
  color?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`${props.color ? props.color : ''}`}
    style={{ position: 'relative' }}
  >
    <img
      className="heroBg"
      src={`assets/images/${props.bgImage ? props.bgImage : ''}`}
      alt="background image"
    />
    {props.children}
  </div>
);

export { Background };
