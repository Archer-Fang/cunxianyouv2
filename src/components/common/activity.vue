 <template>
   <div id="huodong">
     <img src="/static/images/广告.png" width="1024px" height="295px" class="img_1">

     <div class="blank">

     </div>
     <div class="title1">
       夏游
     </div>
     <div class="pic">
       <img src="/static/images/分割线短.png">
     </div>
     <div class="content">
       这个夏天，回归田园，为您定制的乡村游。
     </div>
     <div class="blank1">
     </div>
     <div class="price">
       &yen 3000 / 人 - 七天
     </div>
     <div class="button">
       <button type="button" class="btn btn-info3 btn-sm"onclick="window.location.href='/front/notice?noticeId=4'"> 浏览更多&nbsp;&gt;</button>
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
  .btn-info3 {
    color: #fff;
    background-color: #3d7d57;
    border-color: #3d7d57;
  }
  #huodong{width:1024px;height:295px;margin:0 auto;position:relative;}
  #huodong .img_1{position:absolute;top:0px;left:0px;z-index:-1;}
  #huodong .blank{width:1024px;height:60px;float:left;background-color: rgba(0,0,0,0.5);}
  #huodong .blank1{width:1024px;height:25px;float:left;background-color: rgba(0,0,0,0.5);}

  #huodong .title1{width:1024px;height:25px;float:left;font-size:20px;text-align:center;color:white;line-height:25px;background-color: rgba(0,0,0,0.5);}
  #huodong .pic{width:1024px;height:35px;float:left;display: flex;justify-content: center;align-items: center;background-color: rgba(0,0,0,0.5);}
  #huodong .content{width:1024px;height:25px;float:left;font-size:20px;text-align:center;color:white;line-height:25px;background-color: rgba(0,0,0,0.5);}
  #huodong .price{width:1024px;height:25px;float:left;font-size:20px;text-align:center;color:white;line-height:25px;background-color: rgba(0,0,0,0.5);}
  #huodong .button{width:1024px;height:100px;float:left;display: flex;justify-content: center;align-items: center;background-color: rgba(0,0,0,0.5);}


</style>
