<template>
  <div >
   <!-- <v-carousel></v-carousel>
    <v-small-banner ></v-small-banner>-->

    <LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
    <!-- ===the news list=== -->
    <TopNews :TopNewsData="DONE_NEWS_LATEST.top_stories"></TopNews>

    <div class="ml2 mt1 mr2">
      <div v-for="list in DONE_NEWS_LIST_ROOT">
        <p class="news-lastet-time bold ml2">{{list.date | formatDate}}</p>
        <div v-for="item in list.stories">
          <router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
            <ZHihuListCover :title="item.title" :images="item.images[0]"></ZHihuListCover>
          </router-link>
        </div>
      </div>
      <!-- ===click the button to load more news== -->
      <button v-show="!DONE_LOADING_ONE && !DONE_LOADING_TWO" @click="LoadMoreNews()" class="load-more-button pl2 pr2 pt1 pb1 mb2 mt1">更多</button>
      <!-- ===the loading when news list loading=== -->
      <LoadingOne v-show="DONE_LOADING_ONE"></LoadingOne>
      <!-- ===back to top button=== -->
      <button @click="backToTop" v-show="BackToTopIsShow" class="back-to-top p1">
        <img src="/static/top.png" alt="" style="width: 1rem;  background-color: white;">
      </button>
    </div>

    <v-footer >
    </v-footer>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  import footer from "@/components/footer/footer"
  import carousel from "@/components/common/carousel-1"
  import smallBanner from "@/components/common/smallBanner"
  import LoadingTwo from "@/components/common/LoadingTwo"
  import TopNews from "@/components/list/TopNews"





  export default {
    data(){

      return{
        name:'fang',

      }
    },
    created(){
      var _this = this
      // 监听页面已滑动的位置，当页面滑动了400px之后，显示“返回顶部”按钮，跟固定在顶部的导航栏
      function backToTop(){
        setInterval(function(){
          if(window.scrollY>400) {
            _this.BackToTopIsShow = true
            /*
                                _this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-on'
            */
          } else {
            _this.BackToTopIsShow = false
            /*
                                _this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-none'
            */
          }
        },500)
      }
      backToTop()
      if (!!this.DONE_NEWS_LATEST.stories && this.DONE_NEWS_LATEST.stories.length > 0) {} else {
        this.$store.dispatch('FECTH_NEWS_LATEST')
      }
    },
    components:{
      "v-footer":footer,
      "v-carousel":carousel,
      "v-small-banner":smallBanner,
      "LoadingTwo":LoadingTwo,
      "TopNews":TopNews

    },
    computed: {
      ...mapGetters(['DONE_NEWS_LATEST', 'DONE_LOADING_ONE', 'DONE_LOADING_TWO', 'DONE_NEWS_LIST_ROOT'])


    },
    methods:{
      LoadMoreNews: function() {
        this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
      },
      backToTop: function() {
        window.scrollTo(0,0)
        this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-none'
      }

    }


  }
</script>
