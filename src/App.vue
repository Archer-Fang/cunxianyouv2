<template>
  <div id="app">
    <v-header @loginOut="loginOut" >
    </v-header>
    <router-view/>
  </div>
</template>

<script>
  import header from "@/components/header/header";
  import {
    mapGetters,mapActions,mapMutations
  } from 'vuex'
  export default {
  name: 'App',
  components:{
    "v-header":header,
  },
  methods: {
    ...mapMutations([
      'TOGGLE_USERINFO'
    ]),
    closeTip(){
      console.log("1");
    },
    loginOut(){
      this.TOGGLE_USERINFO(this.userInfo);
      console.log("Login state:"+this.$store.state.data.Login);
      this.$router.push('/');
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
body{
  margin:0px;
}
.bodyAttr{
  background-color: #69705e;
  margin: 0;
}

</style>
