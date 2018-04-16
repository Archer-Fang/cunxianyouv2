 <template>
   <!--商品展示页面-->
   <div class="center-block row row_2 ">

     <div v-for="(o,index) in 6"class="col-xs-3">
       <div class="thumbnail">
         <a href="/front/hotelDetail?hotelDetailId=  hotel_detail_id  ">
           <div style="width:178px;height:125px;">
             <img src="/static/images/IMG_2199.png" alt="车辆"
                  style="width:100%;height:125px"></div>
         </a>
         <div class="caption">
           <h3 style="margin-top:0px;">  hotel_name  </h3>
           <p style="text-align: center">
           <div class="p_colorsize"style="height:29px;width:168px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;text-align: center">  hotel_describe  </div>
           <p class="text-center"><span class="p_color">￥  price  </span> /天</p>
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
  @import '../../assets/css/bootstrap.css';
  @import '../../assets/css/jiaotongchenlie.css';
</style>
