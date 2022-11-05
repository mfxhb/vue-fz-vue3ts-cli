/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:51:17
 * @LastEditTime: 2022-08-24 14:57:42
 * @Description:
 */
import { AddTodoListItem } from "./conf";
import { ITodoListStore, TODO_STATUS } from "./typers";

const Actions = {
  [AddTodoListItem](this: ITodoListStore, item: string) {
    const todolist = this;
    todolist.list.unshift({
      id: 123,
      content: item,
      status: TODO_STATUS.WAITING,
    });
  },
};

export { Actions };
