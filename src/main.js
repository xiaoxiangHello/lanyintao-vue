import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(VueJsonp);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
