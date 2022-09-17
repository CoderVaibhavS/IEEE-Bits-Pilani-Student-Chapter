import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import About from './components/About.vue';
import Events from './components/Events.vue';
import Blog from './components/Blog.vue';
import Resources from './components/Resources.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'Events',
        path: '/events',
        component: Events
    },
    {
        name: 'Blog',
        path: '/blog',
        component: Blog
    },
    {
        name: 'Resources',
        path: '/resources',
        component: Resources
    },
    {
        name: 'Gallery',
        path: '/gallery',
        component: Gallery
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;