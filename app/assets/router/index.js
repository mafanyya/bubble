import VueRouter from "vue-router";
import {createRouter, createWebHashHistory} from "vue-router";
import Hello from "./../components/Hello.vue"
import Registration from "./../components/Registration.vue"
import Login from "./../components/Login.vue"

const routes = [
    {
        path: '/',
        alias: '/hello',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/register',
        name: 'Registration',
        component: Registration

    },
    {
        path: '/login',
        name: 'Login',
        component: Login

    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router