/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 13:59:55
 * @LastEditTime: 2022-08-24 14:45:38
 * @Description:
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createAppPinia } from "./pinia";

const app = createApp(App);

app.use(router);
app.use(createAppPinia);

app.mount("#app");
