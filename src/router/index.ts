import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/09-layout/web-layout/Index.vue'),
        redirect: () => ({
            name: 'Home'
        }),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../components/05-pages/home/Index.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
    routes
});

export default router;
