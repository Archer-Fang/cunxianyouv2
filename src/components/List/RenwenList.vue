<template>
  <div id="wenhuawrapper">
    <div v-for="list in NewsList">
     <div class="wenhua" v-for="item in list.stories">

        <div class="pic">
          <img :src="getImage(item.images[0])">
<!--
          <img :src="item.images[0]">
-->

          <!--
                    {{item.images[0]}}
          -->
        </div>
        <div class="title ">
<!--
          <a href="renwengushi.html" class="a2">向文化要美丽</a>
-->
          {{item.title}}
        </div>
        <div class="time">
          <!--2017-4-29-->{{list.date|formatDate}}
        </div>
        <div class="content">
          <!--物华天宝，人杰地灵。<br>
          定海是一座海洋历史文化名城。-->
          {{item.title}}

        </div>

     </div>
    </div>

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
    props: ['NewsList'],
    computed: {


    },
    methods: {
      getImage(url){
        console.log("url:"+url);
        console.log("before test");
        // 把现在的图片连接传进来，返回一个不受限制的路径
        if(url !== undefined){
          let _u = url.substring( 7 );
          console.log("newURL:"+'https://images.weserv.nl/?url=' + _u);
          return 'https://images.weserv.nl/?url=' + _u;
        }
        /*
              console.log("test");
        */
      }

    },
    filters: {
      formatDate(value){
        var middleState = value.split("");
        middleState.splice(4,0,"年");
        middleState.splice(7,0,"月")
        middleState.splice(middleState.length,0,"日")
        var middleState2 = middleState.toString().replace(/,/g,'')
        return middleState2
      }
    },

  }
</script>
<style lang="scss" scoped>
  /* CSS Document */


 /* #wenhuawrapper {
    height: auto;
    width: 1000px;
    margin: 0 auto;
    border-bottom: 1px solid #d9d9d9;
  }

  .wenhua {
    height: 178px;
    width: 1000px;
    margin: 0 auto;
    border-top: 1px solid #d9d9d9;
  }

  .wenhua .pic {
    height: 178px;
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
  }

  .wenhua .title {
    width: 720px;
    height: 44px;
    float: left;
    margin-top: 28px;
    font-size: 18px;
    font-family: "Adobe Heiti Std";
    color: rgb(0, 0, 0);

  }

  .wenhua .title a.a2:link {
    font-size: 18px;
    font-family: "Adobe Heiti Std";
    color: rgb(0, 0, 0);
    text-decoration: none;
  }

  .wenhua .title a.a2:hover {
    font-size: 18px;
    font-family: "Adobe Heiti Std";
    color: rgb(216, 156, 70);
    cursor: pointer;
    text-decoration: none;
  }

  .wenhua .title a.a2:visited {
    font-size: 18px;
    font-family: "Adobe Heiti Std";
    color: #bdbdbd;
    text-decoration: none;
  }

  .wenhua .time {
    width: 720px;
    height: 34px;
    float: left;
    font-size: 12px;
    font-family: "Adobe Heiti Std";
    color: rgb(157, 157, 157);
  }

  .wenhua .content {
    width: 720px;
    height: 70px;
    float: left;
    line-height: 34px;
    font-size: 12px;
    font-family: "Adobe Heiti Std";
    color: rgb(0, 0, 0);
  }

  #yemiananniu {
    width: 940px;
    height: 100px;
    margin: 0 auto;
  }

  #yemiananniu .anniu {
    height: 40px;
    float: right;
    margin-top: 30px;
    border: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_0 {
    height: 40px;
    float: left;
    width: 85px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_0:hover {
    height: 40px;
    float: left;
    width: 85px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_1 {
    height: 40px;
    float: left;
    width: 30px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_1:hover {
    height: 40px;
    float: left;
    width: 30px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_2 {
    height: 40px;
    float: left;
    width: 30px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_2:hover {
    height: 40px;
    float: left;
    width: 30px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_3 {
    height: 40px;
    float: left;
    width: 30px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_3:hover {
    height: 40px;
    float: left;
    width: 30px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_4 {
    height: 40px;
    float: left;
    width: 30px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_4:hover {
    height: 40px;
    float: left;
    width: 30px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_5 {
    height: 40px;
    float: left;
    width: 30px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_5:hover {
    height: 40px;
    float: left;
    width: 30px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_6 {
    height: 40px;
    float: left;
    width: 30px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_6:hover {
    height: 40px;
    float: left;
    width: 30px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #a5a5a5;
  }

  #yemiananniu .anniu_7 {
    height: 40px;
    float: left;
    width: 85px;
    line-height: 40px;
    text-align: center;
  }

  #yemiananniu .anniu_7:hover {
    height: 40px;
    float: left;
    width: 85px;
    background-color: #a5a5a5;
    line-height: 40px;
    text-align: center;
  }*/
  #wenhuawrapper {
    height: auto;
    width: 1000px;
    margin: 0 auto;
    border-bottom: 1px solid #d9d9d9;
  }
  .wenhua {
    height: 178px;
    width: 1000px;
    margin: 0 auto;
    border-top: 1px solid #d9d9d9;
    .pic {
      height: 178px;
      width: 280px;
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
    }
    .title {
      width: 720px;
      height: 44px;
      float: left;
      margin-top: 28px;
      font-size: 18px;
      font-family: "Adobe Heiti Std";
      color: rgb(0, 0, 0);
      a {
        &.a2 {
          &:link {
            font-size: 18px;
            font-family: "Adobe Heiti Std";
            color: rgb(0, 0, 0);
            text-decoration: none;
          }
          &:hover {
            font-size: 18px;
            font-family: "Adobe Heiti Std";
            color: rgb(216, 156, 70);
            cursor: pointer;
            text-decoration: none;
          }
          &:visited {
            font-size: 18px;
            font-family: "Adobe Heiti Std";
            color: #bdbdbd;
            text-decoration: none;
          }
        }
      }
    }
    .time {
      width: 720px;
      height: 34px;
      float: left;
      font-size: 12px;
      font-family: "Adobe Heiti Std";
      color: rgb(157, 157, 157);
    }
    .content {
      width: 720px;
      height: 70px;
      float: left;
      line-height: 34px;
      font-size: 12px;
      font-family: "Adobe Heiti Std";
      color: rgb(0, 0, 0);
    }
  }
  #yemiananniu {
    width: 940px;
    height: 100px;
    margin: 0 auto;
    .anniu {
      height: 40px;
      float: right;
      margin-top: 30px;
      border: 1px solid #a5a5a5;
    }
    .anniu_0 {
      height: 40px;
      float: left;
      width: 85px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #a5a5a5;
      &:hover {
        height: 40px;
        float: left;
        width: 85px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #a5a5a5;
      }
    }
    .anniu_1 {
      height: 40px;
      float: left;
      width: 30px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #a5a5a5;
      &:hover {
        height: 40px;
        float: left;
        width: 30px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #a5a5a5;
      }
    }
    .anniu_2 {
      height: 40px;
      float: left;
      width: 30px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #a5a5a5;
      &:hover {
        height: 40px;
        float: left;
        width: 30px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #a5a5a5;
      }
    }
    .anniu_3 {
      height: 40px;
      float: left;
      width: 30px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #a5a5a5;
      &:hover {
        height: 40px;
        float: left;
        width: 30px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #a5a5a5;
      }
    }
    .anniu_4 {
      height: 40px;
      float: left;
      width: 30px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #a5a5a5;
      &:hover {
        height: 40px;
        float: left;
        width: 30px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #a5a5a5;
      }
    }
    .anniu_5 {
      height: 40px;
      float: left;
      width: 30px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #a5a5a5;
      &:hover {
        height: 40px;
        float: left;
        width: 30px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #a5a5a5;
      }
    }
    .anniu_6 {
      height: 40px;
      float: left;
      width: 30px;
      line-height: 40px;
      text-align: center;
      border-right: 1px solid #a5a5a5;
      &:hover {
        height: 40px;
        float: left;
        width: 30px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid #a5a5a5;
      }
    }
    .anniu_7 {
      height: 40px;
      float: left;
      width: 85px;
      line-height: 40px;
      text-align: center;
      &:hover {
        height: 40px;
        float: left;
        width: 85px;
        background-color: #a5a5a5;
        line-height: 40px;
        text-align: center;
      }
    }
  }



</style>
