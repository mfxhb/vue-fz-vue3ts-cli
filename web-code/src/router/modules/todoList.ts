/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:24:13
 * @LastEditTime: 2022-08-24 15:34:52
 * @Description:
 */
import { RouteRecordRaw } from "vue-router";

const todoList: RouteRecordRaw = {
  path: "/todolist",
  name: "todolist",
  component: () => import("@/view/TodoList/index.vue"),
  meta: {
    alias: "TodoList",
  },
};

export { todoList };
