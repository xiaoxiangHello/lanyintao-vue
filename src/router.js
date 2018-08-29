import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import IndexPage from './views/Index.vue'
import Rank from './views/Rank.vue'
import ShowList from './views/ShowList.vue'

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
            path: '/showList/:name/:name/p/:page',
            name: 'showList',
            component: ShowList
        }
        // ,
        // {
        //     path: '/showList/type/:type/p/:page',
        //     name: 'showList',
        //     component: ShowList
        // },
        // {
        //     path: '/showList/local/:local/p/:page',
        //     name: 'showList',
        //     component: ShowList
        // }
    ]
})