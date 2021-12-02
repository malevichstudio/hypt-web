import { Box } from '@chakra-ui/react';

import { FooterBottom } from './footer-bottom/footer-bottom';
import { FooterTop } from './footer-top/footer-top';

export const Footer = () => {
  return (
    <Box as='footer' mt='auto' bg='#222222'>
      <FooterTop />
      <FooterBottom />
    </Box>
  );
};
