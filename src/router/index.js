import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login'
import test from '@/pages/test/test'
import store from '@/store/store'


Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: test,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    /*{
      path: '/test',
      name: 'test',
      component: test,
    },*/

  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.data.Login) {
      next();
      console.log("store.state.data.Login:"+store.state.data.Login)
    }
    else {
      console.log("store.state.data.Login:"+store.state.data.Login)

      next({
        path: '/login',
/*
        query: {redirect: to.fullPath}
*/
      })
    }
  }
  else {
    next();
  }
})
export default router;
