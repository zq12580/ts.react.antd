import Axios from 'axios';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { message, notification } from 'antd';

let axiosinster = Axios.create();

// GET请求
const get = (params: Options) => {
  const OPTIONS: Options = { ...{ method: 'GET' }, ...params }
  return axiosinster.request(OPTIONS);
}

// POST请求
const post = (params: Options) => {
  const OPTIONS: Options = { ...{ method: 'POST' }, ...params }
  return axiosinster.request(OPTIONS);
};

// 请求拦截
axiosinster.interceptors.request.use(
  config => {
    // 配置请求信息
    NProgress.start()
    return config;
  },
  error => {
    // 请求出错
    return Promise.reject(error);
  }
);

//  响应拦截
axiosinster.interceptors.response.use(
  response => {
    // 返回响应信息
    NProgress.done(true)
    return response.data;
  },
  error => {
    // 响应出错
    notification.error({
      message: `${error}`,
      placement: 'bottomLeft',
    });
    NProgress.done(true)
    // return error
  }
);

export default { GET: get, POST: post };

// 数据类型
// interface Params {
//   url: string;//路径
//   params?: any;//请求参数
//   contentType?: string;//Post请求的两种编码格式
// }
interface Options {
  url: string;//路径
  params?: any;//请求参数
  method?: 'GET' | 'POST';//请求方式
  contentType?: string;//Post请求的两种编码格式
}