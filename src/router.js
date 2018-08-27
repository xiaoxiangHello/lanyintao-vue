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
            path: '/showList/name/:name/page/:page',
            name: 'showList',
            component: ShowList
        },
        {
            path: '/showList/type/:type/page/:page',
            name: 'showList',
            component: ShowList
        }
    ]
})
