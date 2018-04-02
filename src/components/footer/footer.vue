<template>
  <div class="wrap">
    <section class="footer" v-bind:class="{renwenFooterColor:renwen}">
      Copyright © 2017 村先游 All Rights Reserved
    </section>
  </div>

</template>
<script>

  export default {
    data(){
      return{

      }
    },
    mounted(){


    },
    props: ['renwen'],
    computed: {


    },
    methods: {


    },

  }
</script>
<style scoped>
  .wrap{
    margin: 0 auto;
    width:980px;
  }
 .footer {
    margin-top: 49px;
    padding-top: 17px;
    width: 980px;
    height: 31px;
    border-top: thin solid #F3F4F8;
    text-align: center;
    font-size: 14px;
    color: #eaeaea;
     margin-bottom: 30px;
  }
  .renwenFooterColor{
    color: #949494;
    border-top: 1px solid #A5A5A5;
  }
</style>
