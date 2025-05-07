import type { Directive } from "vue";

const vBeauty: Directive = {
  mounted(el, binding) {
    // 颜色
    const color = binding.value;
    // 通过 DOM 添加样式
    el.style.color = color; // 使用传入的颜色值
  },
};

export default vBeauty;
