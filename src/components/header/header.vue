<template>
  <header class="wrap">
    <section class="header">
      <section class="box2">
        <img src="/static/images/logo.png">

      </section>

      <section class="box3" onmouseover="this.className='box33'" onmouseout="this.className='box3'">
        <router-link to="/index" class="a2">首页</router-link><br/>
        <router-link to="/video" class="a2">视频</router-link><br/>
      <!--  <router-link to="/goodsRank" class="a2">goodsRank</router-link><br/>
        <router-link to="/shopRank" class="a2">shopRank</router-link><br/>
        <router-link to="/growthRank" class="a2">growthRank</router-link><br/>
-->
        <!--
                <router-link  :to="{name:'test'}" class="a2" >视频</router-link>&lt;!&ndash;:to="{name:'login'}"&ndash;&gt;
        -->
      </section>
      <section class="box3">
<!--
        <router-link  :to="{name:'test'}" class="a2" >人文</router-link>&lt;!&ndash;:to="{name:'login'}"&ndash;&gt;
-->
        <router-link to="/renwen" class="a2">人文</router-link><br/>

      </section>
    <!--  <section class="box3" onmouseover="this.className='box33'" onmouseout="this.className='box3'">
       &lt;!&ndash; <a href="/front/fengguang" class="a1">风光</a><br>
        <a href="/front/spring" class="a1">春</a><br>
        <a href="/front/summer" class="a1">夏</a><br>
        <a href="/front/autumn" class="a1">秋</a><br>
        <a href="/front/winter" class="a1">冬</a><br>&ndash;&gt;
        <router-link to="/fengguang" class="a2">风光</router-link><br/>


      </section>-->
      <section class="box3" onmouseover="this.className='box33'" onmouseout="this.className='box3'">
        <!--<a href="/front/techang" class="a1">特产</a><br>
        <a href="/front/goods" class="a1">特产陈列</a><br>-->
        <router-link to="/techang" class="a2">特产</router-link><br/>
        <router-link to="/techang/techangchenlie" class="a2">特产陈列</router-link><br/>


      </section>
      <section class="box3" onmouseover="this.className='box33'" onmouseout="this.className='box3'">
        <!--<a href="/front/lvyou" class="a1">旅游</a><br>
        <a href="/front/rentcar" class="a1">交通陈列</a><br>
        <a href="/front/hotelList" class="a1">住宿陈列</a>
-->
        <router-link to="/lvyou" class="a2">旅游</router-link><br/>
        <router-link to="/lvyou/jiaotongchenlie" class="a2">交通陈列</router-link><br/>
        <router-link to="/lvyou/zhusuchenlie" class="a2">住宿陈列</router-link><br/>


      </section>
      <section class="box3">
       <!-- <a href="/front/wenda"  class="a1">问答</a>-->
        <router-link to="/wenda" class="a2">问答</router-link><br/>

      </section>

      <section v-if="Login"><!---->
        <section class="box3" onmouseover="this.className='box33'" onmouseout="this.className='box3'" style="margin-left:40px;">
         <!-- <a href="/front/goodscollection" class="a1">个人中心</a><br>
          <a href="/front/houseorder" class="a1">预订订单</a><br><a href="/front/collection" class="a1">我的问题收藏</a><br>
          <a href="/front/housecollection" class="a1">我的商品收藏</a><br>-->
          <router-link to="/personCenter/order" class="a2">个人中心</router-link><br/>

          <router-link to="/personCenter/order" class="a2">预订订单</router-link><br/>

          <router-link to="/personCenter/collection" class="a2">我的商品收藏</router-link><br/>

        </section>
        <section class="box5" style="width:150px">
          <div  style="color:#6d952f">欢迎你！{{name}}</div>

        </section>
        <section class="box5" style="width:150px">
          <el-button type="button" size="mini" round>

            <span @click="loginOut">退出登录</span><!---->
          </el-button>

        </section>

      </section>
      <section v-else><!---->
        <section class="box5" style="width:150px">
            <router-link to="/login" class="a2">登录</router-link>

        </section>
      </section>
    </section>
  </header>

</template>

<script>

import {mapState, mapActions} from 'vuex'

  export default {
  data(){
    return{
      name:'fang'
    }
  },
  mounted(){


  },
  props: [''],
  computed: {

    ...mapState({//this.$store.state.data.Login
      Login: state => state.data.Login,
    })
  },
  methods: {
    closeTip(){
      this.$emit('closeTip')
    },
    loginOut(){
      console.log("click loginOut");
      this.$emit('loginOut')

    }

  },

}

</script>
<style lang="scss" scoped>
  /* CSS Document */
  /*
  body{
    margin:0;
    height: 100%;
  }

  input {
    font-family: "宋体";
    border:1px solid #ccc ;
    font-size:12px;
    width:168px;
    height:22px;
    display:block;
    border-radius:15px;
    text-align:center;
    color:#b6b6b6;
    background-color:#e7e7e7;
  }
  .a2{
    font-family:"宋体";
    font-size:12px;
    color:#666666;

    text-decoration:none;
  }
   a.a1:link{
    font-family:"宋体";
    font-size:12px;
    color:#666666;
    text-decoration:none;
  }

   a.a1:visited{
    font-family:"宋体";
    font-size:12px;
    color:#666666;
    text-decoration:none;
  }
   a.a1:hover{
    font-family:"宋体";
    font-size:12px;
    color:#6d952f;
    cursor:pointer;
    text-decoration:none;
  }
  !*#current*!
  .router-link-active
  {
    color: #6d952f;
    font-family:"宋体";
    font-size:12px;
  }
  .wrap{
    width:100%;
    height:60px;
    background-color:#f9f9f9;
    z-index:999;
    position:fixed;
    top:0px;
    opacity:0.95;
  }
  .header{

    height: 60px;
    width: 1000px;
    margin: 0 auto;
    clear: both;
    background-color:#f9f9f9;

  }
  .header .box2{
    width: 100px;
    height: 60px;
    float: left;

    font-size: 12px;
    line-height: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .header .box3{
    width: 80px;
    height: 60px;
    float: left;
    overflow-y:hidden;
    font-size: 12px;
    line-height: 60px;
    text-align: center;
    color:#666666;
  }
  .header .box33{
    width: 80px;
    height: auto;
    float: left;
    font-size: 12px;
    line-height: 60px;
    text-align: center;
    color:#666666;
    background-color:#FBFAFA;
  }
  .header .box4{
    width: 210px;
    height: 60px;
    float: left;

    font-size: 12px;
    line-height: 60px;
    text-align: center;
    color:#666666;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header .box5{

    width: 50px;
    height: 60px;
    float: left;
    overflow-y:hidden;
    font-size: 12px;
    line-height: 60px;
    text-align: center;
    color:#666666;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .header .box55{
    width: 100px;
    height: auto;
    float: left;

    font-size: 12px;
    line-height: 60px;
    text-align: center;
    color:#666666;
    display: inline-block;

    vertical-align: middle;
    background-color:#FBFAFA;

  }*/
  body {
    margin: 0;
    height: 100%;
  }
  input {
    font-family: "宋体";
    border: 1px solid #ccc;
    font-size: 12px;
    width: 168px;
    height: 22px;
    display: block;
    border-radius: 15px;
    text-align: center;
    color: #b6b6b6;
    background-color: #e7e7e7;
  }
  .a2 {
    font-family: "宋体";
    font-size: 12px;
    color: #666666;
    text-decoration: none;
  }
  a {
    &.a1 {
      &:link {
        font-family: "宋体";
        font-size: 12px;
        color: #666666;
        text-decoration: none;
      }
      &:visited {
        font-family: "宋体";
        font-size: 12px;
        color: #666666;
        text-decoration: none;
      }
      &:hover {
        font-family: "宋体";
        font-size: 12px;
        color: #6d952f;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
  /*#current*/
  .router-link-active {
    color: #6d952f;
    font-family: "宋体";
    font-size: 12px;
  }
  .wrap {
    width: 100%;
    height: 60px;
    background-color: #f9f9f9;
    z-index: 999;
    position: fixed;
    top: 0px;
    opacity: 0.95;
  }
  .header {
    height: 60px;
    width: 1000px;
    margin: 0 auto;
    clear: both;
    background-color: #f9f9f9;
    .box2 {
      width: 100px;
      height: 60px;
      float: left;
      font-size: 12px;
      line-height: 60px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box3 {
      width: 80px;
      height: 60px;
      float: left;
      overflow-y: hidden;
      font-size: 12px;
      line-height: 60px;
      text-align: center;
      color: #666666;
    }
    .box33 {
      width: 80px;
      height: auto;
      float: left;
      font-size: 12px;
      line-height: 60px;
      text-align: center;
      color: #666666;
      background-color: #fbfafa;
    }
    .box4 {
      width: 210px;
      height: 60px;
      float: left;
      font-size: 12px;
      line-height: 60px;
      text-align: center;
      color: #666666;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box5 {
      width: 50px;
      height: 60px;
      float: left;
      overflow-y: hidden;
      font-size: 12px;
      line-height: 60px;
      text-align: center;
      color: #666666;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box55 {
      width: 100px;
      height: auto;
      float: left;
      font-size: 12px;
      line-height: 60px;
      text-align: center;
      color: #666666;
      display: inline-block;
      vertical-align: middle;
      background-color: #fbfafa;
    }
  }

</style>
