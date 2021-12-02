import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import theme from '../theme/theme';

type Props = {
  children: React.ReactNode;
};

export const ChakraRTLProvider = ({ children }: Props) => {
  const { locale } = useRouter();

  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <ChakraProvider theme={extendTheme({ ...theme, direction })}>
      {children}
    </ChakraProvider>
  );
};
