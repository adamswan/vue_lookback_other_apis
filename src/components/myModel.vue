<template>
  <Teleport to="body">
    <div v-show="props.visible" class="modal-overlay">
      <div class="modal-content">
        <!-- 头部插槽 -->
        <div class="modal-header">
          <slot name="header" />
        </div>

        <!-- 内容插槽 -->
        <div class="modal-body">
          <slot name="body" />
        </div>
        <button class="close-button" @click="handleClose">关闭</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, Teleport } from "vue";

// 接收 visible 控制显示
const props = defineProps(["visible"]);

// 关闭模态框
const emit = defineEmits(["closeModal"]);
function handleClose() {
  emit("closeModal");
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明遮罩 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  width: 40%;
  height: 200px;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
}

.modal-body {
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.close-button {
  transform: translate(500px, 41px);
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #0056b3;
}
</style>
