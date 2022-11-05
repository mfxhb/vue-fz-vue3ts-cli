<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:02:43
 * @LastEditTime: 2022-08-24 15:54:29
 * @Description: 
-->
<template>
  <div>
    <input
      @keyup="keyUpEvent"
      v-model="vInput"
      style="font-size: 20px"
      type="text"
      placeholder="请输入"
    />
  </div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from "vue";
import { todolistStore } from "@/pinia/modules/todolist";
import { AddTodoListItem } from "@/pinia/modules/todolist/conf";
import { TestApi } from "@/api/todolist";

export default defineComponent({
  name: "TodolistInput",
  setup() {
    const store = todolistStore();

    let vInput: Ref<string> = ref("");
    // 接口数据处理
    async function dataListApis() {
      let result = await TestApi();
      console.log(result);
    }
    dataListApis();
    // 回车事件
    function keyUpEvent(payload: KeyboardEvent) {
      const code = payload.code;
      if (code === "Enter" && vInput.value.trim().length) {
        store[AddTodoListItem](vInput.value);
      }
    }

    return { keyUpEvent, vInput };
  },
});
</script>

<style scoped></style>
