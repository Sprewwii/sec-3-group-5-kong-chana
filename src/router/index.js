import {createRouter, createWebHistory} from 'vue-router'
// import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import AddScammer from '../views/AddScammer.vue'

const history = createWebHistory();
const routes = [
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
        path: '/AddScammer',
        name: 'AddScammer',
        component: AddScammer
    }
]

const router = createRouter({history,routes})
export default router