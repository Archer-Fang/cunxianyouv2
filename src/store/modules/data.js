import * as types from '../types'
import axios from 'axios'
import {setStore, getStore,removeStore} from '@/config/mUtils'

const urlBase = '/api/';
const state={
  Captcha:{},
  UserInfo:{},
  Login:false,
  PicShow:true,
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

}
const actions={
  [types.FETCH_CAPTCHA]({commit}) {
    axios.post(urlBase+'v1/captchas',{})
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
}
export default {
  state,
  getters,
  mutations,
  actions
}

