import {createRouter, createWebHistory} from 'vue-router'
// import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Search from '../views/Search.vue'

const history = createWebHistory();
const routes = [
    // {
    //     path: '/:catchNotMatchPath(.*)',
    //     name: 'NotFound',
    //     component: NotFound
    // },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/aboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = createRouter({history,routes})
export default router