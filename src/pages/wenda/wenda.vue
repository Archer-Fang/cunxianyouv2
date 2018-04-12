<template>
  <div >
    <v-carousel></v-carousel>
    <div class="renwencontainer">
      <div class="content">
        <div class="wangyou">
          网友&村民<!--<div class="testTxtWav" >test</div>-->
        </div>
        <div class="fenge">
          <div class="fengexianleft">
            <img src="/static/images/分割线.png"/>
          </div>
          <div class="txtwav flip notice ">
            想问的，你都可以问
          </div>
          <div class="fengexianright">
            <img src="/static/images/分割线.png"/>
          </div>
        </div>
        <div class="searchplace">
          <el-input
            placeholder="请输入内容"
            v-model="input21" class="form-control">           <!-- prefix-icon="el-icon-search"-->

          </el-input> <img src="/static/images/Search.png" style="margin-left:14px"/>


        </div>

          <el-row :gutter="0" style="margin-top: 30px;">

            <el-col :span="2" :offset="2">
              <el-card shadow="hover" body-style="padding-top:5px;padding-bottom:5px;text-align:center;">
                吃
              </el-card>
            </el-col>
            <el-col :span="2" :offset="4">
              <el-card shadow="hover" body-style="padding-top:5px;padding-bottom:5px;text-align:center;">
                喝
              </el-card>
            </el-col>
            <el-col :span="2" :offset="4">
              <el-card shadow="hover" body-style="padding-top:5px;padding-bottom:5px;text-align:center;">
                玩
              </el-card>
            </el-col>
            <el-col :span="2" :offset="4">
              <el-card shadow="hover" body-style="padding-top:5px;padding-bottom:5px;text-align:center;">
                乐
              </el-card>
            </el-col>

          </el-row>


        <v-content-show></v-content-show>










        <div class="blank" style="height: 50px;display: flex; justify-content: center; align-items: center;margin-top: 60px;">
          <el-button type="button"  style="font-size:14px; color:#8b8b8b;box-shadow: 0 0 15px 2px #F5F5F5;">&nbsp;&nbsp;&nbsp;&nbsp;更新&nbsp;&nbsp;
            <img src="/static/images/刷新.png " ></el-button>
        </div>
        <div class="blank">
        </div>
        <div class="blank">
        </div>

        <v-footer :renwen="true">
        </v-footer>
        <div class="blank">
        </div>
        <div class="blank">
        </div>
      </div>

    </div>


  </div>

</template>

<script>
/*
  import txtWav from "../../assets/js/txt.wav.min.js"
*/
  import footer from "@/components/footer/footer"
  import carousel from "@/components/common/carousel-1"
  import contentShow from "@/components/common/contentShow"
  import quiz from "@/components/common/quiz"


  export default {
    data(){

      return{
        name:'fang',
        input21:'',

      }
    },
    create(){

    },
    components:{
      "v-footer":footer,
      "v-carousel":carousel,
      "v-content-show":contentShow,
      "v-quiz":quiz,

    },
    computed: {


    },
    methods:{


    }


  }
</script>

<style lang="scss" scoped="">
/*
  @import "../../assets/css/txt.wav.css";
*/
/*.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  cursor: pointer;
}
.btn-default:hover {

  background-color: #ccc;

}
  .renwencontainer{
    height:auto;

    margin:0 auto;

    padding-top:6px;
    padding-bottom:7px;
    padding-left:8px;
    padding-right:8px;
  }
  .content{
    height:auto;
    width:968px;
    margin:0 auto;
    background-color:#ffffff;
  }
  .wangyou{
    height:77px;
    width:984px;
    line-height:77px;
    text-align:center;
    margin:0 auto;
    font-size:36px;
    color:#a0a0a0;
  }
  .fenge{width:984px;height:36px;margin:0 auto;}
  .fenge .fengexianleft{width:200px;height:36px;margin-left:170px;float:left;}
  .fenge .fengexianright{width:200px;height:36px;margin-right:170px;float:left;}
  .fenge .notice{width:244px;height:36px;line-height:36px;text-align:center;float:left;color:#413e3e;font-size:20px;}
  .searchplace{width:984px;height:55px;display: flex;justify-content: center;align-items: center;margin:0 auto;  }
  .searchplace input{text-align: center;}

  .blank{height:20px;width:984px;margin:0 auto;}



  .form-control{
    width: 200px;
!*
    height:28px;
*!
  }*/
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
}
.renwencontainer {
  height: auto;
  margin: 0 auto;
  padding-top: 6px;
  padding-bottom: 7px;
  padding-left: 8px;
  padding-right: 8px;
}
.content {
  height: auto;
  width: 968px;
  margin: 0 auto;
  background-color: #ffffff;
}
.wangyou {
  height: 77px;
  width: 984px;
  line-height: 77px;
  text-align: center;
  margin: 0 auto;
  font-size: 36px;
  color: #a0a0a0;
}
.fenge {
  width: 984px;
  height: 36px;
  margin: 0 auto;
  .fengexianleft {
    width: 200px;
    height: 36px;
    margin-left: 170px;
    float: left;
  }
  .fengexianright {
    width: 200px;
    height: 36px;
    margin-right: 170px;
    float: left;
  }
  .notice {
    width: 244px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    float: left;
    color: #413e3e;
    font-size: 20px;
  }
}
.searchplace {
  width: 984px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  input {
    text-align: center;
  }
}
.blank {
  height: 20px;
  width: 984px;
  margin: 0 auto;
}
.form-control {
  width: 200px;
}

</style>
