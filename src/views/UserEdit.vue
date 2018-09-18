<template>
  <div id="app">
    <el-container>
      <el-header class="nav">
        <Header/>
      </el-header>
      <div class="search">
        <Search />
      </div>
      <el-container>
        <el-main class="main">
            <el-row :gutter="26">
              <div style="height:350px;border:1px solid #eee;background:#eee;">
              <el-col :span="8" style="margin-top:60px;">
                 <img :src="items.littlepic" style="float:right;"/>
              </el-col>
              <el-col :span="12" style="text-align:left;margin-top:45px;margin-left:0px;">
                  <h1 style="margin-left:10px;">编辑头像</h1>
                  <el-button v-on:click="uploadPic">上传头像</el-button>
                  <el-input v-model="input1" placeholder="昵称" style="margin-top:20px;"></el-input>
                  <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="简介"
                    v-model="textarea"
                    style="margin-top:10px;"
                    >
                  </el-input>
                  <el-button v-on:click="sumbit" style="margin-top:10px;">提交</el-button>
              </el-col>

              </div>
            </el-row>


            <el-footer>
              <Footer/>
            </el-footer>
        </el-main>


      </el-container>

    </el-container>

  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Tags from '@/components/Tag.vue'
import Guess from '@/components/Guess.vue'
import Rank from '@/components/RankList.vue'
import Search from '@/components/Search.vue'
import API from '@/components/api/index.js'
import Comment from '@/components/Comment.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Tags,
    Guess,
    Rank,
    Search,
    Comment,
  },
  data(){
    return {
      input:"",
       pageName: "烂樱桃_电影_用户中心",
       items:[],
       title:"",
       comments:null,
       textarea:"",
       input1:"",
       input2:"",
    }
  },
  metaInfo () {
      return {
        title: this.pageName,
      }
    },
    mounted () {

       var id = this.$router.history.current.params.id;
       this.getUser(id);

    },
    methods:{
      getUser(id){
        var vm = this;
        this.$jsonp(API.GET_USER,
          {
            id:id,
          }
        ).then(json => {
            vm.items = json.data;
            vm.comments = json.comments;
            console.log(json);
        }).catch(err => {

        })

      },
      uploadPic(){

      },
      submit(){

      }
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
.search{
  width: 96%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.nav{
  background-color: #fff;
}
.main{
  margin-top:10px;
  margin-left: 10px;
}
.aside{
  margin-left:10px;
  margin-top: 10px;
  background-color: #fff;
}
.aside-1{
  height: 600px;
  background-color: #eee;
  text-align: left;
}
.aside-0{
  height: 320px;
  background-color: #eee;

}
.aside-2{
  height: 760px;
  background-color: #eee;
  margin-top:20px;
  margin-bottom:20px;
  text-align: left;
}
.aside-2 a{
  text-decoration: none;
}

.aside-3{
  height: 1000px;
  background-color: #eee;
  margin-top:20px;
  margin-bottom:20px;
  text-align: left;
}
.aside-3 a{
  text-decoration: none;
}
.one-line{
overflow:hidden;white-space:nowrap;
}
.main a{
  text-decoration: none;
  color:#333;
}
.block{
  margin-bottom: 10px;
}

</style>
