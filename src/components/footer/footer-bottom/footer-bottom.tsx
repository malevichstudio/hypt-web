import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { ROUTES } from '../../../constants';
import { useIntl } from '../../../hooks';
import { FooterLanguageSwitcher } from './footer-language-switcher';

export const FooterBottom = () => {
  const { intl } = useIntl();

  return (
    <Box bg='#323333' py='4'>
      <Container>
        <Flex alignItems='center' flexDirection={{ base: 'column', md: 'row' }}>
          <Text color='gray.400' fontSize='sm' me={{ base: '0', md: '20' }}>
            {intl('app.copyright')}
          </Text>
          <Flex my='2.5' me={{ base: '0', md: 'auto' }}>
            <Link href={ROUTES.privacyPolicy}>
              <a>
                <Text
                  color='gray.400'
                  fontSize='sm'
                  _hover={{ color: 'white' }}
                >
                  {intl('app.privacy-policy')}
                </Text>
              </a>
            </Link>
            <Text color='gray.400' mx='2.5'>
              |
            </Text>
            <Link href={ROUTES.termsAndConditions}>
              <a>
                <Text
                  color='gray.400'
                  fontSize='sm'
                  _hover={{ color: 'white' }}
                >
                  {intl('app.terms-conditions')}
                </Text>
              </a>
            </Link>
          </Flex>
          <FooterLanguageSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};
