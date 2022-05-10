import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signup from "../views/signup.vue";
import signin from "../views/signin.vue";
import post from "../views/post.vue";
import account from "../views/account.vue";
import allPosts from "../views/allPosts.vue"
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
  {
    path: '/allPosts',
    name: 'allPosts',
    component: allPosts
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
