import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from '@/api/auth0'

import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Callback from "../components/Callback"
import NotFound from '../pages/NotFound'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home, meta: {isPublic: true}},
  {path: '/callback', component: Callback, meta: {isPublic: true}},
  {path: '/profile', component: Profile},
  {path: '*', component: NotFound}
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isPublic)) {
    next();
  } else if (AuthService.loggedIn) {
    next();
  } else {
    AuthService.login(to.fullPath);
  }
});

export default router
