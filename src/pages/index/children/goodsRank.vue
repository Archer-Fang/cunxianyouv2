<template>
<div style="margin-top: 60px;">

  <el-row >
    <el-col :span="24">
      <div class="grid-content bg-purple">
<!--
        按钮导航
-->
        <div class="setButtonSpace">
          <el-button size="mini" round>床上用品</el-button>
          <el-button size="mini" round>床垫</el-button>
          <el-button size="mini" round>床垫</el-button>
          <el-button size="mini" round>床垫</el-button>
          <el-button size="mini" round>床垫</el-button>
        </div>

        <el-row :gutter="20">

<!--
最近一天销量排行榜
-->
        <v-goods-rank></v-goods-rank>
          <!--
                    最近一周销量排行榜
          -->
          <v-goods-rank></v-goods-rank>

          <!--
                    最近一月销量排行榜
          -->
          <v-goods-rank></v-goods-rank>

        </el-row>

      </div>
    </el-col>
  </el-row>
</div>




</template>
<script>

  import footer from "@/components/footer/footer"
  import goodsRank from "@/components/cmsComponent/goodsRank"
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
      "v-goods-rank":goodsRank
    },
    computed: {


    },
    methods:{


    }


  }
</script>

<style scoped lang="scss">
/*
  goodRanks手写scss
*/

@media screen and (max-width: 1200px) {
  .setMediaRank{
    width: 100%;
  }
  .imgWidth{
    width:40px;
    margin-right:15px;

  }

}
.setSpace {
  margin-left:10px;
  margin-right:10px;
}
.setButtonSpace{
  padding:15px 20px;
}
.panel{
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
/*
  box-shadow: 0 1px 1px #000;
*/
  padding:20px;
  background-color: white;
  /*position: relative;
  top:190px;*/
  .panel-title{
    font-size:1.1rem;
  }
  .media-header{
    font-size:0.7rem;

  }
  .btn-link{
    .oneOmit{
      overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
    }
  }
  .text-muted{
    font-size:0.7rem;
    color: #999;
    .text-danger{     color: #f44336}
  }

  .media-left img{
    width: 40px;
    height: 40px;
  }
  .img-circle{border-radius: 50%;}
}

/*
  element自定义样式
*/
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .bg-white{
    background: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
