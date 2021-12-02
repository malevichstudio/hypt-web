import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement as ChakraInputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { pxToRem } from '../../utils';
import { CommonTextFieldProps } from './text-field';

type InputTypes = 'text' | 'password' | 'email' | 'tel' | 'url';

type Props = CommonTextFieldProps & {
  name?: string;
  hasError?: boolean;
  errorMessage?: string;
};

export const TextFieldView = ({
  name = '',
  value,
  onChange,
  label,
  placeholder,
  type = 'text',
  hasError,
  errorMessage,
  inputProps,
  wrapperProps,
  InputLeftElement,
  InputRightElement,
}: Props) => {
  const [currentInputType, setCurrentInputType] =
    React.useState<InputTypes>(type);

  const handleChangeType = () => {
    setCurrentInputType((prevState) =>
      prevState === 'password' ? 'text' : 'password',
    );
  };

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      if (type === 'tel') {
        if (!event.currentTarget.value.match(/[^0-9.,+-]/)) {
          onChange(event.currentTarget.value);
        }
      } else {
        onChange(event.currentTarget.value);
      }
    }
  };

  const inputOptions = {
    value,
    onChange: handleChangeInput,
    id: name,
    placeholder,
    type: currentInputType,
    ...inputProps,
  };

  return (
    <FormControl
      isInvalid={hasError}
      mb='2.5'
      isDisabled={inputProps?.isDisabled}
      {...wrapperProps}
    >
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      <InputGroup size='lg'>
        {InputLeftElement ? InputLeftElement : null}
        <Input {...inputOptions} />
        {InputRightElement ? InputRightElement : null}
        {type === 'password' ? (
          <ChakraInputRightElement width={pxToRem(72)}>
            <IconButton
              variant='ghost'
              size='sm'
              color='gray.500'
              icon={
                currentInputType === 'password' ? (
                  <AiOutlineEye size={pxToRem(24)} />
                ) : (
                  <AiOutlineEyeInvisible size={pxToRem(24)} />
                )
              }
              aria-label='Toggle password visibility'
              onClick={handleChangeType}
            />
          </ChakraInputRightElement>
        ) : null}
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
