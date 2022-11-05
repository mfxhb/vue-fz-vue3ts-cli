/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:48:46
 * @LastEditTime: 2022-08-24 14:57:27
 * @Description:
 */

type ITodoListStore = IState & {};

interface IState {
  list: ITodolistItem[];
}

interface ITodolistItem {
  id: number;
  content: string;
  status: TODO_STATUS;
}

export enum TODO_STATUS {
  WAITING = "waiting", // 待处理
  DOING = "doing", // 正在执行
  FINISHED = "finished", // 已完成
}

export type { IState, ITodoListStore };
