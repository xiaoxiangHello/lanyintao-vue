<template>
<el-container>
  <el-header></el-header>
  <el-main>
    <img :src="pic" width="100px;">
    <p style="font-size:30px;"><b>重置您的密码</b></p>
    <div class="panel">
      <div style="height:30px;">
        <p style="padding-top:20px;color:red;">
          {{msg}}
        </p>
      </div>
      <div class="panel-input">
        <el-input v-model="input1" placeholder="用户名(手机号)"></el-input>
        <el-input v-model="input2" type="password" placeholder="新密码"></el-input>
        <el-input v-model="input3" placeholder="验证码"></el-input>
      </div>

      <div class="tips">
        <el-button plain v-if="sendVerify == 0" v-on:click="getVerify">点击获取短信验证码</el-button>
        <el-button plain v-else disabled>点击获取短信验证码</el-button>
        <p>
          <router-link to="/register"><span style="margin-right:5px;">注册账号</span></router-link>|
          <router-link to="/register"><span style="margin-left:5px;">登录</span></router-link>
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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import API from '@/components/api/index.js'

export default {
  name: 'app',
  components: {
    Footer,
  },
  data(){
    return {
      input:"",
      pageName: '烂樱桃(电影网)',
      pic:"http://www.lanyintao.com/Public/img/Cherry.png",
      input1:"",
      input2:"",
      input3:"",
      sendVerify:0,
      msg:"",
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
    },
    methods:{
      submit(){

        if(this.input1 == ''){
          this.msg = '请填写用户名';
        }
        else if (this.input2 == ''){
          this.msg = '请填写新密码';
        }
        else if (this.input3 == ''){
          this.msg = '请填写验证码';
        } else {
          this.$jsonp(API.FORGET,
            {
              username:this.input1,
              password:this.input2,
              verify:this.input3,
            }
          ).then(json => {
              var vm = this;
              console.log(json.code);
              if(json.code == 0) {
                alert(json.msg);
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
        }

     },
     getVerify(){
       if(this.input1 == ''){
         this.msg = '请填写用户名';
       }else {
         this.$jsonp(API.VERIFYCODE,
           {number:this.input1,type:'forget'}
         ).then(json => {
             if(json.code == 1){
               this.sendVerify = 1;
               setTimeout(() => {
                 this.sendVerify = 0
               }, 1000*60*10)
             }else {
               this.msg = json.msg;
             }
         }).catch(err => {

         })
       }

     }
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
