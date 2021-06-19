import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;