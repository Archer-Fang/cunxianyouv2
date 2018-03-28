<template>
  <div id="example-2">
    <!-- `greet` 是在下面定义的方法名 -->
    <button v-on:click="greet">Greet</button>
  </div>

</template>

<script>
  export default {
    data(){

      return{


      }
    },
    create(){

    },
    components:{

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
