<template>
  <div class="container">
    <!-- flower 区域 -->
    <div class="section flower-section">
      <p>用 reactive 定义的 flower: {{ flower.f1 }}</p>

      <button @click="handleFlower">修改flower</button>
    </div>

    <!-- wife 区域 -->
    <div class="section wife-section">
      <p>用 shallowReactive 定义的 wife:</p>
      <p>姓名: {{ wife.name }}</p>
      <p>年龄: {{ wife.age }}</p>
      <div>
        整个人:
        <pre> {{ JSON.stringify(wife, null, 2) }}</pre>
      </div>

      <button @click="handleWifeName">名字改成刘亦菲</button>
      <button @click="handleWifeAge">年龄改成28</button>
      <button @click="handleWifeFood">food改成龙虾</button>
      <button @click="handleNewWife">替换新老婆</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, shallowReactive } from "vue";

const flower = reactive({
  f1: "小苍兰",
});

// 是响应式
function handleFlower() {
  flower.f1 = "向日葵";
}

// ----------------------------------

let wife = shallowReactive({
  name: "高圆圆",
  age: 18,
  like: {
    food: "宫保鸡丁",
    band: {
      name: "coldplay",
    },
  },
});

// 是响应式
function handleWifeName() {
  wife.name = "刘亦菲";
  console.log(wife);
}

// 是响应式
function handleWifeAge() {
  wife.age = 28;
  console.log(wife);
}

// 不是响应式
function handleWifeFood() {
  wife.like.food = "龙虾";
  console.log(wife);
}

// 是响应式
function handleNewWife() {
  Object.assign(wife, {
    name: "艾玛沃特森",
    age: 27,
    like: {
      food: "羊肉串",
      band: {
        name: "告五人",
      },
    },
  });
  console.log(wife);
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
