import './style/common.scss';
import './style/el-style.scss';
import './style/el-variables.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router);

app.use(ElementPlus);
app.mount('#app');
