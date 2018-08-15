import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import IndexPage from './views/Index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'IndexPage',
            component: IndexPage
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})