import { createRouter, createWebHistory } from 'vue-router';
import mainPage from '@/App.vue';
import signIn from '@/pages/signInPage/index.vue';
import offer from '@/pages/offerPage/index.vue';
import orders from '@/pages/orders/index.vue';
var routes = [
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
];
var router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map