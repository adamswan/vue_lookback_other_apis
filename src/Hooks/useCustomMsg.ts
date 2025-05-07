import { customRef } from "vue";

export function useCustomMsg(originMsg: string, time: number) {
  let timer: number;

  const msg = customRef((track, trigger) => {
    return {
      // 访问 msg 时，自动触发 get 函数
      get() {
        track(); // 追踪依赖：告诉 vue 追踪数据的变化
        return originMsg;
      },

      // 修改 msg 时，自动触发 set 函数
      set(newVal) {
        clearTimeout(timer);

        timer = setTimeout(() => {
          originMsg = newVal;
          trigger(); // 触发依赖：告诉 vue 数据更新了
        }, time);
      },
    };
  });

  return { msg };
}
