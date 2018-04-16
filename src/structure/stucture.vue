<template>
  <div style="margin-top: 60px;">

    <slot>父组件还未分发内容到该子组件（必须分发内容！）</slot>
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
