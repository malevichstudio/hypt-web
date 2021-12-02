import { API_WS_HOST } from '../../constants';
import { WebSocketLink } from './web-socket-link';

export const wsLink = process.browser
  ? new WebSocketLink({
      url: `${API_WS_HOST}/subscriptions`,
      connectionParams: () => {
        const token = localStorage.getItem('token');
        return {
          Authorization: `Bearer ${token}`,
        };
      },
    })
  : null;
