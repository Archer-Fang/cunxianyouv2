 <template>
   <div class="gongnenglanwrap">
     <div id="gongnenglan">
       <div class="box2 zhushuimg" id="zhushuimg" style="margin-left:60px;" @click="judgeTrue"><img src="/static/images/lvyouzhushu3.png" style="width:20px;height:20px"> &nbsp;<span class="" :class="{a22:!judge,a2:judge}">住 宿</span></div>
       <div class="box3 jiaotongimg" id="jiaotongimg" @click="judgeFalse">
         <img src="/static/images/lvyoujiaotong2.png" style="width:20px;height:20px"> &nbsp;<span  :class="{a3:!judge,a33:judge}">交 通 </span>
        <!-- <div >
           <button type="button"
                   class="btn btn-light" v-on:click="add(judge)">+1&nbsp;&gt;
           </button><br>
           number:{{count}}
           judgezi:{{judge}}
         </div>-->
       </div>
     </div>

   </div>

 </template>

<script>

    export default {
    	data(){
            return{
              count:0,
/*
              judge1:judge,
*/
            }
        },
        mounted(){

        },
        props: ['judge'],
        methods: {
          judgeTrue(){
            this.$emit('judgeTrue');
          },
          judgeFalse(){
            this.$emit('judgeFalse');
          },
          add(event){
            this.count++;
            this.judge1=!this.judge1;
            console.log("count:"+this.count);
            console.log("judge1:"+this.judge1);

            /*
                        console.log("event:"+event);
            */
/*
            judge=!judge;
*/
          }


        }
    }
</script>

<style  scoped>
  .gongnenglanwrap{width:100%;background-color:#292929;}
  #gongnenglan{width:814px;height:60px;padding-left:93px;padding-right:93px;margin:0 auto;background-color:#292929;color:#666666;}




  #gongnenglan .box1{width:133px;height:60px;float:left;background-color:#292929;border-top-left-radius:3px;border-bottom-left-radius:3px;display: flex;justify-content: center;align-items: center;color:#a9a9a9;font-size:18px;}
  #gongnenglan .box2{width:284px;height:60px;float:left;display: flex;justify-content: center;align-items: center;background-color:#b1b1b1;color:white;font-size:18px;}
  #gongnenglan .box3{width:265px;height:60px;float:left;background-color:white;border-top-right-radius:3px;border-bottom-right-radius:3px;display: flex;justify-content: center;align-items: center;color:#a9a9a9;font-size:18px;}

  #gongnenglan2{width:814px;height:60px;padding-left:93px;padding-right:93px;margin:0 auto;background-color:#292929;color:#666666;}
  #gongnenglan2 .box1{width:133px;height:60px;float:left;background-color:#292929;border-top-left-radius:3px;border-bottom-left-radius:3px;display: flex;justify-content: center;align-items: center;color:#a9a9a9;font-size:18px;}
  #gongnenglan2 .box2{width:284px;height:60px;float:left;display: flex;justify-content: center;align-items: center;background-color:#b1b1b1;color:white;font-size:18px;}
  #gongnenglan2 .box3{width:265px;height:60px;float:left;background-color:white;border-top-right-radius:3px;border-bottom-right-radius:3px;display: flex;justify-content: center;align-items: center;color:#a9a9a9;font-size:18px;}
  .a2{
    color: #f1f1f1;
    font-family:"宋体";
    font-size:24px;
  }
  .a3{
    color: #3F5961;
    font-family:"宋体";
    font-size:24px;
  }
  .a22{
    color: #f1f1f1;
    font-family:"宋体";
    font-size:12px;
  }
  .a33{
    color: #3F5961;
    font-family:"宋体";
    font-size:12px;
  }

</style>
