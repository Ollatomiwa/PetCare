import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Donate from '../components/Donate.vue';
import Resources from '../components/Resources.vue';
import Volunteer from '../components/Volunteer.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home 
        },

        {
            path: '/about',
            name: 'about',
            component: About
            
        },

        {
            path: '/donate',
            name: 'donate',
            component: Donate
        },

        {
            path: '/resources',
            name: 'resources',
            component: Resources
        },

        {
            path: '/volunteer',
            name: 'volunteer',
            component: Volunteer
        },


    ]
})

export default router;