<!-- src/App-06-customRef自定义ref-抽离为自定义Hooks.vue -->
<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts">
import { useCustomMsg } from "./Hooks/useCustomMsg";

const { msg } = useCustomMsg("你好", 1500);
</script>
