import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((_, { headers }) => {
  const token = process.browser ? localStorage.getItem('token') : null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
