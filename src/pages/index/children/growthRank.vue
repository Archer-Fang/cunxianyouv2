<template>
  <div style="margin-top: 60px;">

    <el-row >
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div class="setButtonSpace">
            <el-button size="mini" round>床上用品</el-button>
            <el-button size="mini" round>床垫</el-button>
            <el-button size="mini" round>床垫</el-button>
            <el-button size="mini" round>床垫</el-button>
            <el-button size="mini" round>床垫</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
              我的行程
            </el-tab-pane>
            <el-tab-pane label="消息中心">消息中心</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>

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
<style lang="scss" scoped="">
  .setButtonSpace{
    padding:15px 20px;
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
