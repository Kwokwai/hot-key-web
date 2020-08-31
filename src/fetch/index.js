import axios from 'axios';// 引入axios

const fetch = function (options) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POSTGET, POST, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': 'x-requested-with,content-type'
    };
    if (options.method === 'FILE') {
      options.method = 'POST';
      headers['Content-Type'] = 'multipart/form-data';
    }
    if (options.headers) {
      for (const key in options.headers) {
        headers[key] = options.headers[key];
      }
    }
    const instance = axios.create({ // instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
      // 所有的请求都会带上这些配置，比如全局都要用的身份信息等。
      headers,
      timeout: 30 * 1000, // 30秒超时
    });
    instance(options)
      .then((response) => { // then 请求成功之后进行什么操作
        console.warn('options', options, response);
        resolve(response.data);// 把请求到的数据发到引用请求的地方
      })
      .catch((error) => {
        console.warn('options error', options, error);
        reject(error);
      });
  });
};

export default fetch;
