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
  },
  orderCheck(data) {
    let params = data
    return fetch({
      url: `${baseUrl}/api/order/check`,
      method: 'GET',
      params
    });
  },
  getCode(params) {
    return fetch({
      url: `${baseUrl}/api/code`,
      method: 'GET',
      params
    });
  }
};
export default https;
