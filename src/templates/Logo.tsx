import Image from 'next/image';

import ajologo from '../../public/assets/images/ajologo.png';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image
        src={ajologo}
        width="100px"
        height="100px"
        alt="{AppConfig.site_name} logo (Billy is sus)"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
