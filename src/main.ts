import { createApp } from 'vue'

import App from './App.vue'

import ElementPlus from 'element-plus';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
import 'reset-css';

// router
import router from '@/routers'

const app = createApp(App);


// 모든 아이콘 전역 등록
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}


app.use(router)
app.use(ElementPlus)
app.mount('#app');