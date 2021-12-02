import { Box, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

import logo from '../../../public/images/logo.png';
import { ImageWrapper } from '../index';

export const HeaderLogo = () => {
  const size = useBreakpointValue({
    base: { width: 84, height: 44 },
    xl: { width: 115, height: 60 },
  });

  return (
    <Box me={{ base: 'auto', xl: 6 }}>
      <Link href='/'>
        <a>
          <ImageWrapper src={logo} alt='Hypt logo' borderRadius={0} {...size} />
        </a>
      </Link>
    </Box>
  );
};
