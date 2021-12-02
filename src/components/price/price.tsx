import { Flex, StyleProps, Text } from '@chakra-ui/react';
import React from 'react';

import { Maybe } from '../../graphql/generated';
import { pxToRem } from '../../utils';
import { styles } from './styles';

type Props = {
  value?: Maybe<number>;
  discount?: Maybe<number>;
  priceProps?: StyleProps;
  discountProps?: StyleProps;
};

export const Price = ({
  value,
  discount,
  priceProps,
  discountProps,
}: Props) => {
  if (value === undefined || value === null) return null;

  return (
    <Flex alignItems='center'>
      <Text fontFamily='medium' {...priceProps}>
        AED {value}
      </Text>
      {discount ? (
        <Text sx={styles.discount} fontSize={pxToRem(13)} {...discountProps}>
          AED {discount}
        </Text>
      ) : null}
    </Flex>
  );
};
