/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 15:36:16
 * @LastEditTime: 2022-08-24 15:51:25
 * @Description:
 */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

console.log(import.meta.env.Env_baseurl);
const request = axios.create({
  baseURL: import.meta.env.Env_baseurl,
  timeout: 3000,
});

// 请求拦截
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => Promise.reject(error)
);

export default request;
