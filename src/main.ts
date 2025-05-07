import { createApp } from "vue";
import App from "./App.vue";
import vBeauty from "./directives/v-beauty";

const app = createApp(App);

// 注册全局指令
app.directive("beauty", vBeauty);

app.mount("#app");
