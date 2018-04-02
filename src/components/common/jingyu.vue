<template>
  <section id="jingyu">
    <section class="logo"><img src="/static/images/白圈.png" style="position:absolute;left:460px;top:4.5px;"> <img
      src="/static/images/logo 拷贝.png" style="position:absolute;left:445px;top:10px;"></section>
    <section class="title" > {{title}}</section>
    <section class="content" style="">
      {{content}}
    </section>
    <section class="sumup"> {{sumup}}</section>
  </section>

</template>
<script>

  export default {
    data(){
      return{

      }
    },
    mounted(){


    },
    props: ['title','content','sumup'],
    computed: {


    },
    methods: {


    },

  }
</script>
<style scoped>
  #jingyu {
    height: 210px;
    width: 980px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
    margin-top: 0px;
    padding-top: 15px;
    background-color: #e9e9e9;
  }

  #jingyu .logo {
    height: 50px;
    width: 960px;
    position: relative;
  }

  #jingyu .title {
    height: 50px;
    width: 960px;
    color: black;
    text-align: center;
    font-size: 14px;
    font-family: 楷体;
    line-height: 50px;
    font-weight: bold;
  }

  #jingyu .content {
    height: 50px;
    width: 960px;
    text-align: center;
    font-size: 14px;
    line-height: 23px;
    color: #9e9e9e;
    font-family: 楷体;
    background-color: #e9e9e9;padding-left:150px;padding-right:150px;word-wrap: break-word;
    word-break: normal;
  }

  #jingyu .sumup {
    height: 30px;
    width: 960px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    color: grey;
    font-family: 楷体;
  }

  #footer {
    height: 140px;
    width: 920px;
    margin: 0 auto;
  }

  #footer .wenzi {
    margin-top: 56px;
    border-top: 1px solid #A5A5A5;
    text-align: center;
    font-size: 14px;
    color: #949494;
    font-family: 宋体;
  }
</style>
