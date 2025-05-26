<template>
  <div>
    <!-- 普通v-model：实时同步 -->
    <input v-model="msg" placeholder="实时同步" />
    <p>实时同步: {{ msg }}</p>

    <!-- v-model.lazy：失去焦点或按回车键后同步 -->
    <input v-model.lazy="lazyMsg" placeholder="懒同步" />
    <p>懒同步: {{ lazyMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("");
const lazyMsg = ref("");
</script>
