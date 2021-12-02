import { Box, Button } from '@chakra-ui/react';
import React from 'react';

import {
  ModelNamePromocode,
  useGetPromocodeLazyQuery,
} from '../../graphql/generated';
import { useIntl } from '../../hooks';
import { PromocodeInfoType } from '../../types';
import { pxToRem } from '../../utils';
import { TextField } from '../index';

type Props = {
  modelName: ModelNamePromocode;
  modelId: number;
  onGetPromocodeInfo?: (value: PromocodeInfoType) => void;
};

export const PromoCodeForm = ({
  modelName,
  modelId,
  onGetPromocodeInfo,
}: Props) => {
  const { intl } = useIntl();

  const [value, setValue] = React.useState<string>('');

  const [getPromocodeLazyQuery, { loading }] = useGetPromocodeLazyQuery({
    onCompleted: (response) => {
      setValue('');
      if (onGetPromocodeInfo) {
        onGetPromocodeInfo({
          id: response?.getPromocode?.id as number,
          discount: response?.getPromocode?.discount as number,
        });
      }
    },
  });

  const handleFormSubmit = () => {
    if (!value) return null;
    getPromocodeLazyQuery({
      variables: {
        modelName,
        modelId,
        code: value,
      },
    });
  };

  return (
    <Box pos='relative' width='100%'>
      <TextField
        value={value}
        onChange={setValue}
        label={intl('app.enter-promocode')}
        wrapperProps={{
          mb: 0,
        }}
        inputProps={{
          paddingRight: pxToRem(100),
        }}
      />
      <Button
        onClick={handleFormSubmit}
        variant='solid'
        pos='absolute'
        bottom='1'
        insetEnd='1'
        zIndex={1}
        isLoading={loading}
        isDisabled={!value}
      >
        {intl('app.apply')}
      </Button>
    </Box>
  );
};
