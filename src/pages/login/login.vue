<template>
  <header :loginJudge=loginJudge></header>
</template>

<script>
  import header from "@/components/header/header"
  export default {
    data(){
      return{
        loginJudge:false,
        phoneNumber:"",
      }
    },
    create(){

    },
    components:{
      header,
    },
    computed: {
      //判断手机号码
      rightPhoneNumber: function (){
        return /^1\d{10}$/gi.test(this.phoneNumber)
      }
    },
  }
</script>
