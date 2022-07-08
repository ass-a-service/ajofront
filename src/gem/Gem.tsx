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

const getGemThemeName = (theme: GemTheme | undefined) =>
  GemTheme[theme || 0]?.toLowerCase();

type IGemProps = {
  small?: boolean;
  theme: GemTheme | undefined;
  margin?: string;
};

const Gem = (props: IGemProps) => {
  const gemClass = className(
    'gem',
    props.margin || 'm-3',
    getGemThemeName(props.theme),
    {
      small: props.small,
    }
  );
  return <div className={gemClass}></div>;
};

export { Gem };
