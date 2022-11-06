import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'
import Check from '../views/Check.vue'
import Error from '../views/Error.vue'
import Login from '../views/Login.vue'
import ForgetPass from '../views/ForgetPass.vue'
import SignUp from '../views/SignUp.vue'
import Offers from '../views/Offers.vue'
import Setting from '../views/Setting.vue'
import Regist from '../components/Regist.vue'
import profile from '../views/profile.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/Check',
        name: 'Check',
        component: Check
    },
    {
        path: '/Error',
        name: 'Error',
        component: Error
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/ForgetPass',
        name: 'ForgetPass',
        component: ForgetPass
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/Offers',
        name: 'Offers',
        component: Offers
    },
    {
        path: '/Setting',
        name: 'Setting',
        component: Setting
    },
    {
        path: '/Regist',
        name: 'Regist',
        component: Regist
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router