/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:46:06
 * @LastEditTime: 2022-08-24 14:53:57
 * @Description:
 */
import { defineStore } from "pinia";
import { IState } from "./typers";
import { Actions } from "./wrench";

const todolistStore = defineStore("todolist", {
  state(): IState {
    return {
      list: [],
    };
  },
  actions: Actions,
});

export { todolistStore };
