<template>
  <div>
  <div class="card1">
    <div class="honglan">
      <img src="/static/images/红蓝半圆和图标.png" width="200px" height="25px">
    </div>
    <div class="shangpinming">
      简约桃木餐桌
    </div>

    <div class="imgShow">

        <el-carousel height="135px" indicator-position="outside">
          <el-carousel-item  :key="1">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="3">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>

        </el-carousel>


    </div>


    <div class="jiage">
      ¥999.9
    </div>
  </div>
    <div class="card1">
      <div class="honglan">
        <img src="/static/images/红蓝半圆和图标.png" width="200px" height="25px">
      </div>
      <div class="shangpinming">
        简约桃木餐桌
      </div>

      <div class="imgShow">

        <el-carousel height="135px" indicator-position="outside">
          <el-carousel-item  :key="1">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="3">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>

        </el-carousel>


      </div>


      <div class="jiage">
        ¥999.9
      </div>
    </div>
    <div class="card1">
      <div class="honglan">
        <img src="/static/images/红蓝半圆和图标.png" width="200px" height="25px">
      </div>
      <div class="shangpinming">
        简约桃木餐桌
      </div>

      <div class="imgShow">

        <el-carousel height="135px" indicator-position="outside">
          <el-carousel-item  :key="1">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="3">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>

        </el-carousel>


      </div>


      <div class="jiage">
        ¥999.9
      </div>
    </div>
    <div class="card1">
      <div class="honglan">
        <img src="/static/images/红蓝半圆和图标.png" width="200px" height="25px">
      </div>
      <div class="shangpinming">
        简约桃木餐桌
      </div>

      <div class="imgShow">

        <el-carousel height="135px" indicator-position="outside">
          <el-carousel-item  :key="1">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="3">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>

        </el-carousel>


      </div>


      <div class="jiage">
        ¥999.9
      </div>
    </div>
    <div class="card1">
      <div class="honglan">
        <img src="/static/images/红蓝半圆和图标.png" width="200px" height="25px">
      </div>
      <div class="shangpinming">
        简约桃木餐桌
      </div>

      <div class="imgShow">

        <el-carousel height="135px" indicator-position="outside">
          <el-carousel-item  :key="1">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="3">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>

        </el-carousel>


      </div>


      <div class="jiage">
        ¥999.9
      </div>
    </div>
    <div class="card1">
      <div class="honglan">
        <img src="/static/images/红蓝半圆和图标.png" width="200px" height="25px">
      </div>
      <div class="shangpinming">
        简约桃木餐桌
      </div>

      <div class="imgShow">

        <el-carousel height="135px" indicator-position="outside">
          <el-carousel-item  :key="1">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="2">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>
          <el-carousel-item  :key="3">
            <img src="/static/images/IMG_2199.png">
          </el-carousel-item>

        </el-carousel>


      </div>


      <div class="jiage">
        ¥999.9
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        slide2: 0,
        slide3: 0,
        slide4: 0,
        slide5: 0,
        slide6: 0,
        sliding: null,
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped="">
   .card1{height:300px;width:200px;float:left;background-color:white;margin-left:18px;margin-bottom:10px;box-shadow: 0 0 15px 2px #f1f1f1;}
   .card1 .honglan{height:25px;width:200px;float:left;}
   .card1 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
   .card1 .imgShow{width: 200px;height:164px;float: left;}
   .card1 .imgShow img{width: 200px;height:135px;}
   .card1 .daohang{height:25px;width:200px;float:left;}
   .card1 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
   .card1 .daohang .wrap .box1{height:25px;width:15px;float:left;}
   .card1 .daohang .wrap .box2{height:25px;width:15px;float:left;}
   .card1 .daohang .wrap .box3{height:25px;width:15px;float:left;}
   .card1 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}
</style>

