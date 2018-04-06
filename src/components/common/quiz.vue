 <template>
   <div>
     <b-btn v-b-modal.modal1 variant="link">
<!--
       <img src="/static/open-iconic-master/svg/plus.svg" width="20px" height="20px">
-->
       <img src="/static/images/提问按钮.png">

     </b-btn>

     <!-- Modal Component -->
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

<style  scoped>
/*
  @import "../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css";
*/
</style>
