<template>
  <div>
  <div class=" center-block_1 text-center" style="margin-top: 60px;">
    <h1>住宿</h1>
  </div>
<!--
商品搜索页面
-->
  <span class="help-block center-block" id="typinyin_demo" style="white-space:pre;width:150px;display:none;"></span>
  <div class=" center-block_2 text-center">
    <input type="text" class="form-control text-center input_1" placeholder="输入商品"
           aria-describedby="basic-addon2" id="keyword">
    <span class="glyphicon glyphicon-search search_1" id="basic-addon2" onclick="search5()"></span>
  </div>

<!--
商品导航页面
-->
  <div class=" center-block row_1">
    <nav class="navbar_1 navbar-default_1 left-block">
      <div class="container-fluid_1">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          </button>
          <span class="navbar-brand_1" >分类</span>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a> </a></li>
            <li class="active"><a id="allorder">全部 </a></li>
            <li><a  id="taofanorder">套房 </a></li>
            <li><a  id="bieshuorder">别墅 </a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <nav class="navbar_2 navbar-default_1 left-block">
      <div class="container-fluid_1">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <span class="navbar-brand_1" >排序</span>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
          <ul class="nav navbar-nav">
            <li class="active"><a> </a></li>
            <li class="active"><a id="morenorder">默认 </a></li>
            <li class="active"><a id="priceorder">价格 </a></li>
            <li><a id="createTimeorder">新发布</a></li>
            <li class="dropdown">
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>


  <div class=" center-block">

<!--商品展示页面-->
    <div class="center-block row row_2 ">

      <div class="col-xs-3">
        <div class="thumbnail">
          <a href="/front/hotelDetail?hotelDetailId=  hotel_detail_id  ">
            <div style="width:178px;height:125px;">
              <img src="/static/images/IMG_2199.png" alt="车辆"
                   style="width:100%;height:125px"></div>
          </a>
          <div class="caption">
            <h3 style="margin-top:0px;">  hotel_name  </h3>
            <p style="text-align: center">
            <div class="p_colorsize"style="height:29px;width:168px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;text-align: center">  hotel_describe  </div></p>
            <p class="text-center"><span class="p_color">￥  price  </span> /天</p>
          </div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="thumbnail">
          <a href="/front/hotelDetail?hotelDetailId=  hotel_detail_id  ">
            <div style="width:178px;height:125px;">
              <img src="/static/images/IMG_2199.png" alt="车辆"
                   style="width:100%;height:125px"></div>
          </a>
          <div class="caption">
            <h3 style="margin-top:0px;">  hotel_name  </h3>
            <p style="text-align: center">
            <div class="p_colorsize"style="height:29px;width:168px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;text-align: center">  hotel_describe  </div></p>
            <p class="text-center"><span class="p_color">￥  price  </span> /天</p>
          </div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="thumbnail">
          <a href="/front/hotelDetail?hotelDetailId=  hotel_detail_id  ">
            <div style="width:178px;height:125px;">
              <img src="/static/images/IMG_2199.png" alt="车辆"
                   style="width:100%;height:125px"></div>
          </a>
          <div class="caption">
            <h3 style="margin-top:0px;">  hotel_name  </h3>
            <p style="text-align: center">
            <div class="p_colorsize"style="height:29px;width:168px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;text-align: center">  hotel_describe  </div></p>
            <p class="text-center"><span class="p_color">￥  price  </span> /天</p>
          </div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="thumbnail">
          <a href="/front/hotelDetail?hotelDetailId=  hotel_detail_id  ">
            <div style="width:178px;height:125px;">
              <img src="/static/images/IMG_2199.png" alt="车辆"
                   style="width:100%;height:125px"></div>
          </a>
          <div class="caption">
            <h3 style="margin-top:0px;">  hotel_name  </h3>
            <p style="text-align: center">
            <div class="p_colorsize"style="height:29px;width:168px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;text-align: center">  hotel_describe  </div></p>
            <p class="text-center"><span class="p_color">￥  price  </span> /天</p>
          </div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="thumbnail">
          <a href="/front/hotelDetail?hotelDetailId=  hotel_detail_id  ">
            <div style="width:178px;height:125px;">
              <img src="/static/images/IMG_2199.png" alt="车辆"
                   style="width:100%;height:125px"></div>
          </a>
          <div class="caption">
            <h3 style="margin-top:0px;">  hotel_name  </h3>
            <p style="text-align: center">
            <div class="p_colorsize"style="height:29px;width:168px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;text-align: center">  hotel_describe  </div></p>
            <p class="text-center"><span class="p_color">￥  price  </span> /天</p>
          </div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="thumbnail">
          <a href="/front/hotelDetail?hotelDetailId=  hotel_detail_id  ">
            <div style="width:178px;height:125px;">
              <img src="/static/images/IMG_2199.png" alt="车辆"
                   style="width:100%;height:125px"></div>
          </a>
          <div class="caption">
            <h3 style="margin-top:0px;">  hotel_name  </h3>
            <p style="text-align: center">
            <div class="p_colorsize"style="height:29px;width:168px; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;text-align: center">  hotel_describe  </div></p>
            <p class="text-center"><span class="p_color">￥  price  </span> /天</p>
          </div>
        </div>
      </div>



    </div>


  </div>
  <div class="center-block row row_3 " style="margin-top: 20px;height:50px; ">


    <div class="page-container1">
      <div id="pageTool"></div>
    </div>

  </div>

    <v-footer >
    </v-footer>
  </div>

</template>

<script>

  import footer from "@/components/footer/footer"

  export default {
    data(){

      return{
        name:'fang',

      }
    },
    create(){

    },
    components:{
      "v-footer":footer,
    },
    computed: {


    },
    methods:{


    }


  }
</script>
<style scoped="">
  @import '../../../assets/css/bootstrap.css';
  @import '../../../assets/css/jiaotongchenlie.css';
</style>
