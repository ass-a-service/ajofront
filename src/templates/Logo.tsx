import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'text-3xl' : 'text-xl';

  return (
    <span
      className={`text-primary-200 font-serif uppercase deco-gradient-text inline-flex items-center ${fontStyle}`}
    >
      <img
        src="/assets/images/ajologo.png"
        width="50px"
        height="50px"
        alt="{AppConfig.site_name} logo (Billy is sus)"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
