 <template>
   <div class="right">
     <img src="/static/images/图层 10.png" class="img_10">
     <div class="wrap">
       <div class="reping">
         &nbsp;&nbsp;近期热评
         <img src="/static/images/分割线大.png">
       </div>
       <div id="reping">

         <div class="zongti">
           &nbsp;&nbsp;舒服，满意
         </div>
         <div class="xingxing">
           &nbsp;&nbsp;<img src="/static/images/评分五角星.png"><img src="/static/images/评分五角星.png"><img
           src="/static/images/评分五角星.png"><img src="/static/images/评分五角星.png">
         </div>
         <div class="kongbai"></div>
         <div class="neirong">
           &nbsp;&nbsp;两所房子的房间都很干净,很整<br>&nbsp;&nbsp;洁,老板人也很友好和善,很热情。<br>&nbsp;&nbsp;墙裂！ 裂爆了地推荐大家。
         </div>
         <div class="touxiang">
           <img src="/static/images/孩子头像.png">
           @蹲在山顶的猴儿
         </div>

       </div>
       <div class="shangxia">
         <div class="shang"id="shang">
           <img src="/static/images/上一条.png">
         </div>
         <div class="xia"id="xia">
           <img src="/static/images/下一条.png">
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
        props: [''],
        methods: {


        }
    }
</script>

<style lang="scss" scoped>
  .right {
    width: 275px;
    height: 455px;
    margin-left: 60px;
    margin-right: 25px;
    padding-top: 55px;
    float: left;
    position: relative;
    .img_10 {
      position: absolute;
      top: 60px;
      left: 0px;
      z-index: -1;
    }
    .wrap {
      width: 245px;
      height: 415px;
      margin-left: 15px;
      margin-right: 15px;
      float: left;
      .reping {
        width: 245px;
        height: 70px;
        float: left;
        font-size: 22px;
        color: #b6b6b6;
        line-height: 30px;
        padding-top: 15px;
      }
      .zongti {
        width: 245px;
        height: 65px;
        float: left;
        font-size: 24px;
      }
      .xingxing {
        width: 245px;
        height: 30px;
        float: left;
      }
      .kongbai {
        width: 245px;
        height: 30px;
        float: left;
      }
      .neirong {
        width: 245px;
        height: 90px;
        float: left;
        font-size: 14px;
        color: #a9a9a9;
        line-height: 32px;
      }
      .touxiang {
        width: 245px;
        height: 80px;
        float: left;
        font-size: 14px;
        color: #a9a9a9;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -25px;
      }
      .shangxia {
        width: 245px;
        height: 50px;
        float: left;
        .shang {
          width: 122px;
          height: 50px;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -20px;
        }
        .xia {
          width: 123px;
          height: 50px;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -20px;
        }
      }
    }
  }

</style>
