<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:08:24
 * @LastEditTime: 2022-08-24 15:06:44
 * @Description: 
-->
<template>
  <div>
    <template v-for="item in list" :key="item.id">
      <div class="todoitem">
        <span>删除</span>
        <span>去完成</span>
        <span>{{ item.content }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { todolistStore } from "@/pinia/modules/todolist";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "TodoListItems",
  setup() {
    const store = todolistStore();
    const { list } = storeToRefs(store);

    return { list };
  },
});
</script>

<style lang="scss" scoped>
.todoitem {
  span {
    cursor: pointer;
    margin: 10px;
    color: #445760;
    font-weight: 700;
    &:last-child {
      cursor: default;
      color: #000;
      font-weight: 400;
    }
  }
}
</style>
