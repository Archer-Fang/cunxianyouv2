<template>
  <div>
  <div class="card1">
    <div class="honglan">
      <img src="/static/images/红蓝半圆和图标.png" width="200px" height="25px">
    </div>
    <div class="shangpinming">
      简约桃木餐桌
    </div>
<!--
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;margin-top:60px;"
                indicators
                img-width="150px"
                background="#ababab"
                v-model="slide"

    >

&lt;!&ndash; @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd" controls                  :interval="4000"

       Text slides with image
&ndash;&gt;
      &lt;!&ndash;<b-carousel-slide caption="First slide"
                        text="fang"
                        style="height: 520px;"
                        img-src="./static/images/最初的美好.png"
      >    <img class="d-block img-fluid w-100" width="1024" height="480" src="./static/images/最初的美好.png">
      </b-carousel-slide>&ndash;&gt;
      <b-carousel-slide img-width="150px" style="height: 135px;">&lt;!&ndash;&ndash;&gt;
        <img src="/static/images/IMG_2199.png" width="100%" height="100%">

      </b-carousel-slide>
    &lt;!&ndash;  <b-carousel-slide style="height: 135px;" caption="First slide"
                        text="fang">
         <img src="/static/images/IMG_2199.png" width="150px" height="135px">
      </b-carousel-slide>&ndash;&gt;

      &lt;!&ndash; Slides with custom text &ndash;&gt;
     &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
        <h1>Hello world!</h1>
      </b-carousel-slide>&ndash;&gt;

      &lt;!&ndash; Slides with image only &ndash;&gt;
    &lt;!&ndash;  <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
        <img src="./static/images/最初的美好.png">

      </b-carousel-slide>&ndash;&gt;

      &lt;!&ndash; Slides with img slot &ndash;&gt;
      &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;
      &lt;!&ndash;<b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
      </b-carousel-slide>&ndash;&gt;
     &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
        <img src="./static/images/最初的美好.png">

      </b-carousel-slide>&ndash;&gt;

      &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;
     &lt;!&ndash; <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" style="height: 520px;">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>&ndash;&gt;

    </b-carousel>
-->
    <div style="width: 200px;height:135px;padding-left:25px;padding-right: 25px;float: left;">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                :interval="4000"
                img-width="150px"
                img-height="135px"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="/static/images/IMG_2199.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="/static/images/IMG_2199.png">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="/static/images/IMG_2199.png">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/IMG_2199.png" alt="image slot">
      </b-carousel-slide>



    </b-carousel>
    </div>



   <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>-->
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
    <!--
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;margin-top:60px;"
                    indicators
                    img-width="150px"
                    background="#ababab"
                    v-model="slide"

        >

    &lt;!&ndash; @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd" controls                  :interval="4000"

           Text slides with image
    &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide caption="First slide"
                            text="fang"
                            style="height: 520px;"
                            img-src="./static/images/最初的美好.png"
          >    <img class="d-block img-fluid w-100" width="1024" height="480" src="./static/images/最初的美好.png">
          </b-carousel-slide>&ndash;&gt;
          <b-carousel-slide img-width="150px" style="height: 135px;">&lt;!&ndash;&ndash;&gt;
            <img src="/static/images/IMG_2199.png" width="100%" height="100%">

          </b-carousel-slide>
        &lt;!&ndash;  <b-carousel-slide style="height: 135px;" caption="First slide"
                            text="fang">
             <img src="/static/images/IMG_2199.png" width="150px" height="135px">
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with custom text &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <h1>Hello world!</h1>
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with image only &ndash;&gt;
        &lt;!&ndash;  <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with img slot &ndash;&gt;
          &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
          </b-carousel-slide>&ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" style="height: 520px;">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
              ut lacus vel interdum.
            </p>
          </b-carousel-slide>&ndash;&gt;

        </b-carousel>
    -->
    <div style="width: 200px;height:135px;padding-left:25px;padding-right: 25px;float: left;">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="4000"
                  img-width="150px"
                  img-height="135px"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide"
                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                          img-src="/static/images/IMG_2199.png"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="/static/images/IMG_2199.png" alt="image slot">
        </b-carousel-slide>



      </b-carousel>
    </div>



    <!-- <p class="mt-4">
       Slide #: {{ slide }}<br>
       Sliding: {{ sliding }}
     </p>-->
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
    <!--
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;margin-top:60px;"
                    indicators
                    img-width="150px"
                    background="#ababab"
                    v-model="slide"

        >

    &lt;!&ndash; @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd" controls                  :interval="4000"

           Text slides with image
    &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide caption="First slide"
                            text="fang"
                            style="height: 520px;"
                            img-src="./static/images/最初的美好.png"
          >    <img class="d-block img-fluid w-100" width="1024" height="480" src="./static/images/最初的美好.png">
          </b-carousel-slide>&ndash;&gt;
          <b-carousel-slide img-width="150px" style="height: 135px;">&lt;!&ndash;&ndash;&gt;
            <img src="/static/images/IMG_2199.png" width="100%" height="100%">

          </b-carousel-slide>
        &lt;!&ndash;  <b-carousel-slide style="height: 135px;" caption="First slide"
                            text="fang">
             <img src="/static/images/IMG_2199.png" width="150px" height="135px">
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with custom text &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <h1>Hello world!</h1>
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with image only &ndash;&gt;
        &lt;!&ndash;  <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with img slot &ndash;&gt;
          &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
          </b-carousel-slide>&ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" style="height: 520px;">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
              ut lacus vel interdum.
            </p>
          </b-carousel-slide>&ndash;&gt;

        </b-carousel>
    -->
    <div style="width: 200px;height:135px;padding-left:25px;padding-right: 25px;float: left;">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="4000"
                  img-width="150px"
                  img-height="135px"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide"
                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                          img-src="/static/images/IMG_2199.png"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="/static/images/IMG_2199.png" alt="image slot">
        </b-carousel-slide>



      </b-carousel>
    </div>



    <!-- <p class="mt-4">
       Slide #: {{ slide }}<br>
       Sliding: {{ sliding }}
     </p>-->
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
    <!--
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;margin-top:60px;"
                    indicators
                    img-width="150px"
                    background="#ababab"
                    v-model="slide"

        >

    &lt;!&ndash; @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd" controls                  :interval="4000"

           Text slides with image
    &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide caption="First slide"
                            text="fang"
                            style="height: 520px;"
                            img-src="./static/images/最初的美好.png"
          >    <img class="d-block img-fluid w-100" width="1024" height="480" src="./static/images/最初的美好.png">
          </b-carousel-slide>&ndash;&gt;
          <b-carousel-slide img-width="150px" style="height: 135px;">&lt;!&ndash;&ndash;&gt;
            <img src="/static/images/IMG_2199.png" width="100%" height="100%">

          </b-carousel-slide>
        &lt;!&ndash;  <b-carousel-slide style="height: 135px;" caption="First slide"
                            text="fang">
             <img src="/static/images/IMG_2199.png" width="150px" height="135px">
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with custom text &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <h1>Hello world!</h1>
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with image only &ndash;&gt;
        &lt;!&ndash;  <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with img slot &ndash;&gt;
          &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
          </b-carousel-slide>&ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" style="height: 520px;">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
              ut lacus vel interdum.
            </p>
          </b-carousel-slide>&ndash;&gt;

        </b-carousel>
    -->
    <div style="width: 200px;height:135px;padding-left:25px;padding-right: 25px;float: left;">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="4000"
                  img-width="150px"
                  img-height="135px"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide"
                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                          img-src="/static/images/IMG_2199.png"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="/static/images/IMG_2199.png" alt="image slot">
        </b-carousel-slide>



      </b-carousel>
    </div>



    <!-- <p class="mt-4">
       Slide #: {{ slide }}<br>
       Sliding: {{ sliding }}
     </p>-->
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
    <!--
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;margin-top:60px;"
                    indicators
                    img-width="150px"
                    background="#ababab"
                    v-model="slide"

        >

    &lt;!&ndash; @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd" controls                  :interval="4000"

           Text slides with image
    &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide caption="First slide"
                            text="fang"
                            style="height: 520px;"
                            img-src="./static/images/最初的美好.png"
          >    <img class="d-block img-fluid w-100" width="1024" height="480" src="./static/images/最初的美好.png">
          </b-carousel-slide>&ndash;&gt;
          <b-carousel-slide img-width="150px" style="height: 135px;">&lt;!&ndash;&ndash;&gt;
            <img src="/static/images/IMG_2199.png" width="100%" height="100%">

          </b-carousel-slide>
        &lt;!&ndash;  <b-carousel-slide style="height: 135px;" caption="First slide"
                            text="fang">
             <img src="/static/images/IMG_2199.png" width="150px" height="135px">
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with custom text &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <h1>Hello world!</h1>
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with image only &ndash;&gt;
        &lt;!&ndash;  <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with img slot &ndash;&gt;
          &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
          </b-carousel-slide>&ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" style="height: 520px;">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
              ut lacus vel interdum.
            </p>
          </b-carousel-slide>&ndash;&gt;

        </b-carousel>
    -->
    <div style="width: 200px;height:135px;padding-left:25px;padding-right: 25px;float: left;">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="4000"
                  img-width="150px"
                  img-height="135px"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide"
                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                          img-src="/static/images/IMG_2199.png"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="/static/images/IMG_2199.png" alt="image slot">
        </b-carousel-slide>



      </b-carousel>
    </div>



    <!-- <p class="mt-4">
       Slide #: {{ slide }}<br>
       Sliding: {{ sliding }}
     </p>-->
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
    <!--
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;margin-top:60px;"
                    indicators
                    img-width="150px"
                    background="#ababab"
                    v-model="slide"

        >

    &lt;!&ndash; @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd" controls                  :interval="4000"

           Text slides with image
    &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide caption="First slide"
                            text="fang"
                            style="height: 520px;"
                            img-src="./static/images/最初的美好.png"
          >    <img class="d-block img-fluid w-100" width="1024" height="480" src="./static/images/最初的美好.png">
          </b-carousel-slide>&ndash;&gt;
          <b-carousel-slide img-width="150px" style="height: 135px;">&lt;!&ndash;&ndash;&gt;
            <img src="/static/images/IMG_2199.png" width="100%" height="100%">

          </b-carousel-slide>
        &lt;!&ndash;  <b-carousel-slide style="height: 135px;" caption="First slide"
                            text="fang">
             <img src="/static/images/IMG_2199.png" width="150px" height="135px">
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with custom text &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <h1>Hello world!</h1>
          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with image only &ndash;&gt;
        &lt;!&ndash;  <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slides with img slot &ndash;&gt;
          &lt;!&ndash; Note the classes .d-block and .img-fluid to prevent browser default image alignment &ndash;&gt;
          &lt;!&ndash;<b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
          </b-carousel-slide>&ndash;&gt;
         &lt;!&ndash; <b-carousel-slide img-src="./static/images/最初的美好.png"  style="height: 520px;">
            <img src="./static/images/最初的美好.png">

          </b-carousel-slide>&ndash;&gt;

          &lt;!&ndash; Slide with blank fluid image to maintain slide aspect ratio &ndash;&gt;
         &lt;!&ndash; <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" style="height: 520px;">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
              ut lacus vel interdum.
            </p>
          </b-carousel-slide>&ndash;&gt;

        </b-carousel>
    -->
    <div style="width: 200px;height:135px;padding-left:25px;padding-right: 25px;float: left;">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="4000"
                  img-width="150px"
                  img-height="135px"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide"
                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                          img-src="/static/images/IMG_2199.png"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="/static/images/IMG_2199.png">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="/static/images/IMG_2199.png" alt="image slot">
        </b-carousel-slide>



      </b-carousel>
    </div>



    <!-- <p class="mt-4">
       Slide #: {{ slide }}<br>
       Sliding: {{ sliding }}
     </p>-->
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
        sliding: null
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
<style>
  .carousel-indicators li {
    /*display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    border: 1px solid #000;
    border-radius: 10px;
    cursor: pointer;
    background-color: #000 \9;
    background-color: transparent;*/
    margin: 0 5px;
    cursor: pointer;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
    outline:none;

  }
  .carousel-indicators .active {
    opacity: 1;
    background: #007aff;
    margin: 0 5px;
    cursor: pointer;
    width: 11px;
    height: 11px;
    display: inline-block;
    border-radius: 100%;
    outline:none;/*去除bootstrap蓝色边框*/


  }
  .carousel-item{
    outline:none;

  }

</style>
<style scoped="">
   .card1{height:300px;width:200px;float:left;background-color:white;margin-left:18px;margin-bottom:10px;}
   .card1 .honglan{height:25px;width:200px;float:left;}
   .card1 .shangpinming{height:45px;width:200px;float:left;color:#3d3d3d;text-align:center;line-height:45px;font-size:17px;font-family:宋体;font-weight:bold;}
   .card1 .neirong{height:165px;width:200px;float:left;}
   .card1 .neirong img{margin-top:15px;margin-left:25px;}
   .card1 .daohang{height:25px;width:200px;float:left;}
   .card1 .daohang .wrap{height:25px;width:45px;margin:0 auto;}
   .card1 .daohang .wrap .box1{height:25px;width:15px;float:left;}
   .card1 .daohang .wrap .box2{height:25px;width:15px;float:left;}
   .card1 .daohang .wrap .box3{height:25px;width:15px;float:left;}
   .card1 .jiage{height:40px;width:200px;float:left;color:#e9cc46;text-align:center;line-height:40px;font-size:15px;}
</style>

