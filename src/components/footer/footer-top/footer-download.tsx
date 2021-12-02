import { Box, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import appStoreIcon from '../../../../public/images/available-on-the-app-store.svg';
import googlePlayIcon from '../../../../public/images/get-it-on-google-play.svg';
import { useIntl } from '../../../hooks';
import { styles } from './styles';

export const FooterDownload = () => {
  const { intl } = useIntl();

  return (
    <Box>
      <Text
        sx={{
          ...styles.title,
          mb: '4',
        }}
      >
        {intl('app.download-our-app')}
      </Text>
      <HStack spacing='7' mb='-3px'>
        <Link href={`https://play.google.com/`}>
          <a target='_blank'>
            <Image
              src={googlePlayIcon}
              width={136}
              height={52}
              alt='Google play link'
            />
          </a>
        </Link>
        <Link href={`https://www.apple.com/app-store/`}>
          <a target='_blank'>
            <Image
              src={appStoreIcon}
              width={136}
              height={52}
              alt='App store link'
            />
          </a>
        </Link>
      </HStack>
    </Box>
  );
};
