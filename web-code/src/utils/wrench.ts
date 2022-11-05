/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 15:14:30
 * @LastEditTime: 2022-08-24 15:20:54
 * @Description:
 */

import { ILocal_data } from "./typers";

/**
 * 存储数据到本地
 * @param {string} key 存储的键名
 * @param {object|number|string} data 存储的数据
 * @return {void}
 */
function localSet(key: string, data: ILocal_data): void {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * 读取本地数据
 * @param {string} key 需要读取的数据键名
 * @param {any} vdefault 默认值
 * @return {any} 返回一个已经反序列化过的数据
 */
function localGet(key: string, vdefault: any): any {
  let result = localStorage.getItem(key);
  result = result ? JSON.parse(result) : vdefault;
  return result;
}

export { localSet, localGet };
