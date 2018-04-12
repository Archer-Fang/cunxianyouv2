<template>
  <div >
    <v-carousel></v-carousel>
    <div style="height:auto;">
     <div id="rexiao" style="background-size: 1000px 827px;background: url(/static/images/img1111.png) no-repeat center;">
        <div class="title">
          <div class="container1">
            <div class="box1"><img src="/static/images/小黄条.png"></div>
            <div class="box2">这里 热销无比</div>
            <div class="box3"><img src="/static/images/小黄条.png"></div>
          </div>
        </div>
        <div class="subtitle txtwav flip">本周热销榜</div>
        <div class="content">
          <!--{{#each dataList}}
          <div class="card1" style="box-shadow: 0 0 15px 2px #F5F5F5;">
            <div class="honglan">
            </div>
            <div class="shangpinming">
              {{hotel_name}}
            </div>
            <div  >
              <div class="swiper-container" style=" padding:0 0 0 20px;height:195px;    width: 90%;">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><a href="/front/goodsDetail?goodsDetailId={{hotel_detail_id}}"><img src="{{hotel_img}}" width="150px" height="135px"></a></div>
                  <div class="swiper-slide"><a href="/front/goodsDetail?goodsDetailId={{hotel_detail_id}}"><img src="{{hotel_img}}" width="150px" height="135px"></a></div>
                  <div class="swiper-slide"><a href="/front/goodsDetail?goodsDetailId={{hotel_detail_id}}"><img src="{{hotel_img}}" width="150px" height="135px"></a></div>
                </div>
                &lt;!&ndash; 如果需要分页器 &ndash;&gt;
                <div class="swiper-pagination" style="    "></div>
                &lt;!&ndash; 如果需要滚动条 &ndash;&gt;
              </div>
            </div>
            <div class="jiage">
              &yen999.9
            </div>
          </div>
          {{/each}}-->
          <v-carouseSmall></v-carouseSmall>

        </div>

        <div class="lookformore"  style="width: 100px;margin:0 auto">
          <div>
            <a href="/front/goods"><el-button>浏览更多</el-button></a></div>
        </div>
     </div>
      <div id="wulong">
        <a href="/front/goodsDetail?goodsDetailId=18"><img src="/static/images/wulong.png" width="1000px"/></a></div>


      <div id="gushi">
        <div class="wrap">
          <div class="title1">优秀的产品，不乏背后的故事</div>
          <div class="subtitle txtwav flip">慢一步，深一步</div>
          <div class="cards">
            <div class="card1">
              <img src="/static/images/IMG_2209.png" width="315px" height="210px">
            </div>
            <div class="card2">
              <div class="biaoti">
                小罐茶
              </div>
              <div class="fubiaoti">你从未有过的茶体验</div>
              <div class="neirong">
                &nbsp小罐茶坚持核心产区原料，严格遵照传统制茶工艺悉<br>心制作。一罐一泡，重新定义了茶的消费体验。
              </div>
              <div class="anniu">
                <a href="/front/goodsDetail?goodsDetailId=18"><img src="/static/images/点击按钮.png"></a>
              </div>
            </div>
            <div class="card3">
              <div class="biaoti">
                武夷大红袍
              </div>
              <div class="fubiaoti">
                精良的工艺，早就完美的产品
              </div>
              <div class="neirong">
                <font size="1">
                  小罐茶·武夷大红袍严格按照武夷岩茶传统制茶技艺初<br>制之后,再采用王顺明先生专有的制作工艺，以荔枝木炭<br>火反复烘焙制作而成。
                  什么时候用高火、什么时候用<br>中火。每一口都来之不易。冲泡后汤色橙黄明亮，<br>香气馥郁，滋味醇厚，不负美誉。
                </font>
              </div>
              <div class="anniu">
                <a href="/front/goodsDetail?goodsDetailId=45"><img src="/static/images/点击按钮.png"></a>
              </div>
            </div>
            <div class="card4">
              <img src="/static/images/IMG_2210.png">
            </div>
          </div>
        </div>
      </div>

    <v-smallBanner2></v-smallBanner2>



    </div>
    <v-jingyu :title="title" :content="content" :sumup="sumup"></v-jingyu>
    <v-footer :renwen="true">
    </v-footer>
  </div>

</template>


<script>
/*
  import Swiper from '../../../static/js/swiper-3.4.2.min.js'
*/
  import jingyu from '@/components/common/jingyu'
  import carousel from "@/components/common/carousel-1"
  import carouseSmall from "@/components/common/carousel-small"
  import smallBanner2 from "@/components/common/smallBanner2"

  import footer from "@/components/footer/footer"
/*
  let swiper
*/
  export default {
    data(){

      return{
/*
        name:'fang',
*/
        title:'没有多余的喧嚣，没有冗余的广告。',
        content:"这里的所有产品都来自朴实美丽的乡村，在这里你所能得到的不仅仅是优质产品，还可以读取一个个产品背后的生动故事。我们希望，这些故事能带你进入匠人和村民的世界，感受他们的点点滴滴。",
        sumup:'村先游，身未动，心先游。',
      }
    },
    create(){
      this.init()

    },
    components:{
      "v-footer":footer,
      "v-jingyu":jingyu,
      "v-carousel":carousel,
      "v-carouseSmall":carouseSmall,
      "v-smallBanner2":smallBanner2

    },
    computed: {


    },
    mounted () {
    },
    methods:{
      /*init(){
        swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
      })
      },*/


    }


  }
</script>
<style lang="scss" scoped="">
/*
  @import url("../../assets/css/swiper-3.4.2.min.css");
*/

  /* CSS Document */



 /* #tuijian{	width:1000px;height:430px;margin:0 auto;	}
  #tuijian .box1{width:240px;height:430px;float:left;}
  #tuijian .box2{width:240px;height:215px;float:left;}
  #tuijian .box3{width:520px;height:215px;float:left;}
  #tuijian .box4{width:475px;height:215px;float:left;}
  #tuijian .box5{width:285px;height:215px;float:left;}

  #rexiao{width:1000px;margin:0 auto;height:827px;background-color:#e9e9e9;}
  #rexiao .title{width:1000px;height:70px;margin:0 auto;}
  #rexiao .title .container1{margin:0 auto;height:55px;width:245px;padding-top: 15px;}
  #rexiao .title .box1{width:35px;height:55px;float:left;position: relative;}
  #rexiao .title .box1 img{position: absolute;top: 50%;transform: translateY(-50%);}
  #rexiao .title .box2{width:175px;height:55px;float:left;font-size:24px;font-family:宋体;font-weight:bold;color:#3a3a3a;text-align:center;line-height:55px;}
  #rexiao .title .box3{width:35px;height:55px;float:left;position: relative;}
  #rexiao .title .box3 img{position: absolute;top: 50%;transform: translateY(-50%);}
  #rexiao .subtitle{height:45px;width:1000px;color:#3a3a3a;text-align:center;line-height:45px;font-size:15px;font-family:宋体;font-weight:bold;}
  #rexiao .content{height:630px;width:654px;padding-top:10px;padding-bottom:10px;margin:0 auto;}


  #rexiao .content .card1{height:300px;width:200px;float:left;background-color:white;margin-left:18px;margin-bottom:10px;}
  #rexiao .content .card1 .honglan{height:25px;width:200px;float:left;}
  #rexiao .content .card1 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
  #rexiao .content .card1 .neirong{height:165px;width:200px;float:left;}
  #rexiao .content .card1 .neirong img{margin-top:15px;margin-left:25px;}
  #rexiao .content .card1 .daohang{height:25px;width:200px;float:left;}
  #rexiao .content .card1 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
  #rexiao .content .card1 .daohang .wrap .box1{height:25px;width:15px;float:left;}
  #rexiao .content .card1 .daohang .wrap .box2{height:25px;width:15px;float:left;}
  #rexiao .content .card1 .daohang .wrap .box3{height:25px;width:15px;float:left;}
  #rexiao .content .card1 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}


  #rexiao .content .card2{height:300px;width:200px;float:left;margin-left:18px;margin-right:18px;background-color:white;}
  #rexiao .content .card2 .honglan{height:25px;width:200px;float:left;}
  #rexiao .content .card2 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
  #rexiao .content .card2 .neirong{height:165px;width:200px;float:left;}
  #rexiao .content .card2 .neirong img{margin-top:15px;margin-left:25px;}
  #rexiao .content .card2 .daohang{height:25px;width:200px;float:left;}
  #rexiao .content .card2 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
  #rexiao .content .card2 .daohang .wrap .box1{height:25px;width:15px;float:left;}
  #rexiao .content .card2 .daohang .wrap .box2{height:25px;width:15px;float:left;}
  #rexiao .content .card2 .daohang .wrap .box3{height:25px;width:15px;float:left;}
  #rexiao .content .card2 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}


  #rexiao .content .card3{height:300px;width:200px;float:left;background-color:white;}
  #rexiao .content .card3 .honglan{height:25px;width:200px;float:left;}
  #rexiao .content .card3 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
  #rexiao .content .card3 .neirong{height:165px;width:200px;float:left;}
  #rexiao .content .card3 .neirong img{margin-top:15px;margin-left:25px;}
  #rexiao .content .card3 .daohang{height:25px;width:200px;float:left;}
  #rexiao .content .card3 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
  #rexiao .content .card3 .daohang .wrap .box1{height:25px;width:15px;float:left;}
  #rexiao .content .card3 .daohang .wrap .box2{height:25px;width:15px;float:left;}
  #rexiao .content .card3 .daohang .wrap .box3{height:25px;width:15px;float:left;}
  #rexiao .content .card3 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}



  #rexiao .content .card4{height:300px;width:200px;float:left;margin-top:10px;background-color:white;}
  #rexiao .content .card4 .honglan{height:25px;width:200px;float:left;}
  #rexiao .content .card4 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
  #rexiao .content .card4 .neirong{height:165px;width:200px;float:left;}
  #rexiao .content .card4 .neirong img{margin-top:15px;margin-left:25px;}
  #rexiao .content .card4 .daohang{height:25px;width:200px;float:left;}
  #rexiao .content .card4 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
  #rexiao .content .card4 .daohang .wrap .box1{height:25px;width:15px;float:left;}
  #rexiao .content .card4 .daohang .wrap .box2{height:25px;width:15px;float:left;}
  #rexiao .content .card4 .daohang .wrap .box3{height:25px;width:15px;float:left;}
  #rexiao .content .card4 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}


  #rexiao .content .card5{height:300px;width:200px;float:left;margin-left:18px;margin-right:18px;margin-top:10px;background-color:white;}
  #rexiao .content .card5 .honglan{height:25px;width:200px;float:left;}
  #rexiao .content .card5 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
  #rexiao .content .card5 .neirong{height:165px;width:200px;float:left;}
  #rexiao .content .card5 .neirong img{margin-top:15px;margin-left:25px;}
  #rexiao .content .card5 .daohang{height:25px;width:200px;float:left;}
  #rexiao .content .card5 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
  #rexiao .content .card5 .daohang .wrap .box1{height:25px;width:15px;float:left;}
  #rexiao .content .card5 .daohang .wrap .box2{height:25px;width:15px;float:left;}
  #rexiao .content .card5 .daohang .wrap .box3{height:25px;width:15px;float:left;}
  #rexiao .content .card5 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}


  #rexiao .content .card6{height:300px;width:200px;float:left;margin-top:10px;background-color:white;}
  #rexiao .content .card6 .honglan{height:25px;width:200px;float:left;}
  #rexiao .content .card6 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
  #rexiao .content .card6 .neirong{height:165px;width:200px;float:left;}
  #rexiao .content .card6 .neirong img{margin-top:15px;margin-left:25px;}
  #rexiao .content .card6 .daohang{height:25px;width:200px;float:left;}
  #rexiao .content .card6 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
  #rexiao .content .card6 .daohang .wrap .box1{height:25px;width:15px;float:left;}
  #rexiao .content .card6 .daohang .wrap .box2{height:25px;width:15px;float:left;}
  #rexiao .content .card6 .daohang .wrap .box3{height:25px;width:15px;float:left;}
  #rexiao .content .card6 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}


  #rexiao .lookformore{height:65px;width:1000px;padding-top:4.5px;padding-left:445px;}
  #rexiao .lookformore img{margin-top:14.5px;margin-left:433px;}

  #wulong{width:1000px;margin:0 auto;height:445px;}
  #wulong .box1{width:135px;height:445px;float:left;text-align:center;color:#5a5a5a;font-weight:bold;font-size:30px;font-weight:隶书;}
  #wulong .box2{width:65px;height:445px;float:left;text-align:center;color:#707070;font-weight:bold;font-size:24px;}
  #wulong .box2_1{width:50px;height:445px;float:left;text-align:center;color:#707070;font-weight:bold;font-size:24px;}
  #wulong .box3{width:470px;height:445px;float:left;}
  #wulong .box3 .kongbai{width:470px;height:70px;float:left;}
  #wulong .box3 .tupian{width:470px;height:300px;float:left;}
  #wulong .box3 .mingzi{width:470px;height:40px;float:left;text-align:center;color:#8f2127;font-weight:bold;font-size:24px}


  #wulong .box4{width:280px;height:85px;float:left;}
  #wulong .box5{width:280px;height:85px;float:left;text-align:center;color:#5a5a5a;font-size:36px}
  #wulong .box6{width:280px;height:75px;float:left;text-align:center;color:#5a5a5a;font-size:38px;line-height:75px;position:relative;}

  #wulong .box7{width:280px;height:60px;float:left;text-align:center;color:#5a5a5a;font-size:48px}
  #wulong .box8{width:280px;height:75px;float:left;text-align:center;color:#5a5a5a;font-size:36px;line-height:75px;}
  #wulong .box9{width:280px;height:65px;float:left;}

  #gushi{width:1000px;height:620px;margin:0 auto;background-color:#e9e9e9;}
  #gushi .wrap{width:630px;height:620px;margin:0 auto;}
  #gushi .wrap .title1{width:630px;height:50px;padding-top:5px;line-height:50px;text-align:center;color:black;font-weight:bold;font-size:24px;font-family:宋体;}
  #gushi .wrap .subtitle{width:630px;height:35px;line-height:35px;text-align:center;color:#6b6b6b;font-size:15px;font-family:宋体;}
  #gushi .wrap .cards{width:630px;height:420px;padding-top:20px;}


  #gushi .wrap .card1{width:315px;height:210px;float:left;}



  #gushi .wrap .card2{width:315px;height:210px;float:left;background-color:white;}
  #gushi .wrap .card2 .biaoti{width:315px;height:25px;margin-top:25px;float:left;color:#a0b512;text-align:center;font-size:14px;font-family:宋体;line-height:25px;font-weight:bold;}
  #gushi .wrap .card2 .fubiaoti{width:315px;height:30px;float:left;color:black;text-align:center;font-size:17px;font-family:隶书;line-height:30px;font-weight:bold;}
  #gushi .wrap .card2 .neirong{width:315px;height:65px;float:left;color:grey;text-align:center;font-size:12px;font-family:宋体;line-height:25px;}
  #gushi .wrap .card2 .anniu{width:315px;height:45px;margin-bottom:20px;float:left;}
  #gushi .wrap .card2 .anniu img{margin-top:10px;margin-left:123px;}



  #gushi .wrap .card3{width:315px;height:210px;float:left;background-color:white;}
  #gushi .wrap .card3 .biaoti{width:315px;height:25px;margin-top:25px;float:left;color:#8a6452;text-align:center;font-size:14px;font-family:宋体;line-height:25px;font-weight:bold;}
  #gushi .wrap .card3 .fubiaoti{width:315px;height:30px;float:left;color:black;text-align:center;font-size:17px;font-family:隶书;line-height:30px;font-weight:bold;}
  #gushi .wrap .card3 .neirong{width:315px;height:65px;float:left;color:grey;text-align:center;font-size:11px;font-family:宋体;line-height:15px;}
  #gushi .wrap .card3 .anniu{width:315px;height:45px;margin-bottom:20px;float:left;}
  #gushi .wrap .card3 .anniu img{margin-top:20px;margin-left:123px;}

  #gushi .wrap .card4{width:315px;height:210px;float:left;}





  #jingyu{
    height: 210px;
    width: 1000px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
    margin-top:0px;
    padding-top:15px;
    background-color: #e9e9e9;
  }
  #jingyu .logo{height:50px;width:1000px;position:relative;}
  #jingyu .title{height:50px;width:960px;color:black;text-align:center;font-size:14px;font-family:楷体;line-height:50px;font-weight:bold;}
  #jingyu .content{height:50px;width:960px;text-align:center;font-size:14px;line-height:23px;color:#9e9e9e;font-family:楷体;}
  #jingyu .sumup{height:30px;width:960px;text-align:center;font-size:14px;line-height:30px;color:grey;font-family:楷体;}

  #footer{height:140px;width:1000px;margin:0 auto;text-align:center;font-size:14px;color:#949494;font-family:宋体;line-height:140px;}


  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .btn-light {
    color: #333;
    background-color: #fff;
    border-color: #ccc;

    width:137px;
    height:40px;

  }
  .btn-info {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
  }
  .btn-group-sm>.btn, .btn-sm {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.2;
    border-radius: 3px;
  }
  .btn-info2 {
    color: #fff;
    background-color: #bd8cff;
    border-color: #bd8cff;
  }
  .btn-info3 {
    color: #fff;
    background-color: #3d7d57;
    border-color: #3d7d57;
  }
  .btn-info4 {
    color: #fff;
    background-color: #ff958c;
    border-color: #ff958c;
  }
  .btn-info5 {
    color: #fff;
    background-color: #90a772;
    border-color: #90a772;
  }
  .btn-info6 {
    color: #fff;
    background-color: #818dbe;
    border-color: #818dbe;
  }*/
#tuijian {
  width: 1000px;
  height: 430px;
  margin: 0 auto;
  .box1 {
    width: 240px;
    height: 430px;
    float: left;
  }
  .box2 {
    width: 240px;
    height: 215px;
    float: left;
  }
  .box3 {
    width: 520px;
    height: 215px;
    float: left;
  }
  .box4 {
    width: 475px;
    height: 215px;
    float: left;
  }
  .box5 {
    width: 285px;
    height: 215px;
    float: left;
  }
}
#rexiao {
  width: 1000px;
  margin: 0 auto;
  height: 827px;
  background-color: #e9e9e9;
  .title {
    width: 1000px;
    height: 70px;
    margin: 0 auto;
    .container1 {
      margin: 0 auto;
      height: 55px;
      width: 245px;
      padding-top: 15px;
    }
    .box1 {
      width: 35px;
      height: 55px;
      float: left;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .box2 {
      width: 175px;
      height: 55px;
      float: left;
      font-size: 24px;
      font-family: 宋体;
      font-weight: bold;
      color: #3a3a3a;
      text-align: center;
      line-height: 55px;
    }
    .box3 {
      width: 35px;
      height: 55px;
      float: left;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .subtitle {
    height: 45px;
    width: 1000px;
    color: #3a3a3a;
    text-align: center;
    line-height: 45px;
    font-size: 15px;
    font-family: 宋体;
    font-weight: bold;
  }
  .content {
    height: 630px;
    width: 654px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
    .card1 {
      height: 300px;
      width: 200px;
      float: left;
      background-color: white;
      margin-left: 18px;
      margin-bottom: 10px;
      .honglan {
        height: 25px;
        width: 200px;
        float: left;
      }
      .shangpinming {
        height: 45px;
        width: 200px;
        float: left;
        color: #3d3d3d;
        text-align: center;
        line-height: 45px;
        font-size: 17px;
        font-family: 宋体;
        font-weight: bold;
      }
      .neirong {
        height: 165px;
        width: 200px;
        float: left;
        img {
          margin-top: 15px;
          margin-left: 25px;
        }
      }
      .daohang {
        height: 25px;
        width: 200px;
        float: left;
        .wrap {
          height: 25px;
          width: 45px;
          margin: 0 auto;
          .box1 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box2 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box3 {
            height: 25px;
            width: 15px;
            float: left;
          }
        }
      }
      .jiage {
        height: 40px;
        width: 200px;
        float: left;
        color: #e9cc46;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
      }
    }
    .card2 {
      height: 300px;
      width: 200px;
      float: left;
      margin-left: 18px;
      margin-right: 18px;
      background-color: white;
      .honglan {
        height: 25px;
        width: 200px;
        float: left;
      }
      .shangpinming {
        height: 45px;
        width: 200px;
        float: left;
        color: #3d3d3d;
        text-align: center;
        line-height: 45px;
        font-size: 17px;
        font-family: 宋体;
        font-weight: bold;
      }
      .neirong {
        height: 165px;
        width: 200px;
        float: left;
        img {
          margin-top: 15px;
          margin-left: 25px;
        }
      }
      .daohang {
        height: 25px;
        width: 200px;
        float: left;
        .wrap {
          height: 25px;
          width: 45px;
          margin: 0 auto;
          .box1 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box2 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box3 {
            height: 25px;
            width: 15px;
            float: left;
          }
        }
      }
      .jiage {
        height: 40px;
        width: 200px;
        float: left;
        color: #e9cc46;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
      }
    }
    .card3 {
      height: 300px;
      width: 200px;
      float: left;
      background-color: white;
      .honglan {
        height: 25px;
        width: 200px;
        float: left;
      }
      .shangpinming {
        height: 45px;
        width: 200px;
        float: left;
        color: #3d3d3d;
        text-align: center;
        line-height: 45px;
        font-size: 17px;
        font-family: 宋体;
        font-weight: bold;
      }
      .neirong {
        height: 165px;
        width: 200px;
        float: left;
        img {
          margin-top: 15px;
          margin-left: 25px;
        }
      }
      .daohang {
        height: 25px;
        width: 200px;
        float: left;
        .wrap {
          height: 25px;
          width: 45px;
          margin: 0 auto;
          .box1 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box2 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box3 {
            height: 25px;
            width: 15px;
            float: left;
          }
        }
      }
      .jiage {
        height: 40px;
        width: 200px;
        float: left;
        color: #e9cc46;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
      }
    }
    .card4 {
      height: 300px;
      width: 200px;
      float: left;
      margin-top: 10px;
      background-color: white;
      .honglan {
        height: 25px;
        width: 200px;
        float: left;
      }
      .shangpinming {
        height: 45px;
        width: 200px;
        float: left;
        color: #3d3d3d;
        text-align: center;
        line-height: 45px;
        font-size: 17px;
        font-family: 宋体;
        font-weight: bold;
      }
      .neirong {
        height: 165px;
        width: 200px;
        float: left;
        img {
          margin-top: 15px;
          margin-left: 25px;
        }
      }
      .daohang {
        height: 25px;
        width: 200px;
        float: left;
        .wrap {
          height: 25px;
          width: 45px;
          margin: 0 auto;
          .box1 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box2 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box3 {
            height: 25px;
            width: 15px;
            float: left;
          }
        }
      }
      .jiage {
        height: 40px;
        width: 200px;
        float: left;
        color: #e9cc46;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
      }
    }
    .card5 {
      height: 300px;
      width: 200px;
      float: left;
      margin-left: 18px;
      margin-right: 18px;
      margin-top: 10px;
      background-color: white;
      .honglan {
        height: 25px;
        width: 200px;
        float: left;
      }
      .shangpinming {
        height: 45px;
        width: 200px;
        float: left;
        color: #3d3d3d;
        text-align: center;
        line-height: 45px;
        font-size: 17px;
        font-family: 宋体;
        font-weight: bold;
      }
      .neirong {
        height: 165px;
        width: 200px;
        float: left;
        img {
          margin-top: 15px;
          margin-left: 25px;
        }
      }
      .daohang {
        height: 25px;
        width: 200px;
        float: left;
        .wrap {
          height: 25px;
          width: 45px;
          margin: 0 auto;
          .box1 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box2 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box3 {
            height: 25px;
            width: 15px;
            float: left;
          }
        }
      }
      .jiage {
        height: 40px;
        width: 200px;
        float: left;
        color: #e9cc46;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
      }
    }
    .card6 {
      height: 300px;
      width: 200px;
      float: left;
      margin-top: 10px;
      background-color: white;
      .honglan {
        height: 25px;
        width: 200px;
        float: left;
      }
      .shangpinming {
        height: 45px;
        width: 200px;
        float: left;
        color: #3d3d3d;
        text-align: center;
        line-height: 45px;
        font-size: 17px;
        font-family: 宋体;
        font-weight: bold;
      }
      .neirong {
        height: 165px;
        width: 200px;
        float: left;
        img {
          margin-top: 15px;
          margin-left: 25px;
        }
      }
      .daohang {
        height: 25px;
        width: 200px;
        float: left;
        .wrap {
          height: 25px;
          width: 45px;
          margin: 0 auto;
          .box1 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box2 {
            height: 25px;
            width: 15px;
            float: left;
          }
          .box3 {
            height: 25px;
            width: 15px;
            float: left;
          }
        }
      }
      .jiage {
        height: 40px;
        width: 200px;
        float: left;
        color: #e9cc46;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
      }
    }
  }
  .lookformore {
    height: 65px;
    width: 1000px;
    padding-top: 4.5px;
/*
    padding-left: 445px;
*/
    img {
      margin-top: 14.5px;
      margin-left: 433px;
    }
  }
}
#wulong {
  width: 1000px;
  margin: 0 auto;
  height: 445px;
  .box1 {
    width: 135px;
    height: 445px;
    float: left;
    text-align: center;
    color: #5a5a5a;
    font-weight: bold;
    font-size: 30px;
    font-weight: 隶书;
  }
  .box2 {
    width: 65px;
    height: 445px;
    float: left;
    text-align: center;
    color: #707070;
    font-weight: bold;
    font-size: 24px;
  }
  .box2_1 {
    width: 50px;
    height: 445px;
    float: left;
    text-align: center;
    color: #707070;
    font-weight: bold;
    font-size: 24px;
  }
  .box3 {
    width: 470px;
    height: 445px;
    float: left;
    .kongbai {
      width: 470px;
      height: 70px;
      float: left;
    }
    .tupian {
      width: 470px;
      height: 300px;
      float: left;
    }
    .mingzi {
      width: 470px;
      height: 40px;
      float: left;
      text-align: center;
      color: #8f2127;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .box4 {
    width: 280px;
    height: 85px;
    float: left;
  }
  .box5 {
    width: 280px;
    height: 85px;
    float: left;
    text-align: center;
    color: #5a5a5a;
    font-size: 36px;
  }
  .box6 {
    width: 280px;
    height: 75px;
    float: left;
    text-align: center;
    color: #5a5a5a;
    font-size: 38px;
    line-height: 75px;
    position: relative;
  }
  .box7 {
    width: 280px;
    height: 60px;
    float: left;
    text-align: center;
    color: #5a5a5a;
    font-size: 48px;
  }
  .box8 {
    width: 280px;
    height: 75px;
    float: left;
    text-align: center;
    color: #5a5a5a;
    font-size: 36px;
    line-height: 75px;
  }
  .box9 {
    width: 280px;
    height: 65px;
    float: left;
  }
}
#gushi {
  width: 1000px;
  height: 620px;
  margin: 0 auto;
  background-color: #e9e9e9;
  .wrap {
    width: 630px;
    height: 620px;
    margin: 0 auto;
    .title1 {
      width: 630px;
      height: 50px;
      padding-top: 5px;
      line-height: 50px;
      text-align: center;
      color: black;
      font-weight: bold;
      font-size: 24px;
      font-family: 宋体;
    }
    .subtitle {
      width: 630px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      color: #6b6b6b;
      font-size: 15px;
      font-family: 宋体;
    }
    .cards {
      width: 630px;
      height: 420px;
      padding-top: 20px;
    }
    .card1 {
      width: 315px;
      height: 210px;
      float: left;
    }
    .card2 {
      width: 315px;
      height: 210px;
      float: left;
      background-color: white;
      .biaoti {
        width: 315px;
        height: 25px;
        margin-top: 25px;
        float: left;
        color: #a0b512;
        text-align: center;
        font-size: 14px;
        font-family: 宋体;
        line-height: 25px;
        font-weight: bold;
      }
      .fubiaoti {
        width: 315px;
        height: 30px;
        float: left;
        color: black;
        text-align: center;
        font-size: 17px;
        font-family: 隶书;
        line-height: 30px;
        font-weight: bold;
      }
      .neirong {
        width: 315px;
        height: 65px;
        float: left;
        color: grey;
        text-align: center;
        font-size: 12px;
        font-family: 宋体;
        line-height: 25px;
      }
      .anniu {
        width: 315px;
        height: 45px;
        margin-bottom: 20px;
        float: left;
        img {
          margin-top: 10px;
          margin-left: 123px;
        }
      }
    }
    .card3 {
      width: 315px;
      height: 210px;
      float: left;
      background-color: white;
      .biaoti {
        width: 315px;
        height: 25px;
        margin-top: 25px;
        float: left;
        color: #8a6452;
        text-align: center;
        font-size: 14px;
        font-family: 宋体;
        line-height: 25px;
        font-weight: bold;
      }
      .fubiaoti {
        width: 315px;
        height: 30px;
        float: left;
        color: black;
        text-align: center;
        font-size: 17px;
        font-family: 隶书;
        line-height: 30px;
        font-weight: bold;
      }
      .neirong {
        width: 315px;
        height: 65px;
        float: left;
        color: grey;
        text-align: center;
        font-size: 11px;
        font-family: 宋体;
        line-height: 15px;
      }
      .anniu {
        width: 315px;
        height: 45px;
        margin-bottom: 20px;
        float: left;
        img {
          margin-top: 20px;
          margin-left: 123px;
        }
      }
    }
    .card4 {
      width: 315px;
      height: 210px;
      float: left;
    }
  }
}
#jingyu {
  height: 210px;
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  margin-top: 0px;
  padding-top: 15px;
  background-color: #e9e9e9;
  .logo {
    height: 50px;
    width: 1000px;
    position: relative;
  }
  .title {
    height: 50px;
    width: 960px;
    color: black;
    text-align: center;
    font-size: 14px;
    font-family: 楷体;
    line-height: 50px;
    font-weight: bold;
  }
  .content {
    height: 50px;
    width: 960px;
    text-align: center;
    font-size: 14px;
    line-height: 23px;
    color: #9e9e9e;
    font-family: 楷体;
  }
  .sumup {
    height: 30px;
    width: 960px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    color: grey;
    font-family: 楷体;
  }
}
#footer {
  height: 140px;
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  color: #949494;
  font-family: 宋体;
  line-height: 140px;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-light {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  width: 137px;
  height: 40px;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-group-sm>.btn, .btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.2;
  border-radius: 3px;
}
.btn-info2 {
  color: #fff;
  background-color: #bd8cff;
  border-color: #bd8cff;
}
.btn-info3 {
  color: #fff;
  background-color: #3d7d57;
  border-color: #3d7d57;
}
.btn-info4 {
  color: #fff;
  background-color: #ff958c;
  border-color: #ff958c;
}
.btn-info5 {
  color: #fff;
  background-color: #90a772;
  border-color: #90a772;
}
.btn-info6 {
  color: #fff;
  background-color: #818dbe;
  border-color: #818dbe;
}


</style>
