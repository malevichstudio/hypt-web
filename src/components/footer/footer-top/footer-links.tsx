import { Box, HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import { IS_LG_WIDTH, ROUTES } from '../../../constants';
import { useIntl } from '../../../hooks';
import { styles } from './styles';

export const FooterLinks = () => {
  const { intl } = useIntl();
  const [isLgWidth] = useMediaQuery(IS_LG_WIDTH);

  const LINKS = [
    [
      { path: ROUTES.about, name: intl('app.about-us') },
      { path: ROUTES.termsAndConditions, name: intl('app.terms-conditions') },
    ],
    [
      { path: ROUTES.contacts, name: intl('app.contact-us') },
      { path: ROUTES.pricing, name: intl('app.pricing') },
    ],
    [{ path: ROUTES.privacyPolicy, name: intl('app.privacy-policy') }],
  ];

  const renderContent = () => {
    return LINKS.map((chunk, index) => (
      <Box key={index}>
        {chunk.map((route) => (
          <Link key={route.name} href={route.path}>
            <a>
              <Text sx={styles.link}>{route.name}</Text>
            </a>
          </Link>
        ))}
      </Box>
    ));
  };

  return (
    <Box>
      <Text sx={styles.title}>{intl('app.links')}</Text>
      {isLgWidth ? (
        <HStack alignItems='flex-start' spacing='14'>
          {renderContent()}
        </HStack>
      ) : (
        <VStack spacing='1' alignItems='flex-start'>
          {renderContent()}
        </VStack>
      )}
    </Box>
  );
};
