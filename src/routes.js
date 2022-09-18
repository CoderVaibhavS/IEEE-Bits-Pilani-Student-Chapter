import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import Events from './components/Events.vue';
import Resources from './components/Resources.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Events',
        path: '/events',
        component: Events
    },
    {
        name: 'Resources',
        path: '/resources',
        component: Resources
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;