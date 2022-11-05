<!--
 * @Author: BORING GHOST
 * @Date: 2022-08-24 13:59:55
 * @LastEditTime: 2022-08-24 15:35:06
 * @Description: 
-->
<template>
  <div>
    <button style="margin-right: 20px" @click="pageTo('/')">Home</button>
    <template v-for="item in routeList" :key="item.name">
      <button style="margin-right: 20px" @click="pageTo(item.path)">
        {{ item.meta?.alias }}
      </button>
    </template>
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TodoList from "@/view/TodoList/index.vue";
import { useRouter } from "vue-router";
import { staticRoutes } from "@/router/index";

export default defineComponent({
  name: "App",
  components: { TodoList },
  setup() {
    const router = useRouter();
    const routeList = staticRoutes;

    // 导航
    function pageTo(path: string) {
      router.push(path);
    }

    return { pageTo, routeList };
  },
});
</script>
