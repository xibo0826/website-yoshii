import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import ScrapView from '../views/ScrapView.vue'
import ScrapDetailView from '../views/ScrapDetailView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/company',
        name: 'company',
        component: CompanyView
    },
    {
        path: '/scrap',
        name: 'scrap-list',
        component: ScrapView
    },
    {
        path: '/scrap/:categoryId',
        name: 'scrap-detail',
        component: ScrapDetailView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router 