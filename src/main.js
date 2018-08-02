import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
require('dotenv').config();
import wysiwyg from "vue-wysiwyg";
import "../node_modules/vue-wysiwyg/dist/vueWysiwyg.css";
Vue.use(wysiwyg, {});


Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')