<template>
  <div >
    <structure>

      <!--post-->
      <div class="post">
        <!--个人状态-->
        <div class="person" style="    height: 180px;">

          <input type=file id=iptfileupload style="visibility:hidden" onchange='show()'>
          <input type=button id=filebutton value='上传头像' style="position: relative; left: -575px; top: 110px;" onclick="iptfileupload.click()" class="input_style">


          <!--头像-->
          <div class="person_head">
           <img src="/static/images/1.png" alt="  touxiang  " id="img" style="width: 100px;height: 100px;border-radius:100px"
                 />
          </div>

          <!--账号信息-->
          <div class="person_info" style="height: auto;">
            <div>  user_name  </div>
            <br><br>
            <div>绑定手机号：  telephone  </div>
            <br>
            <div>账号申请于&nbsp;  nodeDateFormat create_time "YYYY-MM-DD"  </div>
          </div>

          <!--预定 发布 送出的赞-->



        </div>

        <!--陈列框-->
        <div class="info" style="height: auto;">
          <div class="second_navigation" style="height: 70px;">

            <div class="second_navigation_1"style="cursor: pointer">
              <div @click="techang1"v-bind:class="{ a2: techang }" class="" style="height: 70px; line-height: 70px;">特产</div>
            </div>

            <div class="second_navigation_2"style="cursor: pointer">
              <div @click="zhusu1" v-bind:class="{ a2: zhusu }" style="height: 70px; line-height: 70px;">住宿</div>
            </div>

            <div class="second_navigation_2"style="cursor: pointer">
              <div @click="jiaotong1"v-bind:class="{ a2: jiaotong }" style="height: 70px; line-height: 70px;">交通</div>
            </div>
            <div style="float: right;width:auto;height: 70px;">
              <div class="second_navigation_2" style="margin-top:15px;margin-bottom:15px;">
                <div style="    color: #cacaca;">  123  </div>

                <div style="    color: #cacaca;">订单数</div>
              </div>
              <div class="second_navigation_2" style="margin-top:15px;margin-bottom:15px;">
                <div style="    color: #cacaca;">2</div>

                <div style="    color: #cacaca;">收藏</div>
              </div>
              <div class="second_navigation_2" style="margin-top:15px;margin-bottom:15px;">
                <div style="    color: #cacaca;">  123  </div>

                <div style="    color: #cacaca;">送出的赞</div>
              </div>
            </div>


          </div>
          <!--指示条-->
        <!--  <div class="second_navigation_hint">
            <div class="first_navigation_hint_true">
            </div>
          </div>
-->
          <div v-if="techang">
            <!--列表取消预订-->
            <div v-for="(o,index) in 6" class="list" >
              <!--左边-->
              <div class="list_img">
               <img src="/static/images/1.png"  alt="  img1  ">
              </div>

              <div class="list_img_time">
                <div>发布时间：  nodeDateFormat fabu_create_time "YYYY-MM-DD"  </div>
                <br>
                <div>承诺取货时间：  nodeDateFormat begin_time "YYYY-MM-DD"  </div>
                <br>
                <div>卖家：@  owner   电话：  phone  </div>

              </div>

              <!--右边-->
              <div class="list_img_right">

                <div style="margin-top:15px;">  guige2  &nbsp;&nbsp;&nbsp;&nbsp;x   room2  </div>
                <br>

                <div>¥  price  </div>
                <br>

                <div class="list_img_right_button_wait" style="background-color: white;position:relative;top:-10px;left:-10px;">
                  <div class="btn btn-default">取消预订</div>
                </div>

              </div>

            </div>
          </div>
          <div v-if="zhusu">
            <!--列表取消预订-->
            <div v-for="(o,index) in 6" class="list" >
              <!--左边-->
              <div class="list_img">
                <img src="/static/images/chun.png"  alt="  img1  ">
              </div>

              <div class="list_img_time">
                <div>发布时间：  nodeDateFormat fabu_create_time "YYYY-MM-DD"  </div>
                <br>
                <div>承诺取货时间：  nodeDateFormat begin_time "YYYY-MM-DD"  </div>
                <br>
                <div>卖家：@  owner   电话：  phone  </div>

              </div>

              <!--右边-->
              <div class="list_img_right">

                <div style="margin-top:15px;">  guige2  &nbsp;&nbsp;&nbsp;&nbsp;x   room2  </div>
                <br>

                <div>¥  price  </div>
                <br>

                <div class="list_img_right_button_wait" style="background-color: white;position:relative;top:-10px;left:-10px;">
                  <div class="btn btn-default">取消预订</div>
                </div>

              </div>

            </div>
          </div>
          <div v-if="jiaotong">
            <!--列表取消预订-->
            <div v-for="(o,index) in 6" class="list" >
              <!--左边-->
              <div class="list_img">
                <img src="/static/images/3.png"  alt="  img1  ">
              </div>

              <div class="list_img_time">
                <div>发布时间：  nodeDateFormat fabu_create_time "YYYY-MM-DD"  </div>
                <br>
                <div>承诺取货时间：  nodeDateFormat begin_time "YYYY-MM-DD"  </div>
                <br>
                <div>卖家：@  owner   电话：  phone  </div>

              </div>

              <!--右边-->
              <div class="list_img_right">

                <div style="margin-top:15px;">  guige2  &nbsp;&nbsp;&nbsp;&nbsp;x   room2  </div>
                <br>

                <div>¥  price  </div>
                <br>

                <div class="list_img_right_button_wait" style="background-color: white;position:relative;top:-10px;left:-10px;">
                  <div class="btn btn-default">取消预订</div>
                </div>

              </div>

            </div>
          </div>

          <div class="row" style="margin-top: 20px;height:50px; ">
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
        </div>


      </div>

      <!-- page_footer -->
      <div class="divSplit">
      </div>

      <v-footer >
      </v-footer>
    </structure>


  </div>

</template>

<script>

  import footer from "@/components/footer/footer"

  export default {
    data(){

      return{
        zhusu:false,
        jiaotong:false,
        techang:true,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      techang1(){
        console.log("techang clicked");
        this.techang=true;this.jiaotong=false;this.zhusu=false;
        console.log("this.techang:"+this.techang);

      },
      jiaotong1(){
        console.log("jiaotong clicked");

        this.techang=false;this.jiaotong=true;this.zhusu=false;
        console.log("this.jiaotong:"+this.jiaotong);

      },
      zhusu1(){

        this.techang=false;this.jiaotong=false;this.zhusu=true;
        console.log("this.zhusu:"+this.zhusu);

      }

    }


  }
</script>
<style scoped="">
  @import '../../../assets/css/bootstrap.css';
  @import '../../../assets/css/PersonalCenter_specialties_order.css';

  @import '../../../assets/css/PersonalCenter_house_order.css';
  .a2 {
    font-family: "宋体";
    font-size: 12px;
    color: #6d952f;
    text-decoration: none;
  }
</style>
