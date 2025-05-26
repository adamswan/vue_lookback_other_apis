<template>
  <div>
    <!--1、 v-text -->
    <!-- 两者等价 -->
    <p v-text="msg"></p>
    <p>{{ msg }}</p>

    <!-- 2、 v-html -->
    <div v-html="myHtml"></div>

    <!-- 3、 v-pre -->
    <div v-pre>这是：{{ msg }}</div>

    <!-- 4、 v-once -->
    <div v-once>count：{{ count }}</div>

    <!-- 5、v-memo -->
    <!-- 添加按钮来触发 list 变化 -->
    <button @click="updateList">更新列表</button>

    <ul v-memo="[list]">
      <li v-for="item in list" :key="item.id">{{ item.name }} - 渲染次数: {{ memoRenderCount }}</li>
    </ul>

    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }} - 渲染次数: {{ normalRenderCount }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const msg = ref("高圆圆");

const myHtml = "<span style='color:red'>我是红色的</span>";

const count = ref(0);

const list = ref([
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
  { id: 4, name: "赵六" },
]);

// 记录带有 v-memo 的列表的渲染次数
const memoRenderCount = ref(0);
// 记录普通列表的渲染次数
const normalRenderCount = ref(0);

// 监听 list 变化，更新 memoRenderCount
watch(
  list,
  () => {
    memoRenderCount.value++;
  },
  { deep: true }
);

// 监听 list 变化，更新 normalRenderCount
watch(
  list,
  () => {
    normalRenderCount.value++;
  },
  { deep: true }
);

// 定义更新列表的方法
const updateList = () => {
  list.value.push({ id: list.value.length + 1, name: `新用户${list.value.length + 1}` });
};
</script>
