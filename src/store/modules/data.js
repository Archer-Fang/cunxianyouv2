import * as types from '../types'
import axios from 'axios'
const urlBase = '/api/';
const state={
  Captcha:{},
  NewsLatest: {}
}
const getters={
  [types.DONE_CAPTCHA]: state => {
    return state.Captcha
  },
  [types.DONE_NEWS_LATEST]: state => {
    return state.NewsLatest
  },

}
const mutations={
  [types.TOGGLE_CAPTCHA](state, all) {
    console.log("all:"+all);
    state.Captcha=all;
  },
  [types.TOGGLE_NEWS_LATEST](state, all) {
    console.log("all:"+all);
    state.NewsLatest = all
    // state.LoadingTwo = false
  },
}
const actions={
  [types.FETCH_CAPTCHA]({commit}) {

/*
    axios.post(urlBase+'v1/captchas',{})
*/
/*
    axios.post('http://cangdu.org:8001/v1/captchas',{})
*/
    axios.post(urlBase+'v1/captchas',{})
      .then(res => {
        console.log("res:"+res.data.status);
        commit(types.TOGGLE_CAPTCHA, res.data);
      }).catch(err => console.log(err))
  },
  [types.FECTH_NEWS_LATEST]({commit}) {
    axios.get(urlBase + 'news/latest')
      .then(res => {
        console.log("res:"+res.data.date);
        commit(types.TOGGLE_NEWS_LATEST, res.data);
      }).catch(err => console.log(err))
  },
}
export default {
  state,
  getters,
  mutations,
  actions
}

