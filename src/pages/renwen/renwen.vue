<template>
  <div >
    <v-carousel></v-carousel>
    <v-small-banner ></v-small-banner>
<!--
    <RenwenList :NewsList="DONE_NEWS_LIST_ROOT"></RenwenList>
-->
    <LoadingTwo v-show="DONE_LOADING_TWO"></LoadingTwo>
    <!-- ===the news list=== -->
    <TopNews :TopNewsData="DONE_NEWS_LATEST.top_stories"></TopNews>

    <div class="ml2 mt1 mr2" style="margin:0 auto;width:1000px;">
      <div v-for="list in DONE_NEWS_LIST_ROOT">
        <p class="news-lastet-time bold ml2">{{list.date | formatDate}}</p>
        <div v-for="item in list.stories">
<!--
          <router-link :to="{name: 'news-detail', params: {id: item.id}}" style="color: black">
-->
            <ZHihuListCover :title="item.title" :images="item.images[0]"></ZHihuListCover>
<!--
          </router-link>
-->
        </div>
      </div>
      <!-- ===click the button to load more news== -->
      <button v-show="!DONE_LOADING_ONE && !DONE_LOADING_TWO" @click="LoadMoreNews()" class="btn-default btn">更多</button>
      <!-- ===the loading when news list loading=== -->
      <LoadingOne v-show="DONE_LOADING_ONE"></LoadingOne>
      <!-- ===back to top button=== -->
      <button @click="backToTop" v-show="BackToTopIsShow" class="btn btn-default">
        回到顶部
      </button>
    </div>
   <!-- <div id="jingyu">
      <div class="logo"><img src="/static/images/白圈.png" style="position:absolute;left:460px;top:4.5px;"> <img
        src="/static/images/logo 拷贝.png" style="position:absolute;left:445px;top:10px;"></div>
      <div class="title" > </div>
      <div class="content" style="background-color: #e9e9e9;">
      </div>
      <div class="sumup"> </div>
    </div>-->
    <v-jingyu :title="title" :content="content" :sumup="sumup"></v-jingyu>
    <v-footer :renwen="true">
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
  import LoadingOne from "@/components/common/LoadingOne"
  import BackToTop from '@/components/common/BackToTop'
  import ZHihuListCover from '@/components/List/ZHihuListCover'
  import jingyu from '@/components/common/jingyu'
  import RenwenList from '@/components/List/RenwenList'








  export default {
    data(){

      return{
        name:'fang',
        BackToTopIsShow: false,
        title:'没有多余的喧嚣，没有冗余的广告。',
        content:"在这里，你可以更贴近美丽乡村中的有趣新鲜以及重要事件，使你对这些美丽乡村游更全面的了解。相比起景色，有时候，人文故事带给人们的内心的触动会更多。",
        sumup:'村先游，身未动，心先游。',


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
      "TopNews":TopNews,
      "LoadingOne":LoadingOne,
      "ZHihuListCover":ZHihuListCover,
      "BackToTop":BackToTop,
      "v-jingyu":jingyu,
      "RenwenList":RenwenList,


    },
    computed: {
      ...mapGetters(['DONE_NEWS_LATEST', 'DONE_LOADING_ONE', 'DONE_LOADING_TWO', 'DONE_NEWS_LIST_ROOT'])


    },
    filters: {
      formatDate(value){
        var middleState = value.split("");
        middleState.splice(4,0,"年");
        middleState.splice(7,0,"月")
        middleState.splice(middleState.length,0,"日")
        var middleState2 = middleState.toString().replace(/,/g,'')
        return middleState2
      }
    },
    methods:{
      LoadMoreNews: function() {
        this.$store.dispatch('FECTH_NEWS_LATEST_MORE')
      },
      backToTop: function() {
        window.scrollTo(0,670)
        this.ZhihuHeadFixClass= 'ZhihuHeadFixClass-none'
      },


    }


  }
</script>
<style scoped="">

</style>
