 <template>
   <div>
<!--
       <img src="/static/open-iconic-master/svg/plus.svg" width="20px" height="20px">
-->
<!--
       <img src="/static/images/提问按钮.png">
-->
       <el-button type="text" @click="dialogVisible = true"><img src="/static/images/提问按钮.png"></el-button>
     <!-- Modal Component -->

     <el-dialog
       title="提问"
       :visible.sync="dialogVisible"
       width="30%"
       :before-close="handleClose">
       <span>
           <!-- <div class="input-group" style="padding-top:30px;">
             <input type="text"  placeholder="输入文字回复" aria-describedby="basic-addon2" style="background-color:#edf1e7;padding-left:10%;padding-right:10%;width:80%;height:85px; text-align: center;">

            </div>-->
         <el-input
           type="textarea"
           :rows="8"
           placeholder="请输入内容"
           v-model="textarea">
</el-input>

           <div><span style="color:#cacaca;">插入图片</span></div><br/>

           <span style="font-size:18px;">问题种类：</span>
           <el-row :gutter="0">

            <el-col :span="2" :offset="0">
              <el-card shadow="hover" body-style="padding:5px;text-align:center;">
                吃
              </el-card>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-card shadow="hover" body-style="padding:5px;text-align:center;">
                喝
              </el-card>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-card shadow="hover" body-style="padding:5px;text-align:center;">
                玩
              </el-card>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-card shadow="hover" body-style="padding:5px;text-align:center;">
                住
              </el-card>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-card shadow="hover" body-style="padding:5px;text-align:center;">
                行
              </el-card>
            </el-col>


          </el-row>

       </span>
       <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
     </el-dialog>
     <!-- Modal Component -->
<!--
     <b-modal id="modal1" title="提问" size="lg">

       <div class="input-group" style="padding-top:30px;">
         <input type="text" class="form-control" placeholder="输入文字回复" aria-describedby="basic-addon2" style="background-color:#edf1e7;padding:0px;width:680px;height:85px; text-align: center;">

       </div>

       <div><span style="color:#cacaca;">插入图片</span></div><br/>

       <span style="font-size:18px;">问题种类：</span>
       <ul class="nav nav-pills" style="padding-left:10px;">
         <li role="presentation" class="active " style="width:100px;"><button type="button" class="btn btn-light navbar-btn center-block btn-color_5" style="border:hidden;  width:65px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;吃&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
         <li role="presentation" class="active " style="width:100px;"><button type="button" class="btn btn-light navbar-btn center-block btn-color_5" style="border:hidden;  width:65px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;喝&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
         <li role="presentation" class="active " style="width:100px;"><button type="button" class="btn btn-light navbar-btn center-block btn-color_5" style="border:hidden;  width:65px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;玩&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
         <li role="presentation" class="active " style="width:100px;"><button type="button" class="btn btn-light navbar-btn center-block btn-color_5" style="border:hidden;  width:65px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;住&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
         <li role="presentation" class="active " style="width:100px;"><button type="button" class="btn btn-light navbar-btn center-block btn-color_5" style="border:hidden;  width:65px; height:30px; font-size:14px; color:#8b8b8b;"><img src="/static/images/分栏圆点.png" >&nbsp;&nbsp;行&nbsp;&nbsp;<img src="/static/images/分栏圆点.png"></button></li>
       </ul>
     </b-modal>
-->
   </div>




 </template>

<script>


    export default {
    	data(){
            return{
              dialogVisible: false,
              textarea: ''

            }
        },
        mounted(){

        },
        props: [''],
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      }
    }
</script>

<style  scoped>
/*
  @import "../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css";
*/
</style>
