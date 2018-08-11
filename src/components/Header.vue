<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <div class="logo">
      <img :src="picUrl" height="50px"><span class="logo-title"><b>烂樱桃</b></span>
    </div>
    <el-menu-item v-for="item in items" :index="item.id">{{item.title}}</el-menu-item>
    <div class="login-panel">
      <el-button @select="singin">登陆</el-button>
      <el-button @select="singup">注册</el-button>
    </div>
  </el-menu>

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  data(){
    return {
      activeIndex:'1',
      items:[{title:'支持国产', url:"#", id:"1"},
             {title:'欧美新片', url:"#", id:"2"},
             {title:'日韩新片', url:"#", id:"3"},
             {title:'东南亚', url:"#", id:"4"}],
      picUrl:"http://www.lanyintao.com/Public/img/Cherry.png",
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      singin(){

      },
      singup(){

      }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  font-size:20px;
  cursor: not-allowed;
  float: left;
}
.logo-title{
  line-height: 20px;
  padding-bottom: 30px;
  padding-right: 30px;
  height: 50px;
}
.login-panel{
  padding-top:10px;
  float: right;
  padding-right: 6%;
}

</style>
