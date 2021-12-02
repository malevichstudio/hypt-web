import '../../public/fonts/style.css';
import '../../public/styles/slider.css';
import '../../public/styles/pagination.scss';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import {
  AppBannerProvider,
  AuthProvider,
  ChakraRTLProvider,
  IntlProvider,
  ShoppingCartProvider,
  ToastProvider,
} from '../context';
import { client } from '../graphql/client/client';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <IntlProvider>
        <ChakraRTLProvider>
          <ToastProvider>
            <ShoppingCartProvider>
              <AuthProvider>
                <AppBannerProvider>
                  <Component {...pageProps} />
                </AppBannerProvider>
              </AuthProvider>
            </ShoppingCartProvider>
          </ToastProvider>
        </ChakraRTLProvider>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default App;
