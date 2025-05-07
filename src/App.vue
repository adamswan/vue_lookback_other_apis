<template>
  <div class="father">
    <h3>我是父组件</h3>
    <img src="https://picsum.photos/200/300" alt="测试图片" />

    <br />
    -----------------------
    <h3>我是子组件</h3>

    <button @click="handleClick">显示模态框</button>

    <myModel :visible="visible" @closeModal="closeModal">
      <template v-slot:header>
        <div>我是模态框的头部</div>
      </template>
      <template v-slot:body>
        <div>我是模态框的内容</div>
      </template>
    </myModel>
  </div>
</template>

<script setup lang="ts">
import myModel from "./components/myModel.vue";
import { ref } from "vue";

function handleClick() {
  visible.value = true;
}

function closeModal() {
  visible.value = false;
}

const visible = ref(false);
</script>

<style scoped lang="less">
// ! 滤镜属性的加入，会导致遮罩层无法显示完整
.father {
  filter: saturate(140%);
}
</style>
