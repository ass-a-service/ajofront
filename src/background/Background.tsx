import { ReactNode } from 'react';

import classNames from 'classnames';

type IBackgroundProps = {
  children: ReactNode;
  image?: string;
  video?: string;
};

const Background = (props: IBackgroundProps) => {
  const bgClass = classNames('with-bg');
  return (
    <div className={bgClass}>
      {props.children}
      {props.image && (
        <img
          className="overlay"
          src={`assets/images/${props.image}`}
          alt="background image"
        />
      )}
      {props.video && (
        <video muted autoPlay loop className="underlay">
          <source src={`assets/video/${props.video}.webm`} type="video/webm" />
          <source src={`assets/video/${props.video}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export { Background };
