<template>
  <div class="container">
    <!-- flower 区域 -->
    <div class="section flower-section">
      <p>用 ref 定义的 flower: {{ flower.f1 }}</p>
      <button @click="handleFlower">修改flower</button>

      <br />
      <p>用 readonly 定义的 copyFlower: {{ copyFlower.f1 }}</p>
      <button @click="handleCopyFlower">修改copyFlower(修改第1层属性)</button>
      <button @click="handleCopyFlower_deep">
        修改copyFlower(修改深层属性)
      </button>
    </div>

    <!-- wife 区域 -->
    <div class="section wife-section">
      <p>用 ref 定义的 wife:</p>
      <p>姓名: {{ wife.name }}</p>

      <div>
        整个人:
        <pre> {{ JSON.stringify(wife, null, 2) }}</pre>
      </div>

      <button @click="handleWifeName">名字改成刘亦菲</button>

      <br />

      <p>用 shallowReadonly 定义的 copyWife:</p>
      <p>姓名: {{ copyWife.name }}</p>

      <div>
        整个人:
        <pre> {{ JSON.stringify(copyWife, null, 2) }}</pre>
      </div>

      <button @click="handleWifeName_deep">名字改成刘亦菲</button>
      <button @click="handleWifeFood_deep">food改成龙虾</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, readonly, shallowReadonly } from "vue";

const flower = ref({
  f1: "小苍兰",
  f2: {
    name: "月季",
  },
});

const copyFlower = readonly(flower);

// 能修改
function handleFlower() {
  flower.value.f1 = "向日葵";
}

// 不能修改
function handleCopyFlower() {
  copyFlower.value.f1 = "小苍兰";
}

// 不能修改
function handleCopyFlower_deep() {
  copyFlower.value.f2.name = "百合";
}

// ----------------------------------

const wife = reactive({
  name: "高圆圆",
  like: {
    food: "宫保鸡丁",
  },
});

// 能修改
function handleWifeName() {
  wife.name = "刘亦菲";
  console.log(wife);
}

const copyWife = shallowReadonly(wife);

// 不能修改
function handleWifeName_deep() {
  copyWife.name = "刘亦菲";
  console.log(copyWife);
}

// 能修改
function handleWifeFood_deep() {
  copyWife.like.food = "龙虾";
  console.log(copyWife);
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.section {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.flower-section {
  background-color: #e6f7ff; /* 浅蓝色背景 */
}

.wife-section {
  background-color: #fff3e0; /* 浅橙色背景 */
}

button {
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #1890ff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #40a9ff;
  }
}
</style>
