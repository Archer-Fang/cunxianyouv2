<template>
  <div >
    <v-carousel></v-carousel>
    <div class="renwencontainer">
      <div class="content">
        <div class="wangyou">
          网友&村民<!--<div class="testTxtWav" >test</div>-->
        </div>
        <div class="fenge">
          <div class="fengexianleft">
            <img src="/static/images/分割线.png"/>
          </div>
          <div class="txtwav flip notice ">
            想问的，你都可以问
          </div>
          <div class="fengexianright">
            <img src="/static/images/分割线.png"/>
          </div>
        </div>
        <div class="searchplace">
          <input type="text"id="输入你想了解的" name=" 输入你想了解的" class="form-control" placeholder="输入你想了解的" > <img src="/static/images/Search.png" style="margin-left:14px"/>


        </div>
        <div class="searchplace">

          <ul class="nav nav-pills">
            <li role="presentation" class="active " style="width:170px;"><button type="button" class="btn btn-default navbar-btn center-block btn-color_3" style="border:hidden;  width:60px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;吃&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
            <li role="presentation" class="active " style="width:170px;"><button type="button" class="btn btn-default navbar-btn center-block btn-color_3" style="border:hidden;  width:60px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;喝&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
            <li role="presentation" class="active " style="width:170px;"><button type="button" class="btn btn-default navbar-btn center-block btn-color_3" style="border:hidden;  width:60px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;玩&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
            <li role="presentation" class="active " style="width:170px;"><button type="button" class="btn btn-default navbar-btn center-block btn-color_3" style="border:hidden;  width:60px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;住&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
            <li role="presentation" class="active " style="width:170px;"><button type="button" class="btn btn-default navbar-btn center-block btn-color_3" style="border:hidden;  width:60px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;行&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
          </ul>

        </div>

        <v-content-show></v-content-show>

        <!--<div class="blank">
        </div>-->


        <!-- <div class="contentshow2">
            <div class="img1">
               <div class="container">
                 <div class="box1">
                 <img src="/static/images/bed图片.png"/>
                 </div>
                 <div class="left">
                 <img src="/static/images/头像.png"/>
                 </div>
                 <div class="right">
                   <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                   <div class="box3">
                   <img src="/static/images/未收藏.png"/>
                   </div>
                   <div class="box4">
                   <img src="/static/images/未回答.png"/>
                   </div>
                 </div>
            </div>
          </div>
            <div class="img1">
               <div class="container">
                 <div class="box1">
                 <img src="/static/images/bed图片.png"/>
                 </div>
                 <div class="left">
                 <img src="/static/images/头像.png"/>
                 </div>
                 <div class="right">
                   <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                   <div class="box3">
                   <img src="/static/images/未收藏.png"/>
                   </div>
                   <div class="box4">
                   <img src="/static/images/未回答.png"/>
                   </div>
                 </div>
            </div>
          </div>
            <div class="img1">
               <div class="container">
                 <div class="box1">
                 <img src="/static/images/bed图片.png"/>
                 </div>
                 <div class="left">
                 <img src="/static/images/头像.png"/>
                 </div>
                 <div class="right">
                   <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                   <div class="box3">
                   <img src="/static/images/未收藏.png"/>
                   </div>
                   <div class="box4">
                   <img src="/static/images/未回答.png"/>
                   </div>
                 </div>
            </div>
          </div>
            <div class="img2">
               <div class="container">
                 <div class="box1">
                 <img src="/static/images/bed图片.png"/>
                 </div>
                 <div class="left">
                 <img src="/static/images/头像.png"/>
                 </div>
                 <div class="right">
                   <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                   <div class="box3">
                   <img src="/static/images/未收藏.png"/>
                   </div>
                   <div class="box4">
                   <img src="/static/images/未回答.png"/>
                   </div>
                 </div>
            </div>
          </div>
            <div class="img3">
               <div class="container">
                 <div class="box1">
                 <img src="/static/images/bed图片.png"/>
                 </div>
                 <div class="left">
                 <img src="/static/images/头像.png"/>
                 </div>
                 <div class="right">
                   <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                   <div class="box3">
                   <img src="/static/images/未收藏.png"/>
                   </div>
                   <div class="box4">
                   <img src="/static/images/未回答.png"/>
                   </div>
                 </div>
            </div>
          </div>
          </div>-->


        <!--
        <div class="blank">
        </div>-->


        <!-- <div class="contentshow3">
           <div class="img1">
              <div class="container">
                <div class="box1">
                <img src="/static/images/bed图片.png"/>
                </div>
                <div class="left">
                <img src="/static/images/头像.png"/>
                </div>
                <div class="right">
                  <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                  <div class="box3">
                  <img src="/static/images/未收藏.png"/>
                  </div>
                  <div class="box4">
                  <img src="/static/images/未回答.png"/>
                  </div>
                </div>
           </div>
         </div>
           <div class="img2">
              <div class="container">
                <div class="box1">
                <img src="/static/images/bed图片.png"/>
                </div>
                <div class="left">
                <img src="/static/images/头像.png"/>
                </div>
                <div class="right">
                  <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                  <div class="box3">
                  <img src="/static/images/未收藏.png"/>
                  </div>
                  <div class="box4">
                  <img src="/static/images/未回答.png"/>
                  </div>
                </div>
           </div>
         </div>
           <div class="img3">
              <div class="container">
                <div class="box1">
                <img src="/static/images/bed图片.png"/>
                </div>
                <div class="left">
                <img src="/static/images/头像.png"/>
                </div>
                <div class="right">
                  <div class="box2"><font style="color:#d1d1d1">住宿环境怎么样，有照片么？</font></div>
                  <div class="box3">
                  <img src="/static/images/未收藏.png"/>
                  </div>
                  <div class="box4">
                  <img src="/static/images/未回答.png"/>
                  </div>
                </div>
           </div>
         </div>
          <div style="position:relative;left:925px;top:-120px;width:5px;height:5px;">
         <button   data-toggle="modal" data-target="#myModal" style="background:none;    border-style: none;     border-width: 0px; padding:0px;">
        <img src="/static/images/提问按钮.png">
        </button>	<br>
        <button   data-toggle="modal" data-target="#myModal2" style="background:none;    border-style: none;     border-width: 0px; padding:0px;">
        <img src="/static/images/收藏按钮.png">
        </button>
         </div>
         </div>


         <div class="blank">
         </div>-->
        <div class="blank" style="height: 50px;display: flex; justify-content: center; align-items: center;">
          <button type="button" class="btn btn-default navbar-btn center-block btn-color_2" style=" width:100px; height:40px; font-size:14px; color:#8b8b8b;box-shadow: 0 0 15px 2px #F5F5F5;">&nbsp;&nbsp;&nbsp;&nbsp;更新&nbsp;&nbsp;
            <img src="/static/images/刷新.png " ></button>
        </div>
        <div class="blank">
        </div>
        <div class="blank">
        </div>

        <v-footer :renwen="true">
        </v-footer>
        <div class="blank">
        </div>
        <div class="blank">
        </div>
      </div>

    </div>


  </div>

</template>

<script>
/*
  import txtWav from "../../assets/js/txt.wav.min.js"
*/
  import footer from "@/components/footer/footer"
  import carousel from "@/components/common/carousel-1"
  import contentShow from "@/components/common/contentShow"
  import quiz from "@/components/common/quiz"


  export default {
    data(){

      return{
        name:'fang',

      }
    },
    create(){

    },
    components:{
      "v-footer":footer,
      "v-carousel":carousel,
      "v-content-show":contentShow,
      "v-quiz":quiz,

    },
    computed: {


    },
    methods:{


    }


  }
</script>

<style scoped="" >

/*
  @import "../../assets/css/txt.wav.css";
*/
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  cursor: pointer;
}
.btn-default:hover {

  background-color: #ccc;

}
  .renwencontainer{
    height:auto;

    margin:0 auto;

    padding-top:6px;
    padding-bottom:7px;
    padding-left:8px;
    padding-right:8px;
  }
  .content{
    height:auto;
    width:968px;
    margin:0 auto;
    background-color:#ffffff;
  }
  .wangyou{
    height:77px;
    width:984px;
    line-height:77px;
    text-align:center;
    margin:0 auto;
    font-size:36px;
    color:#a0a0a0;
  }
  .fenge{width:984px;height:36px;margin:0 auto;}
  .fenge .fengexianleft{width:200px;height:36px;margin-left:170px;float:left;}
  .fenge .fengexianright{width:200px;height:36px;margin-right:170px;float:left;}
  .fenge .notice{width:244px;height:36px;line-height:36px;text-align:center;float:left;color:#413e3e;font-size:20px;}
  .searchplace{width:984px;height:55px;display: flex;justify-content: center;align-items: center;margin:0 auto;  }
  .searchplace input{text-align: center;}

  .blank{height:20px;width:984px;margin:0 auto;}


  .contentshow2{width:984px;height:282px;margin:0 auto;}
  .contentshow2 .img1{margin-left:43px;width:271px;height:282px;float:left;}

  .contentshow2 .img1 .container{width:237px;height:250px;margin-top:16px;margin-bottom:16px;margin-right:17px;margin-left:17px;box-shadow: 0px 0px 16px 1px #F5F5F5;
  }
  .contentshow2 .img1 .box1{width:237px;height:178px;}
  .contentshow2 .img1 .left{width:50px;height:72px;float:left;display: flex;justify-content: center;align-items: center;}
  .contentshow2 .img1 .right{width:187px;height:72px;float:left;font-size:13px;}
  .contentshow2 .img1 .right .box2{width:187px;height:18px;float:left;padding-top:24px;line-height:18px;text-align:center;}
  .contentshow2 .img1 .right .box3{width:18px;height:30px;float:left;margin-left:100px;display: flex;justify-content: center;align-items: center;}
  .contentshow2 .img1 .right .box4{width:50px;height:30px;float:left;display: flex;justify-content: center;align-items: center;}

  .contentshow2 .img2{margin-left:43px;width:271px;height:282px;float:left;}

  .contentshow2 .img2 .container{width:237px;height:250px;margin-top:16px;margin-bottom:16px;margin-right:17px;margin-left:17px;box-shadow: 0px 0px 16px 1px #F5F5F5;
  }
  .contentshow2 .img2 .box1{width:237px;height:178px;}
  .contentshow2 .img2 .left{width:50px;height:72px;float:left;display: flex;justify-content: center;align-items: center;}
  .contentshow2 .img2 .right{width:187px;height:72px;float:left;font-size:13px;}
  .contentshow2 .img2 .right .box2{width:187px;height:18px;float:left;padding-top:24px;line-height:18px;text-align:center;}
  .contentshow2 .img2 .right .box3{width:18px;height:30px;float:left;margin-left:100px;display: flex;justify-content: center;align-items: center;}
  .contentshow2 .img2 .right .box4{width:50px;height:30px;float:left;display: flex;justify-content: center;align-items: center;}

  .contentshow2 .img3{margin-left:43px;width:271px;height:282px;float:left;}

  .contentshow2 .img3 .container{width:237px;height:250px;margin-top:16px;margin-bottom:16px;margin-right:17px;margin-left:17px;box-shadow: 0px 0px 16px 1px #F5F5F5;
  }
  .contentshow2 .img3 .box1{width:237px;height:178px;}
  .contentshow2 .img3 .left{width:50px;height:72px;float:left;display: flex;justify-content: center;align-items: center;}
  .contentshow2 .img3 .right{width:187px;height:72px;float:left;font-size:13px;}
  .contentshow2 .img3 .right .box2{width:187px;height:18px;float:left;padding-top:24px;line-height:18px;text-align:center;}
  .contentshow2 .img3 .right .box3{width:18px;height:30px;float:left;margin-left:100px;display: flex;justify-content: center;align-items: center;}
  .contentshow2 .img3 .right .box4{width:50px;height:30px;float:left;display: flex;justify-content: center;align-items: center;}


  .contentshow3{width:984px;height:282px;margin:0 auto;}
  .contentshow3 .img1{margin-left:43px;width:271px;height:282px;float:left;}

  .contentshow3 .img1 .container{width:237px;height:250px;margin-top:16px;margin-bottom:16px;margin-right:17px;margin-left:17px;box-shadow: 0px 0px 16px 1px #F5F5F5;
  }
  .contentshow3 .img1 .box1{width:237px;height:178px;}
  .contentshow3 .img1 .left{width:50px;height:72px;float:left;display: flex;justify-content: center;align-items: center;}
  .contentshow3 .img1 .right{width:187px;height:72px;float:left;font-size:13px;}
  .contentshow3 .img1 .right .box2{width:187px;height:18px;float:left;padding-top:24px;line-height:18px;text-align:center;}
  .contentshow3 .img1 .right .box3{width:18px;height:30px;float:left;margin-left:100px;display: flex;justify-content: center;align-items: center;}
  .contentshow3 .img1 .right .box4{width:50px;height:30px;float:left;display: flex;justify-content: center;align-items: center;}

  .contentshow3 .img2{margin-left:43px;width:271px;height:282px;float:left;}

  .contentshow3 .img2 .container{width:237px;height:250px;margin-top:16px;margin-bottom:16px;margin-right:17px;margin-left:17px;box-shadow: 0px 0px 16px 1px #F5F5F5;
  }
  .contentshow3 .img2 .box1{width:237px;height:178px;}
  .contentshow3 .img2 .left{width:50px;height:72px;float:left;display: flex;justify-content: center;align-items: center;}
  .contentshow3 .img2 .right{width:187px;height:72px;float:left;font-size:13px;}
  .contentshow3 .img2 .right .box2{width:187px;height:18px;float:left;padding-top:24px;line-height:18px;text-align:center;}
  .contentshow3 .img2 .right .box3{width:18px;height:30px;float:left;margin-left:100px;display: flex;justify-content: center;align-items: center;}
  .contentshow3 .img2 .right .box4{width:50px;height:30px;float:left;display: flex;justify-content: center;align-items: center;}

  .contentshow3 .img3{margin-left:43px;width:271px;height:282px;float:left;}

  .contentshow3 .img3 .container{width:237px;height:250px;margin-top:16px;margin-bottom:16px;margin-right:17px;margin-left:17px;box-shadow: 0px 0px 16px 1px #F5F5F5;
  }
  .contentshow3 .img3 .box1{width:237px;height:178px;}
  .contentshow3 .img3 .left{width:50px;height:72px;float:left;display: flex;justify-content: center;align-items: center;}
  .contentshow3 .img3 .right{width:187px;height:72px;float:left;font-size:13px;}
  .contentshow3 .img3 .right .box2{width:187px;height:18px;float:left;padding-top:24px;line-height:18px;text-align:center;}
  .contentshow3 .img3 .right .box3{width:18px;height:30px;float:left;margin-left:100px;display: flex;justify-content: center;align-items: center;}
  .contentshow3 .img3 .right .box4{width:50px;height:30px;float:left;display: flex;justify-content: center;align-items: center;}
  .form-control{
    width: 200px;
    height:28px;
  }
</style>
