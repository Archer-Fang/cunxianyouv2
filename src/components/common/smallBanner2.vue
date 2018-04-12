 <template>
   <div id="wugetuijian">
     <!-- {{#each dataList8}}
      <div class="box1">
        <a href="/front/goodsDetail?goodsDetailId={{notice_id}}">
          <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}'"
               onmouseout="this.src='{{banner_img}}'" width="180px "  height="180px">
        </a>
      </div>
      {{/each}}-->
     <div class="box1">
       <!--
                 <a href="/front/goodsDetail?goodsDetailId={{notice_id}}">
       -->
       <!-- <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}'"
             onmouseout="this.src='{{banner_img}}'" width="180px "  height="180px">-->
       <!--
                 </a>
       -->
       <img src="/static/images/kuaizi.png"  onmouseover="this.src='/static/images/五个小推荐（2）.png'" onmouseout="this.src='/static/images/kuaizi.png'">
     </div>
     <div class="box1">
       <!--
                 <a href="/front/goodsDetail?goodsDetailId={{notice_id}}">
       -->
       <!-- <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}'"
             onmouseout="this.src='{{banner_img}}'" width="180px "  height="180px">-->
       <!--
                 </a>
       -->
       <img src="/static/images/kuaizi.png"  onmouseover="this.src='/static/images/五个小推荐（2）.png'" onmouseout="this.src='/static/images/kuaizi.png'">
     </div>
     <div class="box1">
       <!--
                 <a href="/front/goodsDetail?goodsDetailId={{notice_id}}">
       -->
       <!-- <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}'"
             onmouseout="this.src='{{banner_img}}'" width="180px "  height="180px">-->
       <!--
                 </a>
       -->
       <img src="/static/images/kuaizi.png"  onmouseover="this.src='/static/images/五个小推荐（2）.png'" onmouseout="this.src='/static/images/kuaizi.png'">
     </div>
     <div class="box1">
       <!--
                 <a href="/front/goodsDetail?goodsDetailId={{notice_id}}">
       -->
       <!-- <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}'"
             onmouseout="this.src='{{banner_img}}'" width="180px "  height="180px">-->
       <!--
                 </a>
       -->
       <img src="/static/images/kuaizi.png"  onmouseover="this.src='/static/images/五个小推荐（2）.png'" onmouseout="this.src='/static/images/kuaizi.png'">
     </div>
     <div class="box1">
       <!--
                 <a href="/front/goodsDetail?goodsDetailId={{notice_id}}">
       -->
       <!-- <img src="{{banner_img}}" onmouseover="this.src='{{banner_img_over}}'"
             onmouseout="this.src='{{banner_img}}'" width="180px "  height="180px">-->
       <!--
                 </a>
       -->
       <img src="/static/images/kuaizi.png"  onmouseover="this.src='/static/images/五个小推荐（2）.png'" onmouseout="this.src='/static/images/kuaizi.png'">
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

<style  lang="scss" scoped>
  #wugetuijian{height:180px;width:975px;margin-top:35px;margin-bottom:35px;margin-left:auto;margin-right:auto;
  .box1{width:180px;height:180px;float:left;margin-left:15px;box-shadow: 0 0 15px 2px #F5F5F5;}}

</style>
