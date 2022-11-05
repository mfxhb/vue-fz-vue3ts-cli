<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-24 14:14:38
 * @LastEditTime: 2022-08-24 14:54:15
 * @Description: 
-->
<template>
  <div>
    <TInput />
    <h2>TodoList</h2>
    <br />
    <IItems />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TInput from "@/view/Input/index.vue";
import IItems from "@/view/Items/index.vue";

export default defineComponent({
  name: "TodoList",
  components: { TInput, IItems },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
