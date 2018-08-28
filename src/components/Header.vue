<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
   <router-link :to="IndexPage">
   <div class="logo">
      <img :src="picUrl" height="50px">
      <span class="logo-title">
        <b>烂樱桃</b>
      </span>
    </div>
  </router-link>
    <el-menu-item v-for="item in items" :index="item.id">
      <router-link :to="item.url">{{item.title}}</router-link>
    </el-menu-item>
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
      items:[{title:'支持国产', url:"/ShowList/local/4/p/1", id:"1"},
             {title:'欧美新片', url:"/ShowList/local/1/p/1", id:"2"},
             {title:'日韩新片', url:"/ShowList/local/2/p/1", id:"3"},
             {title:'东南亚', url:"/ShowList/local/3/p/1", id:"4"}],
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
