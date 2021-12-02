import { Box, HStack, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import { useIntl } from '../../../hooks';
import { styles } from './styles';

export const FooterSocials = () => {
  const { intl } = useIntl();

  const SOCIALS_LINKS = [
    { path: 'https://www.facebook.com/', icon: FaFacebookF },
    { path: 'https://www.instagram.com/', icon: FaInstagram },
    { path: 'https://www.youtube.com/', icon: FaYoutube },
    { path: 'https://www.linkedin.com/', icon: FaLinkedinIn },
    { path: 'https://twitter.com/', icon: FaTwitter },
  ];

  return (
    <Box>
      <Text
        sx={{
          ...styles.title,
          mb: '5',
        }}
      >
        {intl('app.follow-us')}
      </Text>
      <HStack spacing='4'>
        {SOCIALS_LINKS.map((link, idx) => (
          <Link href={link.path} key={idx}>
            <a target='_blank'>
              <IconButton
                as='span'
                aria-label='Social link'
                icon={<link.icon />}
                sx={styles.socialLink}
              />
            </a>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};
