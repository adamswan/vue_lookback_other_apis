<template>
  <div class="container">
    <!-- count 区域 -->
    <div class="section count-section">
      <p>用 ref 定义的 count: {{ count }}</p>
      <button @click="handleCount">修改count</button>
    </div>

    <!-- wife 区域 -->
    <div class="section wife-section">
      <p>用 shallowRef 定义的 wife:</p>
      <p>姓名: {{ wife.name }}</p>
      <p>年龄: {{ wife.age }}</p>
      <p>整个人: {{ wife }}</p>
      <button @click="handleWifeName">名字改成刘亦菲</button>
      <button @click="handleWifeAge">年龄改成28</button>
      <button @click="handleNewWife">替换新老婆</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";

const count = ref(0);

// 不是响应式
function handleCount() {
  count.value++;
}

// ----------------------------------

const wife = shallowRef({
  name: "高圆圆",
  age: 18,
});

// 不是响应式
function handleWifeName() {
  wife.value.name = "刘亦菲";
  console.log(wife.value);
}

// 不是响应式
function handleWifeAge() {
  wife.value.age = 28;
  console.log(wife.value);
}

// 是响应式
function handleNewWife() {
  wife.value = {
    name: "周子言",
    age: 27,
  };
  console.log(wife.value);
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

.count-section {
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
