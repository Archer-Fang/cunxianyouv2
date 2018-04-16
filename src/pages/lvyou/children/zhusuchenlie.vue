<template>
  <structure>
    <div>
      <div class=" center-block_1 text-center" style="margin-top: 60px;">
        <h1>住宿陈列</h1>
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
                <li><a id="sanwuche">商务车&nbsp;&nbsp;&nbsp; </a></li>
                <li><a id="shizuoche"> 四座车</a></li>
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
        <v-display></v-display>

      </div>
      <div class="center-block row row_3 " style="margin-top: 20px;height:50px; ">


        <div class="block" style="margin: 0 auto;width: 980px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
            style="margin: 0 auto;width: 50%"
          >

          </el-pagination>
        </div>

      </div>

      <v-footer >
      </v-footer>
    </div>
  </structure>

</template>

<script>

  import footer from "@/components/footer/footer"
  import display from "@/components/common/display"


  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    create(){

    },
    components:{
      "v-footer":footer,
      "v-display":display,
    },
    computed: {


    },



  }
</script>
<style scoped="">
  @import '../../../assets/css/bootstrap.css';
  @import '../../../assets/css/jiaotongchenlie.css';
</style>
