import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login'
import test from '@/pages/test/test'
import store from '@/store/store'
import index from '@/pages/index/index'
import renwen from '@/pages/renwen/renwen'
import techang from '@/pages/techang/techang'
import lvyou from '@/pages/lvyou/lvyou'
import wenda from '@/pages/wenda/wenda'
import video from '@/pages/index/children/video'
import techangchenlie from '@/pages/techang/children/techangchenlie'
import zhusuchenlie from '@/pages/lvyou/children/zhusuchenlie'
import jiaotongchenlie from '@/pages/lvyou/children/jiaotongchenlie'
import personCenter from '@/pages/personCenter/personCenter'
import order from '@/pages/personCenter/children/order'
import collection from '@/pages/personCenter/children/collection'
import goodsRank from '@/pages/index/children/goodsRank'
import growthRank from '@/pages/index/children/growthRank'
import shopRank from '@/pages/index/children/shopRank'







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
      /*meta: {
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
      component: techang,

    },
    {
      path: '/techang/techangchenlie',
      component: techangchenlie
    },
    {
      path: '/lvyou',
      name: 'lvyou',
      component: lvyou,
    },
    { path: '/lvyou/jiaotongchenlie',
      name: 'jiaotongchenlie',
      component: jiaotongchenlie,
    },
    { path: '/lvyou/zhusuchenlie',
      name: 'zhusuchenlie',
      component: zhusuchenlie,
    },
    {
      path: '/wenda',
      name: 'wenda',
      component: wenda,
    },
    {
      path: '/video',
      name: 'video',
      component: video,
    },

    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter,
    },
    {
      path: '/personCenter/order',
      name: 'order',
      component: order,
    },
    {
      path: '/personCenter/collection',
      name: 'collection',
      component: collection,
    },
    {
      path: '/goodsRank',
      name: 'goodsRank',
      component: goodsRank,
    },
    {
      path: '/growthRank',
      name: 'growthRank',
      component: growthRank,
    },
    {
      path: '/shopRank',
      name: 'shopRank',
      component: shopRank,
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
      alert("请先登录");
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
