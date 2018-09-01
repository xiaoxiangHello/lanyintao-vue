import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import IndexPage from './views/Index.vue'
import Rank from './views/Rank.vue'
import ShowList from './views/ShowList.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Forget from './views/Forget.vue'

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
        },
        {
            path: '/rank',
            name: 'rank',
            component: Rank
        },
        {
            path: '/showList/name/:name/p/:page',
            name: 'showList',
            component: ShowList
        }
        ,
        {
            path: '/showList/type/:type/p/:page',
            name: 'showList',
            component: ShowList
        },
        {
            path: '/showList/local/:local/p/:page',
            name: 'showList',
            component: ShowList
        },
        {
            path:'/Login',
            name:'login',
            component:Login
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/forget',
            name:'forget',
            component:Forget
        }
    ]
})
