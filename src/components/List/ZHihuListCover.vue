<template>
<div class="zhihu-list-cover m1">
	<div class="clearfix">
		<div class="col col-3 center">
			<img :src="getImage(images)" width="60" class="rounded m1" alt="" style="">
		</div>
		<div class="col col-9">
			<p class="h6">{{title}}</p>
		</div>
	</div>
	<p class="h6 m1"></p>
</div>
</template>
<!--
'http://lovestreet.leanapp.cn/zhihu/resource?url='+
-->
<script>
export default {
	props: ['title', 'images'],
	name: 'ZHihuListCover',
	components: {

	},
	methods:{
    getImage(url){
      console.log("url:"+url);
      console.log("before test");
      // 把现在的图片连接传进来，返回一个不受限制的路径
      if(url !== undefined){
        let _u = url.substring( 7 );
        console.log("newURL:"+'https://images.weserv.nl/?url=' + _u);
        return 'https://images.weserv.nl/?url=' + _u;
      }
/*
      console.log("test");
*/
    }
  }
}
</script>

<style>
.zhihu-list-cover {
	/*box-shadow: 0px 5px 20px #efefef;*/
	border-bottom: 1px solid #efefef;
}
</style>
