import { Box, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import mastercardIcon from '../../../../public/images/mastercard.svg';
import paypalIcon from '../../../../public/images/paypal.svg';
import visaIcon from '../../../../public/images/visa.svg';
import { useIntl } from '../../../hooks';
import { styles } from './styles';

const PAYMENTS_LOGO = [
  { path: mastercardIcon, alt: 'Mastercard' },
  { path: paypalIcon, alt: 'PayPal' },
  { path: visaIcon, alt: 'Visa' },
];

export const FooterAccept = () => {
  const { intl } = useIntl();

  return (
    <Box>
      <Text sx={styles.title}>{intl('app.we-accepted')}</Text>
      <HStack spacing='5'>
        {PAYMENTS_LOGO.map((logo, idx) => (
          <Box key={idx}>
            <Image src={logo.path} alt={logo.alt} />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};
