 <template>
   <div id="remendiqu">
     <div class="title">
       <div class="container">
         <div class="box1"><img src="/static/images/小黄条.png"></div>
         <div class="box2">热门地区</div>
         <div class="box3"><img src="/static/images/小黄条.png"></div>
       </div>
     </div>
     <div class="subtitle">或许是你下一个目的</div>
     <div class="content">
       <div class="card1">
         <div class="pic" >
           <img src="/static/images/沙头村.png" onmouseover="this.src='/static/images/沙头村选中.png' "
                onmouseout="this.src='/static/images/沙头村.png'" width="200px" height="290px" style="    border-radius: 10px;">            </div>
         <div class="wenzi"> 沙头村</div>
       </div>
       <div class="card1">
         <div class="pic" >
           <img src="/static/images/梅家坞.png" onmouseover="this.src='/static/images/梅家坞 选中.png' "
                onmouseout="this.src='/static/images/梅家坞.png'" width="200px" height="290px"  style="    border-radius: 10px;">            </div>
         <div class="wenzi"> 梅家坞</div>
       </div>
       <div class="card1">
         <div class="pic" >
           <img src="/static/images/斯宅村.png" onmouseover="this.src='/static/images/斯宅村选中.png' "
                onmouseout="this.src='/static/images/斯宅村.png'" width="200px" height="290px">
         </div>
         <div class="wenzi"> 斯宅村</div>
       </div>
       <div class="card1">
         <div class="pic" >
           <img src="/static/images/大峡谷村.png" onmouseover="this.src='/static/images/大峡谷村选中.png' "
                onmouseout="this.src='/static/images/大峡谷村.png'" width="200px" height="290px">            </div>
         <div class="wenzi"> 大峡谷村</div>
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

<style  scoped>
  #remendiqu{
    width: 1024px;
    margin: 0 auto;
    height: 507px;
    background-color: white;
  }
  #remendiqu .title{width:1024px;height:55px;margin:0 auto;}
  #remendiqu .title .container{margin:0 auto;height:55px;width:245px;}
  #remendiqu .title .box1{width:35px;height:55px;float:left;position: relative;}
  #remendiqu .title .box1 img{position: absolute;top: 50%;transform: translateY(-50%);}
  #remendiqu .title .box2{width:145px;height:55px;float:left;font-size:24px;font-family:宋体;font-weight:bold;color:#3a3a3a;text-align:center;line-height:55px;}
  #remendiqu .title .box3{width:35px;height:55px;float:left;position: relative;}
  #remendiqu .title .box3 img{position: absolute;top: 50%;transform: translateY(-50%);}
  #remendiqu .subtitle{height:45px;width:1024px;color:#bababa;text-align:center;line-height:45px;font-size:15px;font-family:宋体;font-weight:bold;}
  #remendiqu .content{
    height: 360px;
    width: 854px;
    padding-top: 10px;
    padding-bottom: 35px;
    margin: 0 auto;
  }


  #remendiqu .content .card1{height:360px;width:200px;float:left;background-color:white;margin-left:13px;}
  #remendiqu .content .card1 .pic{height:290px;width:200px;float:left;    border-radius: 10px;}
  #remendiqu .content .card1 .wenzi{height:70px;width:200px;float:left;font-size:24px;color:#535353;text-align:center;line-height:70px;}


</style>
