import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import ScrapView from '../views/ScrapView.vue'
import ScrapDetailView from '../views/ScrapDetailView.vue'
import UsedItemView from '../views/UsedItemView.vue'
import UsedItemDetailView from '../views/UsedItemDetailView.vue'
import NewsView from '../views/NewsView.vue'
import TidyingView from '../views/TidyingView.vue'
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
    },
    {
        path: '/used',
        name: 'used-items-list',
        component: UsedItemView
    },
    {
        path: '/used/:categoryId',
        name: 'used-item-detail',
        component: UsedItemDetailView
    },
    {
        path: '/visit',
        name: 'visit-purchase',
        component: () => import('../views/VisitPurchaseView.vue')
    },
    {
        path: '/tidying',
        name: 'tidying',
        component: TidyingView
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router 