 <template>
   <div class="left">
     <div class="blank"></div>
     <div class="title1">
       田园小镇
     </div>
     <div class="content">
       邂逅不同的自己,一块去旅行世界上最美的田园仙境几乎都集中在这里,<br> 有四季如画的美丽风景,清新怡人的空气、静谧浪漫的气息。
     </div>
     <div class="picture">
       <a href="/front/hotelDetail?hotelDetailId=13">
         <div class="pic1">
           <img src="/static/images/320px-候鳥205.png" width="290px" height="260px">
           <div class="di1">
             <div class="di1_1">田园别墅</div>
             <div class="di1_2">&yen 999</div>
           </div>
         </div>
       </a>
       <a href="/front/hotelDetail?hotelDetailId=14">
         <div class="pic2">
           <img src="/static/images/Y014410000001_1_1.png" width="290px" height="260px">
           <div class="di2">
             <div class="di2_1">田园民房</div>
             <div class="di2_2">&yen 999</div>
           </div>
         </div>
       </a>
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
        props: [''],
        methods: {


        }
    }
</script>

<style lang="scss" scoped>
    /*.left{width:605px;height:510px;margin-left:35px;float:left;}
    .left .blank{width:605px;height:50px;float:left;}
    .left .title1{width:605px;height:75px;float:left;font-weight:bold;font-size:40px;line-height:75px;}
    .left .content{width:605px;height:70px;margin-bottom:10px;float:left;font-size:16px;line-height:35px;color:#a3a3a3;font-family:楷体;}
    .left .picture{width:605px;height:260px;float:left;}
    .left .picture .pic1{width:290px;height:260px;float:left;position:relative;}
    .left .picture .pic1 img{position:absolute;top:0px;left:0px;z-index:-1;}
    .left .picture .pic1 .di1{width:290px;height:50px;margin-top:210px;line-height:50px;background-color: rgba(0,0,0,0.6);}
    .left .picture .pic1 .di1 .di1_1{width: 100px;height: 50px;float: left;color: white;padding-left: 15px;font-size: 17.8px;letter-spacing: 3px;}
    .left .picture .pic1 .di1 .di1_2{width: 80px;height: 60px;float: right;color:#f6f057;font-size: 17.8px;letter-spacing: 3px;}
    .left .picture .pic2{width:290px;height:260px;float:left;margin-left:25px;position:relative;}
    .left .picture .pic2 img{position:absolute;top:0px;left:0px;z-index:-1;}
    .left .picture .pic2 .di2{width:290px;height:50px;margin-top:210px;line-height:50px;background-color: rgba(0,0,0,0.6);}
    .left .picture .pic2 .di2 .di2_1{width: 100px;height: 50px;float: left;color: white;padding-left: 15px;font-size: 17.8px;letter-spacing: 3px;}
    .left .picture .pic2 .di2 .di2_2{width: 80px;height: 60px;float: right;color:#f6f057;font-size: 17.8px;letter-spacing: 3px;}*/
    .left {
      width: 605px;
      height: 510px;
      margin-left: 35px;
      float: left;
      .blank {
        width: 605px;
        height: 50px;
        float: left;
      }
      .title1 {
        width: 605px;
        height: 75px;
        float: left;
        font-weight: bold;
        font-size: 40px;
        line-height: 75px;
      }
      .content {
        width: 605px;
        height: 70px;
        margin-bottom: 10px;
        float: left;
        font-size: 16px;
        line-height: 35px;
        color: #a3a3a3;
        font-family: 楷体;
      }
      .picture {
        width: 605px;
        height: 260px;
        float: left;
        .pic1 {
          width: 290px;
          height: 260px;
          float: left;
          position: relative;
          img {
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: -1;
          }
          .di1 {
            width: 290px;
            height: 50px;
            margin-top: 210px;
            line-height: 50px;
            background-color: rgba(0,0,0,0.6);
            .di1_1 {
              width: 100px;
              height: 50px;
              float: left;
              color: white;
              padding-left: 15px;
              font-size: 17.8px;
              letter-spacing: 3px;
            }
            .di1_2 {
              width: 80px;
              height: 60px;
              float: right;
              color: #f6f057;
              font-size: 17.8px;
              letter-spacing: 3px;
            }
          }
        }
        .pic2 {
          width: 290px;
          height: 260px;
          float: left;
          margin-left: 25px;
          position: relative;
          img {
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: -1;
          }
          .di2 {
            width: 290px;
            height: 50px;
            margin-top: 210px;
            line-height: 50px;
            background-color: rgba(0,0,0,0.6);
            .di2_1 {
              width: 100px;
              height: 50px;
              float: left;
              color: white;
              padding-left: 15px;
              font-size: 17.8px;
              letter-spacing: 3px;
            }
            .di2_2 {
              width: 80px;
              height: 60px;
              float: right;
              color: #f6f057;
              font-size: 17.8px;
              letter-spacing: 3px;
            }
          }
        }
      }
    }

</style>
