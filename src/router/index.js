import { createRouter, createWebHistory } from 'vue-router';
import mainPage from '@/App.vue'
import signIn from '@/pages/signInPage/index.vue';
import offer from '@/pages/offerPage';
import orders from '@/pages/orders';

const routes = [
    {
        path: '/shop',
        name: 'mainPage',
        component: mainPage,
    },
    {
        path: '/sign',
        name: 'sign',
        component: signIn
    },
    {
        path: '/offer',
        name: 'offer',
        component: offer
    },
    {
        path: '/secure',
        name: 'homePage',
        component: mainPage,

    },
    {
        path: '/orders',
        name: 'ordersPage',
        component: orders
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router