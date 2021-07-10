import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/09-layout/WebLayout.vue'),
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
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
