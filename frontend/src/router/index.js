import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Welcome from '@/views/Welcome.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    (!store.getters.auth)
      ? next({ name: 'login' })
      : next()
  }

  else if (to.matched.some(record => record.meta.requiresVisitor)) {
    (store.getters.auth)
      ? next({ name: 'home' })
      : next()
  }
  next()
})

export default router
