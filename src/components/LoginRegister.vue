<template>
  <div class="login-panel" v-if="code === 0">
    <router-link to="/Login"><el-button>登陆</el-button></router-link>
    <router-link to="/register"><el-button>注册</el-button></router-link>
  </div>
  <div class="login-panel" v-else>
    <el-row :gutter="20">
      <el-col :span="12">
        <div>
          <router-link :to="{path:'/user/id/'+ data.userid}" target="_blank">
            <img :src="data.littlePic" style="width:45px;height:45px;border-radius:50%" />
          </router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button v-on:click="logout">注销</el-button>
      </el-col>
    </el-row>
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
    //this.logout()
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
      var vm = this;
      this.$jsonp(API.LOGOUT,{}
      ).then(json => {
        vm.code = 0;
      }).catch(err => {

      })

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
