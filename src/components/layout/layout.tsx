import {
  Box,
  Container,
  Flex,
  HStack,
  StyleProps,
  useMediaQuery,
} from '@chakra-ui/react';

import { IS_LG_WIDTH } from '../../constants';
import { pxToRem } from '../../utils';
import { Footer, Header } from '../index';

type Props = {
  containerSize?: string;
  withContainer?: boolean;
  headerPosition?: 'static' | 'fixed' | 'absolute';
  wrapperProps?: StyleProps;
  children: React.ReactNode;
};

export const Layout = ({
  headerPosition,
  withContainer = true,
  containerSize = 'container.lg',
  wrapperProps,
  children,
}: Props) => {
  return (
    <Flex minH='100vh' direction='column' position='relative'>
      <Header position={headerPosition} />
      <main>
        <Box pb={10} {...wrapperProps}>
          {withContainer ? (
            <Container maxW={containerSize}>{children}</Container>
          ) : (
            children
          )}
        </Box>
      </main>
      <Footer />
    </Flex>
  );
};

type RowProps = {
  children: React.ReactNode;
};

Layout.Row = function Row({ children }: RowProps) {
  return (
    <HStack
      spacing='7'
      align='flex-start'
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
      display={{
        base: 'block',
        lg: 'flex',
      }}
    >
      {children}
    </HStack>
  );
};

type LeftProps = {
  children: React.ReactNode;
};

Layout.Left = function Left({ children }: LeftProps) {
  return <Box flex={1}>{children}</Box>;
};

type RightProps = {
  width?: number;
  children: React.ReactNode;
};

Layout.Right = function Right({ width = 380, children }: RightProps) {
  const [isLgWidth] = useMediaQuery(IS_LG_WIDTH);

  if (!isLgWidth) return null;

  return (
    <Box
      w={{
        base: '100%',
        sm: pxToRem(340),
        xl: pxToRem(width),
      }}
      minW={{
        base: '100%',
        sm: pxToRem(340),
        xl: pxToRem(width),
      }}
    >
      {children}
    </Box>
  );
};
