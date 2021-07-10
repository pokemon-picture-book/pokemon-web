import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'pokemon-font/css/pokemon-font.css';

createApp(App).use(router).mount('#app');
