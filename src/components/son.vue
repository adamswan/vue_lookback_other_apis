<template>
  <h3>我是子组件</h3>
  <ul>
    <li v-for="item in list" :key="item.title">{{ item.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const list: any = ref([]);

// 顶层 await, 需要用 <Suspense> 包裹子组件
const { data } = await axios.get("https://uapis.cn/api/hotlist?type=weibo");

list.value = data.data;
</script>
