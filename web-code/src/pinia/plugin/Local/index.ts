/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 15:07:38
 * @LastEditTime: 2022-08-24 15:22:04
 * @Description:
 */

import { localGet, localSet } from "@/utils/wrench";
import { PiniaPluginContext } from "pinia";
import { toRaw } from "vue";
import { IOptions } from "./typers";

const DEFAULT_PREFFIX = "__pinia__";
/**
 * 创建一个pinia自动存储插件
 * @param {object} options 配置
 * @return {piniaPlugin} 返回一个pinia插件实例
 */
function createPiniaLocalPlugin(options: IOptions) {
  return (ctx: PiniaPluginContext) => {
    const { store } = ctx;
    const preffix = options.preffix ?? DEFAULT_PREFFIX;
    const KEY = preffix + "-" + store.$id;

    const data = localGet(KEY, {});

    store.$subscribe(() => {
      localSet(KEY, toRaw(store.$state));
    });

    return {
      ...data,
    };
  };
}

export { createPiniaLocalPlugin };
