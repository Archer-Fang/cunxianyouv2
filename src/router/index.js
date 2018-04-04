import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login'
import test from '@/pages/test/test'
import store from '@/store/store'
import index from '@/pages/index/index'
import renwen from '@/pages/renwen/renwen'
import techang from '@/pages/techang/techang'





Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      //身份验证
     /* meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },*/
      component: index,
    },
    {
      path: '/renwen',
      name: 'renwen',
      component: renwen,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/techang',
      name: 'techang',
      component: techang,
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
