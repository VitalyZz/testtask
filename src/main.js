import { createApp } from 'vue'
import App from './App.vue'
import scroll from "@/directives/scroll";

const app = createApp(App);

app.directive('scroll', scroll)
app.mount('#app')
