/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:18:33
 * @LastEditTime: 2022-08-24 15:34:42
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { todoList } from "./modules/todoList";
import { IMetas } from "./typers";

declare module "vue-router" {
  interface RouteMeta extends IMetas {}
}

// 静态路由
export const staticRoutes: RouteRecordRaw[] = [todoList];

const routes: RouteRecordRaw[] = [
  ...staticRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/view/NotFound.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
