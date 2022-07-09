type IIconProps = {
  icon: string;
  lg?: boolean;
};

const Icon = (props: IIconProps) => (
  <img
    className="icon"
    alt={`${props.icon}`}
    src={`assets/images/icons/${props.icon}-${props.lg ? 100 : 50}.png`}
    style={{
      display: 'inline-block',
      width: props.lg ? '100px' : '50px',
      height: props.lg ? '100px' : '50px',
    }}
  />
);

export { Icon };
