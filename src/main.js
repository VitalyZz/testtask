import { createApp } from 'vue'
import App from './App.vue'
import scroll from "@/directives/scroll";
import clickOutsidePanel from '@/directives/click-outside-panel';

const app = createApp(App);

app.directive('scroll', scroll)
app.directive('click-outside-panel', clickOutsidePanel)
app.mount('#app')
