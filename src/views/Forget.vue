<template>
<el-container>
  <el-header></el-header>
  <el-main>
    <img :src="pic" width="100px;">
    <p style="font-size:30px;"><b>欢迎您光临</b></p>
    <div class="panel">
      <div style="height:30px;">
        <p style="padding-top:20px;color:red;"></p>
      </div>
      <div class="panel-input">
        <el-input v-model="input" placeholder="用户名(手机号)"></el-input>
        <el-input v-model="input" placeholder="新密码"></el-input>
        <el-input v-model="input" placeholder="验证码"></el-input>
      </div>

      <div class="tips">
        <p>
          <router-link to="/register"><span style="margin-right:5px;">注册账号</span></router-link>|
          <router-link to="/register"><span style="margin-left:5px;">登录</span></router-link>
        </p>
        <el-button plain>提交</el-button>
      </div>

    </div>
  </el-main>
  <el-footer>
    <Footer/>
  </el-footer>
</el-container>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer,
  },
  data(){
    return {
      input:"",
      pageName: '烂樱桃(电影网)',
      pic:"http://www.lanyintao.com/Public/img/Cherry.png"
    }
  },
  metaInfo () {
      return {
        title: this.pageName
      }
    },
    mounted () {
      setTimeout(() => {
        this.pageName = this.pageName
      }, 2000)
    }
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
