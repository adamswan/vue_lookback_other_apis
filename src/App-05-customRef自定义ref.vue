<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts">
import { ref, customRef } from "vue";

// 数据一变，页面立刻更新
// const msg = ref("你好");

let originMsg = "你好";

let timer: number;

const msg = customRef((track, trigger) => {
  return {
    // 访问 msg 时，自动触发 get 函数
    get() {
      track(); // 追踪依赖：告诉 vue 追踪数据的变化
      return originMsg;
    },

    // 修改 msg 时，自动触发 set 函数
    set(newVal) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        originMsg = newVal;
        trigger(); // 触发依赖：告诉 vue 数据更新了
      }, 1000);
    },
  };
});
</script>
