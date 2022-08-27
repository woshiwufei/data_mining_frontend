import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/font_2232321_pnazpvqupq/iconfont.css";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 history 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);

const width = document.body.clientWidth;
app.config.globalPropertiescollapse = width < 480 ? true : false;

app.use(ElementPlus);
app.use(router);

app.mount("#app");
