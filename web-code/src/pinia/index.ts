/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:43:12
 * @LastEditTime: 2022-08-24 15:11:27
 * @Description:
 */
import { createPinia } from "pinia";
import { App } from "vue";
import { createPiniaLocalPlugin } from "./plugin/Local";

const pinia = createPinia();
pinia.use(createPiniaLocalPlugin({ preffix: "pinia" }));

// 创建一个pinia
const createAppPinia = {
  install(app: App) {
    app.use(pinia);
  },
};

export { createAppPinia };
