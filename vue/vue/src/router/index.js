import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signup from "../views/signup.vue";
import signin from "../views/signin.vue";
import post from "../views/post.vue";
import account from "../views/account.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
{
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/post',
    name: 'post',
    component: post
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
