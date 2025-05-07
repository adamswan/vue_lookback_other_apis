<template>
  <h3>我是父组件</h3>
  <br />

  -----------------------

  <!-- 子组件 -->
  <Suspense>
    <!-- 具名插槽 fallback -->
    <template v-slot:fallback>
      <SkeletonScreen />
    </template>

    <!-- 默认插槽 -->
    <template v-slot:default>
      <asyncSon />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { Suspense, defineAsyncComponent } from "vue";
import SkeletonScreen from "./components/SkeletonScreen.vue";

// 定义异步组件
const asyncSon = defineAsyncComponent(() => import("./components/son.vue"));
</script>
