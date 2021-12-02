import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMapPin2Line } from 'react-icons/ri';

import logo from '../../../../public/images/logo-light.png';
import { useIntl } from '../../../hooks';
import { pxToRem } from '../../../utils';

export const FooterInfo = () => {
  const { intl } = useIntl();

  return (
    <Box>
      <Link href='/'>
        <a>
          <Image src={logo} width={100} height={52} alt='Hypt logo' />
        </a>
      </Link>
      <Text color='gray.400' fontSize='sm'>
        {intl('app.slogan')}
      </Text>
      <Flex mt='12'>
        <Icon as={RiMapPin2Line} color='gray.400' me='2.5' mt='0.5' />
        <Text color='gray.400' fontSize='sm' maxW={pxToRem(240)}>
          {intl('app.contact-address')}
        </Text>
      </Flex>
    </Box>
  );
};
