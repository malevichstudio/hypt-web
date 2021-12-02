import { InputProps, StyleProps } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import React from 'react';

import { TextFieldView } from './text-field-view';

type InputTypes = 'text' | 'password' | 'email' | 'tel' | 'url';

export type CommonTextFieldProps = {
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value: any) => void;
  label?: string;
  placeholder?: string;
  type?: InputTypes;
  InputLeftElement?: React.ReactNode;
  InputRightElement?: React.ReactNode;
  inputProps?: InputProps;
  wrapperProps?: StyleProps;
};

type Props = CommonTextFieldProps & {
  name?: string;
};

type FormProps = CommonTextFieldProps & {
  name: string;
};

export const TextField = ({ name, value, onChange, ...props }: Props) => {
  if (name) return <TextFieldForm name={name} {...props} />;

  return (
    <TextFieldView name={name} value={value} onChange={onChange} {...props} />
  );
};

const TextFieldForm = ({ name, ...props }: FormProps) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const hasError = Boolean(meta.error && meta.touched);

  return (
    <TextFieldView
      name={name}
      value={field.value}
      onChange={(value) => setFieldValue(name, value)}
      hasError={hasError}
      errorMessage={meta.error}
      {...props}
    />
  );
};
