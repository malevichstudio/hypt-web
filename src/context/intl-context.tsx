import { useRouter } from 'next/router';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

const languages = {
  en: require('../locale/en_US.json'),
  ar: require('../locale/ar_AE.json'),
};

type Props = {
  children: React.ReactNode;
};

export function IntlProvider({ children }: Props) {
  const { locale = 'en', defaultLocale } = useRouter();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const messages = languages[locale];

  return (
    <ReactIntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </ReactIntlProvider>
  );
}
