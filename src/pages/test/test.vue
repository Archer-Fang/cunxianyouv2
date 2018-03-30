<template>
  <div id="example-2">

  <!--<v-header >
  </v-header>-->
    <!-- `greet` 是在下面定义的方法名 -->
    <button @click="greet" style="margin-top:200px;">Greet</button>
  </div>

</template>

<script>
/*
  import header from "@/components/header/header"
*/

  export default {
    data(){

      return{
        name:'fang',

      }
    },
    create(){

    },
    components:{
/*
      "v-header":header,
*/
    },
    computed: {


    },
    methods:{
      greet: function (event) {
        // `this` 在方法里指向当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      }

    }


  }
</script>
