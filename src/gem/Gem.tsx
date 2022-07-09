import className from 'classnames';

export enum GemTheme {
  Ruby,
  Sapphire,
  Topaz,
  Amethyst,
  Diamond,
  Emerald,
  Turquoise,
}

export enum GemSize {
  md,
  sm,
  xs,
}

const getGemTheme = (theme: GemTheme | undefined) =>
  GemTheme[theme || 0]?.toLowerCase();

const getGemSize = (size: GemSize | undefined) => GemSize[size || 0] || '';

type IGemProps = {
  small?: boolean;
  theme: GemTheme | undefined;
  size?: GemSize | undefined;
  margin?: string;
};

const Gem = (props: IGemProps) => {
  const gemClass = className(
    'gem',
    props.margin || 'm-3',
    getGemTheme(props.theme),
    getGemSize(props.size)
  );
  return <div className={gemClass}></div>;
};

export { Gem };
