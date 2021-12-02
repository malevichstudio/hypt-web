import { useToast, UseToastOptions } from '@chakra-ui/react';
import React from 'react';

import { useErrorsStore } from '../graphql/client/error-link';
import { useIntl } from '../hooks';

export const ToastProvider = ({ children }: Props) => {
  const { intl } = useIntl();
  const toast = useToast();
  const { hasError, error, date } = useErrorsStore((state) => state);

  React.useEffect(() => {
    if (hasError) {
      toast({
        title: intl('app.error'),
        description: error?.message || error[0]?.message || '',
        status: 'error',
        ...toastConfig,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, hasError, date]);

  const handleShowToast = ({
    status = 'success',
    title = intl('app.done'),
    description = '',
  }: UseToastOptions) => {
    toast({
      title,
      description,
      status,
      ...toastConfig,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast: handleShowToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const toastConfig: UseToastOptions = {
  duration: 9000,
  isClosable: true,
  variant: 'left-accent',
  position: 'bottom-right',
};

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  showToast: (options: UseToastOptions) => void;
};

export const ToastContext = React.createContext<ContextProps>({
  showToast: () => {},
});
export const useToastContext = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
