import { baseUrl } from '../config/env';
import fetch from './index';

const https = {
  download() {
    return fetch({
      url: `${baseUrl}/download/wps.dmg`,
      method: 'GET',
    });
  },
  payOrder() {
    return fetch({
        url: `${baseUrl}/api/order`,
        method: 'GET',
      });
  }
};
export default https;
