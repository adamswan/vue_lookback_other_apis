<template>
  <div class="skeleton-container">
    <div class="skeleton-header"></div>
    <div class="skeleton-line"></div>
    <div class="skeleton-line short"></div>
    <div class="skeleton-line"></div>
    <div class="skeleton-line medium"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skeleton-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;
  margin: 20px auto;
}

/* 模拟标题 */
.skeleton-header {
  width: 60%;
  height: 24px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  animation: skeleton-shimmer 1.5s infinite ease-in-out;
  border-radius: 4px;
  margin-bottom: 16px;
}

/* 模拟文本行 */
.skeleton-line {
  width: 100%;
  height: 16px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  animation: skeleton-shimmer 1.5s infinite ease-in-out;
  border-radius: 4px;
  margin-bottom: 12px;
}

.skeleton-line.short {
  width: 40%;
}

.skeleton-line.medium {
  width: 70%;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: -40% 0;
  }
  100% {
    background-position: 40% 0;
  }
}
</style>
