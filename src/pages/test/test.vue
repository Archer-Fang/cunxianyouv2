<template>
  <div id="example-2">

  <!--<v-header >
  </v-header>-->
    <!-- `greet` 是在下面定义的方法名 -->

    <button @click="greet" style="margin-top:200px;">Greet1</button>
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
