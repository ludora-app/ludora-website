import { logo } from '@public/index';
import Image from 'next/image';
import { useMemo } from 'react';

type LogoProps = {
  size: 'sm' | 'md' | 'lg';
};

function Logo({ size }: LogoProps) {
  const logoSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return 100;
      case 'md':
        return 130;
      case 'lg':
        return 150;
      default:
        return 130;
    }
  }, [size]);

  return <Image src={logo} alt="Logo Ludora" width={logoSize} />;
}

export { Logo };
