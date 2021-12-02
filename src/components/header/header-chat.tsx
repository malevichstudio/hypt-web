import { Box, IconButton } from '@chakra-ui/react';

import { pxToRem } from '../../utils';
import { ChatIcon } from '../icons';

export const HeaderChat = () => {
  return (
    <Box>
      <IconButton
        aria-label='Open chat'
        icon={
          <Box mb='-2px'>
            <ChatIcon fontSize={pxToRem(20)} fill='white' />
          </Box>
        }
        borderRadius='xl'
        ms='4'
      />
    </Box>
  );
};
