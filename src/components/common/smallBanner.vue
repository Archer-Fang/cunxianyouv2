 <template>
   <div class="page3">
     <div class="main">
<!--
       {{#each img}}
-->
       <div class="box1"  >
         <!--<a href="/front/notice?noticeId={{notice_id}}">
           <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}' "
                onmouseout="this.src='{{banner_img}}'" style="width:214px;height:130px">
         </a>-->
         <img src= '/static/images/1.png' onmouseover="this.src='/static/images/3.png'" onmouseout="this.src='/static/images/1.png'" style="width:214px;height:130px" v-show="picShow">

       </div>
       <div class="box1"  >
         <!--<a href="/front/notice?noticeId={{notice_id}}">
           <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}' "
                onmouseout="this.src='{{banner_img}}'" style="width:214px;height:130px">
         </a>-->
         <img src= '/static/images/1.png' onmouseover="this.src='/static/images/3.png'" onmouseout="this.src='/static/images/1.png'" style="width:214px;height:130px" v-show="picShow">

       </div>
       <div class="box1"  >
         <!--<a href="/front/notice?noticeId={{notice_id}}">
           <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}' "
                onmouseout="this.src='{{banner_img}}'" style="width:214px;height:130px">
         </a>-->
         <img src= '/static/images/1.png' onmouseover="this.src='/static/images/3.png'" onmouseout="this.src='/static/images/1.png'" style="width:214px;height:130px" v-show="picShow">

       </div>
       <div class="box1"  >
         <!--<a href="/front/notice?noticeId={{notice_id}}">
           <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}' "
                onmouseout="this.src='{{banner_img}}'" style="width:214px;height:130px">
         </a>-->
         <img src= '/static/images/1.png' onmouseover="this.src='/static/images/3.png'" onmouseout="this.src='/static/images/1.png'" style="width:214px;height:130px" v-show="picShow">

       </div>

<!--
       {{/each}}
-->
     </div>
   </div>
 </template>

<script>
  /*
    引入bootstap
  */
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
    export default {
    	data(){
            return{

            }
        },
        mounted(){

        },
        props: ['picShow'],
        methods: {
           /* closeTip(){
                this.$emit('closeTip')
            }*/
           show(){
/*
             this.$emit('show')
*/
            picShow=true;
           },
          hide(){
/*
            this.$emit('hide')
*/
            picShow=false;

          }
        }
    }
</script>

<style  scoped>
  .page3{
    width: 100%;
    height: 173px;
    margin:0 auto;
    background-color: #efefef;
  }


  .main{
    background-color: #efefef;
    height: 173px;
    width: 1000px;
    margin: 0 auto;

  }
  .main .box1{
    background-color: #efefef;
    height: 173px;
    width: 250px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
