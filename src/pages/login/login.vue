<template>
  <div>

    <section id="wrap">
      <section id="content">
        <section id="left">
          <section id="pic1"><!--<img src="./static/images/logo.png">--></section>
          <section id="welcome">欢迎来到村先游</section>

          <section id="test" >
            <!--<div v-show="DONE_NEWS_LATEST.top_stories">

            </div>-->
           <!-- <button type="button" class="btn btn-light btn-lg">
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
            </button>-->
          </section>
          <section id="meili">美丽乡村,第一步</section>
          <section id="account"><input type="text" name="account" id="telephone"placeholder="手机号" v-model="phoneNumber"></section>
          <section id="password">
            <input v-if="!showPassword" type="password" name="password" id="mima" placeholder="密码"  v-model="password">
            <input v-else type="text" placeholder="密码"  v-model="password">
            <button  v-if="!showPassword" @click="changePasswordType" class="passwordControl">显示<br/>密码</button>
            <button  v-else @click="changePasswordType" class="passwordControl">隐藏<br/>密码</button>


          </section>
          <section id="captchaCode">
            <input type="text" placeholder="验证码" maxlength="4" v-model="captcha">
            <section class="img_change_img">
              <img v-show="DONE_CAPTCHA.status" :src="DONE_CAPTCHA.code" @click="getCaptchaCode">
            </section>
          </section>
          <section id="btn" ><input type="submit" name="btn"  id="login" @click="login" value="登录"  v-bind:class="[rightPhoneNumber?right_phone_number:wrong_phone_number]"></section>
          <section id="register"><a href="register">注册</a></section>
          <section id="p">登录<h4 style="color:#737373">账号</h4>，一切的<h4 style="color:#737373">美好</h4>不用远离</section>
        </section>
<!--
        <button type="button" class="btn btn-primary">（首选项）Primary</button>
-->

        <section id="right"><img src="/static/images/809.jpg"></section>

        <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>

      </section>
    </section>
    <!--<v-footer >
    </v-footer>-->
  </div>

</template>

<script>
  import header from "@/components/header/header"
  import getData from '@/service/getData'
  import alertTip from '@/components/common/alertTip'
  import axios from 'axios'

  import footer from "@/components/footer/footer"


  /*
    引入bootstap
  */
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'

  import {
    mapGetters,mapActions,mapMutations
  } from 'vuex'
  export default {
    data(){

      return{
        customizeClass: 'bodyAttr',
        loginJudge:false,
        phoneNumber:null,
        right_phone_number: 'right_phone_number',
        wrong_phone_number: 'wrong_phone_number',
        showPassword:false,
        password:null,
        captchaCodeImg:null,
        captcha:null,
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
        account:null,
        userInfo: null, //获取到的用户信息



      }
    },

    components:{
      "v-header":header,
      "v-footer":footer,
      "alert-tip":alertTip,
    },
    computed: {
      //判断手机号码
      rightPhoneNumber: function (){
        return /^1\d{10}$/gi.test(this.phoneNumber)
      },
      ...mapGetters([
        'DONE_CAPTCHA'
      ])



    },
    beforeCreate: function() {
      document.getElementsByTagName("body")[0].className = "bodyAttr"
    },
    created:function(){
      this.$store.dispatch('FETCH_CAPTCHA')
    },
    methods:{
      ...mapMutations([
        'TOGGLE_USERINFO'
      ]),
      //是否显示密码
      changePasswordType(){
        this.showPassword = !this.showPassword;
        console.log("passwordControl");
      },
      getCaptchaCode(){
         this.$store.dispatch('FETCH_CAPTCHA')
      },
      async login(state) {
        if (!this.phoneNumber) {
          this.showAlert = true;
          this.alertText = '请输入手机号';
          return
        }else if(!this.password){
          this.showAlert = true;
          this.alertText = '请输入密码';
          return
        }else if(!this.captcha){
          this.showAlert = true;
          this.alertText = '请输入验证码';
          return
        }
        this.userInfo=await axios.post('/api2/v2/login',{
                                    username:this.phoneNumber,
                                    password:this.password,
                                    captcha_code: this.captcha
                                  })
                                  .then(res => {
                                    return res.data
                                  }).catch(err => console.log(err))
        /*
                console.log("this.$store.getters.DONE_USERINFO.user_id:"+this.$store.getters.DONE_USERINFO.user_id);
        */
        console.log("this.userInfo.user_id:"+this.userInfo.user_id)
        if (!this.userInfo.user_id) {
          this.showAlert = true;
          this.alertText = this.userInfo.message;
          this.$store.dispatch('FETCH_CAPTCHA')
          console.log("userInfo:"+this.userInfo);
        }else{
          this.TOGGLE_USERINFO(this.userInfo);
          console.log("Login state:"+this.$store.state.data.Login);
          this.$router.push('/');

        }

      },
      closeTip(){
        this.showAlert = false;
      }
    },

    beforeDestroy: function() {
      document.body.removeAttribute("class","bodyAttr");
    }
  }
</script>
<style  scoped>


  #wrap{height:775px;width:1000px;margin:0 auto;}

  #content{
    width: 800px;height: 535px;background-color: grey;
    margin: 120px auto 120px auto;border-radius: 15px;
  }
  #left{
    width: 400px;height: 535px;background-color: white;border-top-left-radius: 15px;float: left;border-bottom-left-radius: 15px;
  }
  #pic1{
    width: 200px;height: 50px;
   /* margin-top: 55px;*/
    margin-left: 160px;
  }
  #welcome{
    width: 400px;height: 40px;
    font-size: 25px;text-align: center;font-family: "Microsoft Yahei";color: #878787;
  }
  #meili{
    width: 400px;height: 30px;
    font-size: 12px;text-align: center;font-family: "Microsoft Yahei";color: #bebebe;margin-top: 0px;
  }
  #account{
    width: 300px;height: 40px;
    margin-top: 20px;margin-left: 50px;
  }
  #account input{
    display: block;
    width: 300px;height: 40px;background-color: #f2f2f2;border-radius: 5px;
    border: 0;
    text-align:center;
  }
  #password{
    width: 300px;height: 40px;
    margin-top: 30px;margin-left: 50px;
  }
  #password input{
    display: block;
    width: 240px;height: 40px;background-color: #f2f2f2;border-radius: 5px;
    border: 0;
    text-align:center;
    float: left;
  }
  #password .passwordControl{
    display: block;
    width: 50px;
    background-color: #f2f2f2;
    border-color: black;
    border-radius: 5px;
    border: 1px solid transparent;
    margin-left:10px;
    text-align:center;
    font-size: 0.1rem;
    float: left;
    cursor: pointer;
  }
  #captchaCode{
    width: 300px;height: 40px;
    margin-top: 20px;margin-left: 50px;
  }
  #captchaCode input{
    display: block;
    width: 200px;height: 40px;background-color: #f2f2f2;border-radius: 5px;
    border: 0;
    text-align:center;
    float: left;
  }
  #captchaCode .img_change_img{
    display: block;
    width: 80px;height: 40px;background-color: #f9f9f9;
    border: 0;
    text-align:center;
    float: left;
    margin-left:20px;
    cursor: pointer;

  }
  #btn{
    width: 300px;height: 40px;
    margin-top: 30px;margin-left: 50px;
  }
  .wrong_phone_number{
    background-color:#f2f2f2;
    display: block;
    width: 300px;height: 40px;border-radius: 5px;
    color:#adadad;
    border: 0;
  }
  .right_phone_number{
    background-color:#ffa735;
    display: block;
    width: 300px;height: 40px;border-radius: 5px;
    color:white;
    border: 0;
  }
  #register{
    width: 140px;height: 40px;background-color:#ffa735;
    border-radius: 20px;margin: 0 auto;text-align: center;font-size: 12px;
    margin-top: 32px;line-height: 40px;
  }
  #register a{color:white;text-decoration:none;}
  #p{
    width: 400px;height: 20px;margin-top: 30px;font-size: 12px;line-height: 20px;text-align: center;
    color: #ccc;
  }


  #right{
    width: 400px;height: 535px;background-color: #cff;border-top-right-radius: 15px;float: left;
    border-bottom-right-radius: 15px;
  }
  #right img{
    width: 400px;height: 535px;border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  h4{
    color: black;display: inline;
  }
  input:-webkit-autofill { box-shadow: 0 0 0px 1000px #f2f2f2 inset !important;}

</style>
