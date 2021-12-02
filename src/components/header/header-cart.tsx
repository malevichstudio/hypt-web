import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';

import { useShoppingCartContext } from '../../context';
import { pxToRem } from '../../utils';
import { TicketsIcon } from '../icons';
import { styles } from './styles';

export const HeaderCart = () => {
  const { openShoppingCart, isCartEmpty } = useShoppingCartContext();

  return (
    <Flex align='center' ms={{ base: 4, xl: 10 }} me='4' mt='-2px'>
      <Button
        pos='relative'
        variant='unstyled'
        width='24px'
        minWidth='24px'
        height='24px'
        borderRadius='0px'
        onClick={openShoppingCart}
      >
        {!isCartEmpty ? <Box sx={styles.dot('4px', '-3px')} /> : null}
        <TicketsIcon fontSize={pxToRem(20)} />
      </Button>
    </Flex>
  );
};
