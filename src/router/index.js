import {createRouter, createWebHistory} from 'vue-router'
// import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Login from '../views/Login.vue'

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
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({history,routes})
export default router