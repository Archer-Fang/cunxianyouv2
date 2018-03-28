import * as types from '../types.js'
import axios from 'axios'
var moment = require('moment');
const urlBase = '/api/';
const state={
  Captcha:null,
  ThemesList: {}

}
const getters={
  [types.DONE_CAPTCHA]:state=>{
    return state.Captcha;
  },
  [types.DONE_THEMES_LIST]: state => {
    return state.ThemesList
  }

}
const mutations={
  [types.TOGGLE_CAPTCHA](state,all){
    state.Captcha=all;
  },
  [types.TOGGLE_THEMES_LIST](state, all) {
    state.ThemesList = all
    state.LoadingTwo = false
  },
}
const actions={
  [types.FETCH_CAPTCHA](commit){
    axios.post(urlBase + '/v1/captchas',{})
         .then(res=>{
           commit(types.TOGGLE_CAPTCHA,res.code)
         }).catch(err=>console.log("err:"+err))
  },
  [types.FETCH_THEMES_list]({commit}, id) {
    state.LoadingTwo = true
    axios.get(urlBase + 'theme/' + id)
      .then(res => {
        commit(types.TOGGLE_THEMES_LIST, res.data)
      }).catch(err => console.log(err))
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}

