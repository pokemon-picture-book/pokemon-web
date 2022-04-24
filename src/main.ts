import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

// import style
import '@/assets/style/plugins';
import '@/assets/style/base.scss';

createApp(App).use(router).use(createPinia()).mount('#app');
