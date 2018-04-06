 <template>
   <div id="rexiao">
     <div class="title1">
       <div class="container1">
         <div class="box1"><img src="/static/images/小黄条.png"></div>
         <div class="box2">{{rankTitle}}</div>
         <div class="box3"><img src="/static/images/小黄条.png"></div>
       </div>
     </div>
     <div class="subtitle txtwav flip">{{rankSubtitle}}</div>
     <div class="content">
       <div class="card1" style="margin-bottom:10px;">
         <div class="pic" style="background:url(/static/images/%E5%9B%BE%E7%89%871.png);">
           <div class="honglan">
           </div>
           <div class="blank"></div>
           <div class="bantouming">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hotel_name</div>
         </div>


         <div class="content1">
           <div class="module line-clamp"><p>hotel_describe</p></div>
         </div>
         <!--<div class="button">{{button}}</div>-->
         <div class="button">
<!--
           <a href="/front/hotelDetail?hotelDetailId={{hotel_detail_id}}">
-->
             <button type="button" class="btn btn-info btn-sm"> 住宿详情&nbsp;&gt;</button>
          <!-- </a>-->
         </div>

       </div>
       <div class="card1" style="margin-bottom:10px;">
         <div class="pic" style="background:url(/static/images/%E5%9B%BE%E7%89%871.png);">
           <div class="honglan">
           </div>
           <div class="blank"></div>
           <div class="bantouming">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hotel_name</div>
         </div>


         <div class="content1">
           <div class="module line-clamp"><p>hotel_describe</p></div>
         </div>
         <!--<div class="button">{{button}}</div>-->
         <div class="button">
           <!--
                      <a href="/front/hotelDetail?hotelDetailId={{hotel_detail_id}}">
           -->
           <button type="button" class="btn btn-info btn-sm"> 住宿详情&nbsp;&gt;</button>
           <!-- </a>-->
         </div>

       </div>
       <div class="card1" style="margin-bottom:10px;">
         <div class="pic" style="background:url(/static/images/%E5%9B%BE%E7%89%871.png);">
           <div class="honglan">
           </div>
           <div class="blank"></div>
           <div class="bantouming">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hotel_name</div>
         </div>


         <div class="content1">
           <div class="module line-clamp"><p>hotel_describe</p></div>
         </div>
         <!--<div class="button">{{button}}</div>-->
         <div class="button">
           <!--
                      <a href="/front/hotelDetail?hotelDetailId={{hotel_detail_id}}">
           -->
           <button type="button" class="btn btn-info btn-sm"> 住宿详情&nbsp;&gt;</button>
           <!-- </a>-->
         </div>

       </div>
       <div class="card1" style="margin-bottom:10px;">
         <div class="pic" style="background:url(/static/images/%E5%9B%BE%E7%89%871.png);">
           <div class="honglan">
           </div>
           <div class="blank"></div>
           <div class="bantouming">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hotel_name</div>
         </div>


         <div class="content1">
           <div class="module line-clamp"><p>hotel_describe</p></div>
         </div>
         <!--<div class="button">{{button}}</div>-->
         <div class="button">
           <!--
                      <a href="/front/hotelDetail?hotelDetailId={{hotel_detail_id}}">
           -->
           <button type="button" class="btn btn-info btn-sm"> 住宿详情&nbsp;&gt;</button>
           <!-- </a>-->
         </div>

       </div>

       <div class="card1" style="margin-bottom:10px;">
         <div class="pic" style="background:url(/static/images/%E5%9B%BE%E7%89%871.png);">
           <div class="honglan">
           </div>
           <div class="blank"></div>
           <div class="bantouming">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hotel_name</div>
         </div>


         <div class="content1">
           <div class="module line-clamp"><p>hotel_describe</p></div>
         </div>
         <!--<div class="button">{{button}}</div>-->
         <div class="button">
           <!--
                      <a href="/front/hotelDetail?hotelDetailId={{hotel_detail_id}}">
           -->
           <button type="button" class="btn btn-info btn-sm"> 住宿详情&nbsp;&gt;</button>
           <!-- </a>-->
         </div>

       </div>

       <div class="card1" style="margin-bottom:10px;">
         <div class="pic" style="background:url(/static/images/%E5%9B%BE%E7%89%871.png);">
           <div class="honglan">
           </div>
           <div class="blank"></div>
           <div class="bantouming">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hotel_name</div>
         </div>


         <div class="content1">
           <div class="module line-clamp"><p>hotel_describe</p></div>
         </div>
         <!--<div class="button">{{button}}</div>-->
         <div class="button">
           <!--
                      <a href="/front/hotelDetail?hotelDetailId={{hotel_detail_id}}">
           -->
           <button type="button" class="btn btn-info btn-sm"> 住宿详情&nbsp;&gt;</button>
           <!-- </a>-->
         </div>

       </div>

     </div>
     <div class="lookformore">
       <button type="button"
               class="btn btn-light">浏览更多&nbsp;&gt;
       </button>
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
        props: ['rankTitle','rankSubtitle'],
        methods: {


        }
    }
</script>

<style  scoped>
  #rexiao{width:1024px;margin:0 auto;height:807px;background-color:#e9e9e9;}
  #rexiao .title1{width:1024px;height:55px;margin:0 auto;}
  #rexiao .title1 .container1{margin:0 auto;height:55px;width:245px;}
  #rexiao .title1 .box1{width:35px;height:55px;float:left;position: relative;}
  #rexiao .title1 .box1 img{position: absolute;top: 50%;transform: translateY(-50%);}
  #rexiao .title1 .box2{width:175px;height:55px;float:left;font-size:24px;font-family:宋体;font-weight:bold;color:#3a3a3a;text-align:center;line-height:55px;}
  #rexiao .title1 .box3{width:35px;height:55px;float:left;position: relative;}
  #rexiao .title1 .box3 img{position: absolute;top: 50%;transform: translateY(-50%);}
  #rexiao .subtitle1{margin:0 auto;height:45px;width:245px;color:#5d5d5d;text-align:center;line-height:45px;font-size:15px;font-family:宋体;font-weight:bold;}
  #rexiao .content{
    height: 630px;
    width: 654px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
  }


  #rexiao .content .card1{height:310px;width:200px;float:left;background-color:white;margin-left:18px;}
  #rexiao .content .card1 .pic{height:190px;width:200px;float:left;}
  #rexiao .content .card1 .pic .honglan{height:25px;width:200px;float:left;}
  #rexiao .content .card1 .pic .blank{height:135px;width:200px;float:left;}
  #rexiao .content .card1 .pic .bantouming{height:30px;width:200px;float:left;background-color: rgba(0,0,0,0.3);line-height:30px;color:white;}

  #rexiao .content .card1 .content1{height:80px;width:200px;float:left;font-size:11px;color: grey;line-height:20px;word-wrap: break-word;}
  #rexiao .content .card1 .button{height:40px;width:200px;float:left;display:flex;justify-content: center;align-items:center;   }
  #rexiao .subtitle {
    height: 45px;
    width: 1024px;
    color: #5d5d5d;
    text-align: center;
    line-height: 45px;
    font-size: 15px;
    font-family: 宋体;
    font-weight: bold;
  }
  #rexiao .lookformore{height:65px;width:1024px;padding-top:4.5px;padding-left:445px;margin-top: 20px;}
  #rexiao .lookformore img{margin-top:4.5px;margin-left:433px;}
</style>
