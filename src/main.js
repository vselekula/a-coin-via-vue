import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.scss';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import VueTextareaAutosize from 'vue-textarea-autosize'
Vue.use(VueTextareaAutosize)
Vue.use(Vuesax)
new Vue({
  el: '#app',
  render: h => h(App)
})
