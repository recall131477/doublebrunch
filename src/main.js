import { createApp } from 'vue';
import { createPinia } from 'pinia';

// scss
import '@/assets/scss/tailwind.scss';
import '@/assets/scss/all.scss';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// vee-validate
import {
  defineRule, Form, Field, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, email, min, max,
} from '@vee-validate/rules';
import {
  localize, setLocale,
} from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 文字編輯器
import CKEditor from '@ckeditor/ckeditor5-vue';

import App from './App.vue';
import router from './router';

// 自定義函式方法
import { date, currency } from './methods/filters';

// rules
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true, // input 輸入字元立即進行驗證
});
// 語言i18n
setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$filters = {
  date,
  currency,
};
const pinia = createPinia();

app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.use(pinia);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
