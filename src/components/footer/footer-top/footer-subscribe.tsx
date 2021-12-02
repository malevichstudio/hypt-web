import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { FiSend } from 'react-icons/fi';

import { useCreateSubscriptionMutation } from '../../../graphql/generated';
import { useIntl, useToast } from '../../../hooks';
import { subscribeSchema } from '../../../validation/schemas/subscribe.schema';
import { styles } from './styles';

type FormValuesType = {
  email: string;
};

export const FooterSubscribe = () => {
  const { intl } = useIntl();
  const { showToast } = useToast();

  const [createSubscriptionMutation, { loading }] =
    useCreateSubscriptionMutation({
      onCompleted: (response) => {
        showToast({
          status: response.createSubscription?.status ? 'success' : 'warning',
          description: intl(
            response.createSubscription?.status
              ? 'app.you-have-successfully-subscribed'
              : 'app.already-subscribed',
          ),
        });
      },
    });

  const handleFormSubmit = (
    values: FormValuesType,
    helpers: FormikHelpers<FormValuesType>,
  ) => {
    createSubscriptionMutation({
      variables: {
        email: values.email,
      },
    });
    helpers.resetForm();
  };

  const initialValues: FormValuesType = {
    email: '',
  };

  return (
    <Box>
      <Text sx={styles.title}>{intl('app.stay-tuned')}</Text>
      <Text color='gray.400' fontSize='sm' mb='4'>
        {intl('app.stay-tuned-description')}
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={subscribeSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <InputGroup>
            <Field name='email'>
              {({ field }: FieldProps) => (
                <Input
                  type='email'
                  placeholder={intl('app.stay-tuned-placeholder')}
                  sx={styles.input}
                  {...field}
                />
              )}
            </Field>
            <InputRightElement>
              <IconButton
                type='submit'
                aria-label='Submit email'
                icon={<FiSend color='green.500' />}
                borderRadius='sm'
                isLoading={loading}
              />
            </InputRightElement>
          </InputGroup>
        </Form>
      </Formik>
    </Box>
  );
};
