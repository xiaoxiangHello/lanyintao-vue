<template>
<el-container>
  <el-header></el-header>
  <el-main>
    <img :src="pic" width="100px;">
    <p style="font-size:30px;"><b>欢迎您光临</b></p>
    <div class="panel">
      <div style="height:30px;">
        <p style="padding-top:20px;color:red;">
          {{msg}}
        </p>
      </div>
      <div class="panel-input">
        <el-input v-model="input1" placeholder="用户名(手机号)"></el-input>
        <el-input v-model="input2" type="password" placeholder="密码"></el-input>
        <!-- <el-input v-model="input" placeholder="验证码"></el-input> -->
      </div>

      <div class="tips">
        <p>
          <router-link to="/register"><span style="margin-right:5px;">注册账号</span></router-link>|
          <router-link to="/forget"><span style="margin-left:5px;">忘记密码</span></router-link>
        </p>
        <el-button plain v-on:click="submit">提交</el-button>
      </div>

    </div>
  </el-main>
  <el-footer>
    <Footer/>
  </el-footer>
</el-container>
</template>
<script>
import Footer from '@/components/Footer.vue'
import API from '@/components/api/index.js'
import axios from 'axios';
export default {
  name: 'app',
  components: {
    Footer,
  },
  data(){
    return {
      input:"",
      pageName: '烂樱桃(电影网)',
      pic:"http://api.lanyintao.com/Public/img/Cherry.png",
      input1:"",
      input2:"",
      msg:""
    }
  },
  metaInfo () {
      return {
        title: this.pageName
      }
    },
  mounted () {
    //  this.submit()
  },
  methods:{
    submit(){
      var vm = this;
      this.$jsonp(API.LOGIN,
        {
          username:this.input1,
          password:this.input2
        }
      ).then(json => {
          console.log(json);
          console.log(json.code);
          if(json.code == 0) {
            this.$router.push({
                name: 'IndexPage',
                params:{
                }
            });
          } else {
              vm.msg = json.msg;
          }
      }).catch(err => {

      })
   },


    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.panel{
  height: 500px;
  width: 400px;
  border: 1px solid #eee;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
}
.panel-input{
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-top: 30px;
}
.tips{
  margin-top: 80px;
  margin-bottom: 20px;
}

</style>
