import * as types from '../types'
import axios from 'axios'
var moment = require('moment');

import {setStore, getStore,removeStore} from '@/config/mUtils'

const urlBase = '/api/';
const urlBase2 = '/api2/';

const state={
  Captcha:{},
  UserInfo:{},
  Login:false,
  PicShow:true,
  NewsLatest: {},
  LoadingTwo:true,
  LoadingOne:false,
  NewsListRoot:[],
  time: moment(),


}
const getters={
  [types.DONE_CAPTCHA]: state => {
    return state.Captcha
  },
  [types.DONE_USERINFO](state, all) {
    return state.UserInfo
  },
  [types.DONE_PICSHOW](state, all) {
    return state.PicShow
  },
  [types.DONE_NEWS_LATEST]: state => {
    return state.NewsLatest
  },
  [types.DONE_LOADING_TWO](state){
    return state.DONE_LOADING_TWO
  },
  [types.DONE_LOADING_ONE]: state => {
    return state.LoadingOne
  },
  [types.DONE_NEWS_LIST_ROOT]: state => {
    return state.NewsListRoot
  },


}
const mutations={
  [types.TOGGLE_CAPTCHA](state, all) {
    state.Captcha=all;
  },
  [types.TOGGLE_USERINFO](state, info) {
    state.UserInfo = info;
    state.Login = !state.Login;
    if(state.Login){
      setStore('user_id',info.user_id);
      console.log("login success and TOGGLE_USERINFO");
    }
    else{
      removeStore('user_id');
      console.log("loginOut success and TOGGLE_USERINFO");

    }


/*
    setStore('user_id', info.user_id);
*/
  },
  [types.TOGGLE_NEWS_LATEST](state, all) {
    state.NewsListRoot.push(all)
    state.NewsLatest = all
    // state.LoadingTwo = false
  },
  [types.TOGGLE_NEWS_LATEST_MORE](state, all) {
  state.NewsListRoot.push(all)
  state.time.subtract(1, "days")
  state.LoadingOne = false
  },
  showLoding(state) {
    state.LoadingTwo = true;
  },
  hideLoading(state) {
    state.LoadingTwo = false;
  }
}
const actions={

  [types.FETCH_CAPTCHA]({commit}) {
    axios.post(urlBase2+'v1/captchas',{})
      .then(res => {
        commit(types.TOGGLE_CAPTCHA, res.data);
      }).catch(err => console.log(err))
  },
/*
  [types.FETCH_USERINFO]({commit},{username,password,captcha_code}) {
/!*  username,password,captcha_code
    console.log("username,password,captcha_code:"+username+","+password+","+captcha_code)
*!/
/!*
    console.log("password:"+password);
*!/
    axios.post(urlBase+'/v2/login',{username,password,captcha_code})
      .then(res => {
        console.log("FETCH_USERINFO-res:"+res.data);
        commit(types.TOGGLE_USERINFO, res.data);
      })
      .catch(err => console.log(err))
  },
*/
  [types.FECTH_NEWS_LATEST]({commit}) {
    state.LoadingTwo = true//https://news-at.zhihu.com/api/4/news/latest
    commit('showLoding');// urlBase2+v1/cities?type=hot
    axios.get(urlBase+'news/latest')
      .then(res => {
        commit(types.TOGGLE_NEWS_LATEST, res.data);
        commit('hideLoading');
        console.log("fetch new latest success");
      }).catch(err => console.log(err))
   /* instance.get('news/latest')
      .then(res => {
        commit(types.TOGGLE_NEWS_LATEST, res.data);
        commit('hideLoading');
        console.log("fetch new latest success");
        console.log("instance headers:"+instance.headers);
        console.log("instance baseUrl:"+instance.baseURL);

      }).catch(err => console.log(err))*/
  },
  [types.FECTH_NEWS_LATEST_MORE]({commit}) {
    state.LoadingOne = true
    var now = state.time.format("YYYYMMDD")
    console.log(now)
    axios.get(urlBase + 'news/before/' + now)
      .then(res => {
        commit(types.TOGGLE_NEWS_LATEST_MORE, res.data)
        console.log("fetch new latest more success");
        state.LoadingOne=false;
      }).catch(err => console.log(err))
  },
}
export default {
  state,
  getters,
  mutations,
  actions
}

