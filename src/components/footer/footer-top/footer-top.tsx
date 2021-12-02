import { Box, Container, Flex, Spacer } from '@chakra-ui/react';

import { pxToRem } from '../../../utils';
import { FooterAccept } from './footer-accept';
import { FooterDownload } from './footer-download';
import { FooterInfo } from './footer-info';
import { FooterLinks } from './footer-links';
import { FooterSocials } from './footer-socials';
import { FooterSubscribe } from './footer-subscribe';
import { styles } from './styles';

export const FooterTop = () => {
  return (
    <Box pt={pxToRem(68)} pb={pxToRem(32)}>
      <Container>
        <Flex sx={styles.descriptionWrapper}>
          <Box me='16'>
            <FooterInfo />
            <Spacer h='10' />
            <FooterAccept />
          </Box>
          <Flex sx={styles.linksWrapper}>
            <FooterLinks />
            <Spacer mt='auto' h='14' />
            <FooterDownload />
          </Flex>
          <Box maxW={pxToRem(350)} sx={styles.subscriptionWrapper}>
            <FooterSubscribe />
            <Spacer h='10' />
            <FooterSocials />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
