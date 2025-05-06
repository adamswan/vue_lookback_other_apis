<template>
  <div class="container">
    <div class="section flower-section">
      <h4>响应式对象</h4>
      <p>名字: {{ wife.name }}</p>
      <p>年龄: {{ wife.age }}</p>
      <button @click="wife.age++">年龄+1</button>

      <br />

      <h4>原始对象</h4>
      <p>名字: {{ originWife.name }}</p>
      <p>年龄: {{ originWife.age }}</p>
      <button @click="originWife.age++">年龄+1</button>

      <br />
      <p>
        <button @click="handleGetToRaw">打印不被代理的对象</button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRaw, markRaw, reactive } from "vue";

const wife = reactive({
  name: "高圆圆",
  age: 18,
});

// 获取原始对象
const originWife = toRaw(wife);

function handleGetToRaw() {
  const girl = markRaw({
    name: "刘亦菲",
    age: 27,
  });

  const girl2 = reactive(girl);

  console.log(girl2);
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
