import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cards',
        name: 'Cards',
        component: () => import('@/views/Cards.vue'),
    },
    {
        path: '/forms',
        name: 'Forms',
        component: () => import('@/views/Forms.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;