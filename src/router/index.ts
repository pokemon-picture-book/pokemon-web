import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/09-layout/web-layout/Index.vue'),
        redirect: () => ({
            name: 'Pokemons'
        }),
        children: [
            {
                path: '/pokemons',
                name: 'Pokemons',
                component: () => import('../components/05-pages/pokemons/Index.vue')
            },
            {
                path: '/pokemons/:id',
                name: 'PokemonDetail',
                component: () => import('../components/05-pages/pokemons/_id/Index.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
    routes,
    scrollBehavior: (_, __, savedPosition) => (savedPosition ? savedPosition : { left: 0, top: 0 })
});

export default router;
