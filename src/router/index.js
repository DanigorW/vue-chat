import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome'
import Chat from '../components/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if(to.params.name){
        next()
      } else {
        next({name: 'welcome'})
      }
    }
  },


]

const router = new VueRouter({
  routes
})

export default router
