import { createApp } from 'vue';
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';
import 'balm-ui/dist/balm-ui.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(BalmUI); // Mandatory
app.use(BalmUIPlus); // Optional

app.mount('#app');
