<template>
  <div id="example-2">
    <v-carousel></v-carousel>
    <v-small-banner :picShow="DONE_PICSHOW"></v-small-banner>
    <div class="page4">
      <div class="mainone">
        <div class="left1">
          <font size="36px" color="#010101">南浔</font>

          <div class="big">
            <div class="small"><img src="/static/images/小蓝条.png"></div>
          </div>
          <font size="2px" color="#000000">南浔自古以来文化昌盛，经济发达，人才辈出，书香不绝。<br>
            明代时就有“九里三阁老，十里两尚书”之谚。仅宋，明，<br>
            清三代， 南浔就出了进士41名。<br>
            与南浔相距7里远的辑里村是著名的辑里丝的产地，<br>
            辑里丝曾获1915年巴拿马国际金奖。</font>

          <div class="jinru"><font size="5px"><a href="/front/notice?noticeId=38" class="a2">点击进入</a></font></div>
        </div>

      </div>
    </div>

    <div class="page5">
      <div class="maintwo">

        <div class="right2">
          <font size="36px" color="#010101">杨家堂村</font>

          <div class="big">
            <div class="small"><img src="/static/images/小黄条.png"></div>
          </div>
          <font size="2px" color="#000000">丽水松阳县杨家堂村坐落在一座环形的山凹中，<br>
            左右两翼山峦环抱村庄，风水布局相当明显。在地无<br>
            三尺平的杨家堂，20多幢土木架构的清代民居<br>
            沿着山坡一级级向上延伸，整个村庄上下屋高低落差<br>
            约2至3米，<br>
            在视野中展现出一个巨大的建筑立面，<br>
            是松阳县典型的阶梯式古村落，<br>
            有金色布达拉宫之称。</font>

          <div class="jinru"><font size="5px"><a  href="/front/notice?noticeId=39" class="a2">点击进入</a></font></div>
        </div>
      </div>
    </div>


    <div class="page6">
      <div class="mainthree">
        <div class="left3">
          <font size="36px" color="#010101">江南第一家</font>

          <div class="big">
            <div class="small"><img src="/static/images/小黑条.png"></div>
          </div>
          <font size="2px" color="#000000">江南第一家位于金华浦江县，它自南宋建炎年间开始，历经<br>
            宋、元、明三朝十五世，同居共食达330余年，<br>
            鼎盛时三千多人同吃一“锅”饭，<br>
            孝义治家名冠天下。这里以其丰富的古代家族<br>
            文化和明清建筑组合为特色，是“青山田园古镇，<br>
            小桥流水人家”的真实写照。</font>

          <div class="jinru"><font size="5px"><a href="/front/notice?noticeId=40" class="a2">点击进入</a></font></div>
        </div>
      </div>
    </div>


    <div class="page7">
      <div class="mainfour">
        <div class="container1">
          <div class="left">
            <div class="box1">
              <a href="/front/videoDetail?videoDetailId=8"><img src="/static/images/青藏高原照片.png" onmouseover="this.src='/static/images/青藏高原.png'"
                                                                onmouseout="this.src='/static/images/青藏高原照片.png'"></a>
            </div>
          </div>
          <div class="right" style="margin-top:-15px;">
            <div class="top">
              <div class="box2" style="margin-top:22px">
                <a href="/front/videoDetail?videoDetailId=2"><img src="/static/images/海南照片.png" onmouseover="this.src='/static/images/海南.png'"
                                                                  onmouseout="this.src='/static/images/海南照片.png'"></a>
              </div>
              <div class="box2" style="margin-top:22px;margin-left:-12px">
                <a href="/front/videoDetail?videoDetailId=5"><img src="/static/images/阳澄湖照片.png" onmouseover="this.src='/static/images/阳澄湖.png'"
                                                                  onmouseout="this.src='/static/images/阳澄湖照片.png'"></a>
              </div>
              <div class="box2" style="margin-top:22px;margin-left:-12px">
                <a href="/front/videoDetail?videoDetailId=6"><img src="/static/images/长白山照片.png" onmouseover="this.src='/static/images/长白山.png'"
                                                                  onmouseout="this.src='/static/images/长白山照片.png'"></a>
              </div>
            </div>
            <div class="bottom">
              <div class="box4" style="margin-top:-26px">
                <a href="/front/videoDetail?videoDetailId=4"><img src="/static/images/龙虎山照片.png" onmouseover="this.src='/static/images/龙虎山.png'"
                                                                  onmouseout="this.src='/static/images/龙虎山照片.png'"></a>
              </div>
              <div class="box4" style="margin-top:-26px;margin-left:-12px">
                <a href="/front/videoDetail?videoDetailId=3"><img src="/static/images/呼伦贝尔草原照片.png" onmouseover="this.src='/static/images/呼伦贝尔草原.png'"
                                                                  onmouseout="this.src='/static/images/呼伦贝尔草原照片.png'"></a>
              </div>
              <div class="box4" style="margin-top:-26px;margin-left:-12px">
                <a href="/front/videoDetail?videoDetailId=7"><img src="/static/images/长江照片.png" onmouseover="this.src='/static/images/长江.png'"
                                                                  onmouseout="this.src='/static/images/长江照片.png'"></a>
              </div>
            </div>
          </div>
        </div>
        <v-footer >
        </v-footer>
      </div>
    </div>

  </div>

</template>

<script>

  import footer from "@/components/footer/footer"
  import smallBanner from "@/components/common/smallBanner"
  import alert from "@/components/common/alert-1"
  import carousel from "@/components/common/carousel-1"
  import { mapGetters } from 'vuex'




  export default {
    data(){

      return{
        name:'fang',
        picShow:true,
      }
    },
    created(){

    },
    components:{
      "v-footer":footer,
      "v-small-banner":smallBanner,
      "v-alert":alert,
      "v-carousel":carousel

  },
    computed: {
      ...mapGetters(['DONE_PICSHOW'])

    },
    methods:{
      greet: function (event) {
        // `this` 在方法里指向当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      },
      show(){
        picShow=true;
      },
      hide(){
        picShow=false;
      }

    }


  }
</script>
<style scoped="">
  .page4{
    width: 100%;
    height: 494px;
    margin:0 auto;

  }
  .mainone{
    background:url(/static/images/%E5%8D%97%E6%B5%94%20%E7%85%A7%E7%89%87.png);
    background-size: 1000px 494px;;
    background-repeat:no-repeat;
    height: 494px;
    width: 1000px;
    margin:0 auto;

  }
  a.a2:link{
    font-family:"宋体";
    color:#010101;
    text-decoration:none;
  }
  a.a2:hover{
    font-family:"宋体";
    color:#6d952f;
    cursor:pointer;
    text-decoration:none;
  }
  a.a2:visited{
    font-family:"宋体";
    color:#bdbdbd;
    text-decoration:none;
  }

  .mainone .left1{

    height:494px;
    width:409px;
    transition:width 1s;
    float:left;
    text-align:center;
    padding-top:50px;
    padding-left:17px;
    padding-right:17px;
    background-color: rgba(244,244,244,0.9);
    position:absolute;

  }
  .mainone .left1:hover{
    width:1000px;
  }

  .mainone .right{

    height: 494px;
    width: 610px;
    float: left;



  }
  .mainone  .big{
    width:100%;
    height:54px;
  }
  .mainone  .small{
    width:36px;
    height:44px;
    margin:0 auto;
    padding-top:10px;
  }
  .mainone  .jinru{
    width:100%;
    height:106px;
    margin:0 auto;
    padding-top:70px;
  }
  .page5{
    width: 100%;
    height: 494px;
    margin:0 auto;
    background-color: white;
  }
  .maintwo{
    background:url(/static/images/%E6%9D%A8%E5%AE%B6%E5%A0%82%E6%9D%91%20%E7%85%A7%E7%89%87.png);
    background-size: 1000px 494px;;
    background-repeat:no-repeat;

    height:494px;
    width:1000px;
    margin:0 auto;

  }
  .maintwo .left{

    height:494px;
    width:610px;
    float:left;

  }
  .maintwo .right2{

    height:494px;
    width:409px;
    transition: width 1s;
    float:right;
    text-align:center;
    padding-top:50px;
    padding-left:17px;
    padding-right:17px;
    background-color: rgba(244,244,244,0.9);
  }

  .maintwo .right2:hover{


    width:1000px;

  }
  .maintwo  .big{
    width:100%;
    height:54px;
  }
  .maintwo  .small{
    width:36px;
    height:44px;
    margin:0 auto;
    padding-top:10px;
  }
  .maintwo .jinru{
    width:100%;
    height:70px;
    margin:0 auto;
    padding-top:50px;
  }
  .page6{
    width: 100%;
    height: 494px;
    margin:0 auto;
    background-color: white;
  }
  .mainthree{

    background:url(/static/images/%E6%B1%9F%E5%8D%97%E7%AC%AC%E4%B8%80%E5%AE%B6%E8%83%8C%E6%99%AF.png);
    background-size: 1000px 494px;;
    background-repeat:no-repeat;

    height:494px;
    width:1000px;
    margin:0 auto;

  }
  .mainthree .left3{
    background-color: rgba(244,244,244,0.9);
    height:494px;
    width:409px;
    transition: width 1s;
    float:left;
    text-align:center;
    padding-top:50px;
    padding-left:17px;
    padding-right:17px;
  }
  .mainthree .left3:hover{

    width:1000px;

  }
  .mainthree .right{

    height:494px;
    width:610px;
    float:left;

  }
  .mainthree  .big{
    width:100%;
    height:54px;
  }
  .mainthree  .small{
    width:36px;
    height:44px;
    margin:0 auto;
    padding-top:10px;
  }
  .mainthree  .jinru{
    width:100%;
    height:106px;
    margin:0 auto;
    padding-top:70px;
  }
  .page7{
    width: 100%;
    height: 460px;
    margin:0 auto;
    background:#808080;
  }
  .mainfour{
    background-color: #808080;
    height: 413px;
    width: 984px;
    margin: 0 auto;
    padding-left: 0px;

    padding-top: 29px;
  }
  .mainfour .container1{
    width: 984px;
    height: 267px;
    background-color: white;
  }
  .mainfour .container1 .left{
    width:336px;
    height:302px;
    background-color:#808080;
    float:left;
  }
  .mainfour .container1 .right{
    width:648px;
    height:302px;
    background-color:#808080;
    float:left;
  }
  .mainfour .container1 .right .top{
    width:648px;
    height:151px;
    background-color:#808080;
    float:left;
    margin-bottom:10px;
  }
  .mainfour .container1 .right .bottom{
    width:648px;
    height:151px;
    background-color:#808080;
    float:left;
  }
  .mainfour .box1{
    width:336px;
    height:242px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:30px;


  }
  .mainfour .box2{
    width:216px;
    height:136px;
    float:left;
    display: flex;
    justify-content: center;
    align-items: center;


  }

  .mainfour .box3{
    width:916px;
    height:270px;

  }
  .mainfour .box4{
    width:216px;
    height:151px;

    float:left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mainfour .footer{
    margin-top: 49px;
    padding-top:17px;
    width: 984px;
    height: 31px;
    background-color:#808080;
    border-top: thin solid #F3F4F8;
    text-align:center;
    font-size:14px;
    color:#eaeaea;
  }
</style>
