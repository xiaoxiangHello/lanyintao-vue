import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'
import vueLazyImg from './js/lazy-img.js'
import moment from 'moment'
import './css/base.css'
import MetaInfo from 'vue-meta-info'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(VueJsonp);
Vue.use(vueLazyImg);
Vue.use(MetaInfo);
Vue.use(VueResource);


Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)

})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
