<template>
  <div class="set">
    <el-carousel :interval="5000" arrow="always" height="520px">
      <el-carousel-item >
        <img src="/static/images/最初的美好.png" height="520px" width="100%">
      </el-carousel-item>
      <el-carousel-item >
        <img src="/static/images/最初的美好.png" height="520px" width="100%">
      </el-carousel-item>
      <el-carousel-item >
        <img src="/static/images/最初的美好.png" height="520px" width="100%">
      </el-carousel-item>


    </el-carousel>
  </div>

</template>

<style>
  .set{
    height:520px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
