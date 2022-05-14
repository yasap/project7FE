import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signup from "../views/signup.vue";
import signin from "../views/signin.vue";
import post from "../views/post.vue";
import account from "../views/account.vue";
import allPosts from "../views/allPosts.vue"
import singlePost from "../views/singlePost.vue"
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
    path: '/AllPost',
    name: 'allPosts',
    component: allPosts
  },
  {
    path: '/post/:id',
    name: 'singlePost',
    component: singlePost
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
