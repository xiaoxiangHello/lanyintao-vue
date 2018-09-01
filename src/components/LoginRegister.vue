<template>
  <div class="login-panel" v-if="code === 0">
    <router-link to="/Login"><el-button>登陆</el-button></router-link>
    <router-link to="/register"><el-button>注册</el-button></router-link>
  </div>
  <div class="login-panel" v-else>
    <img :src="data.picUrl" />
    <el-button @select="logout">注销</el-button>
  </div>
</template>
<script>
import API from './api/index.js'
export default {
  name: 'LoginRegister',
  components:{
    API
  },
  props: {
  },
  data(){
    return{
      isLogin:"",
      data:[],
      code:0,
    }
  },
  mounted(){
    this.checkLogin()
    this.logout()
  },
  methods:{
    checkLogin(){
      var vm = this;
      this.$jsonp(API.CHECK_LOGIN,
        {}
      ).then(json => {
          vm.data = json.data,
          vm.code = json.code
      }).catch(err => {

      })
    },
    logout(){

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
