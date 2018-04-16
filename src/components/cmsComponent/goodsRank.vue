 <template>
   <div>
     <el-col :span="8" class="setMediaRank" style="padding-bottom: 15px;">
       <div class="panel">
         <el-row class="panel-title">
           最近一天销量排行榜
         </el-row>
         <el-row class="media-header">
           床上用品
         </el-row>
         <!--
                     种类：床上用品单项介绍
         -->
         <el-row >
           <el-col :span="3"class="media-left bg-white imgWidth" >
             <img src="/static/images/%E5%9B%BE%E7%89%871.png" class="img-circle">
           </el-col>
           <el-col :span="16" style="background-color: white">
             <el-row class=" btn-link media-header">
               <div class="oneOmit">
                 【床裙+枕套一对】九鹿堡【三件套】席梦思
               </div>
             </el-row>

             <el-row class="text-muted">
               销量：16876  团购价：<span class="text-danger">23.00</span>元
             </el-row>

           </el-col>

         </el-row>
         <!--
                     种类：床上用品单项介绍
-->
         <el-row >
           <el-col :span="3"class="media-left bg-white imgWidth" >
             <img src="/static/images/%E5%9B%BE%E7%89%871.png" class="img-circle">
           </el-col>
           <el-col :span="16" style="background-color: white">
             <el-row class=" btn-link media-header">
               <div class="oneOmit">
                 【床裙+枕套一对】九鹿堡【三件套】席梦思
               </div>
             </el-row>

             <el-row class="text-muted">
               销量：16876  团购价：<span class="text-danger">23.00</span>元
             </el-row>

           </el-col>

         </el-row>
       </div>

     </el-col>

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
      white-space:nowrap;
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
