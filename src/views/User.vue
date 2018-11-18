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
              <div style="height:200px;border:1px solid #eee;background:#eee;">
              <el-col :span="8" style="margin-top:30px;">
                 <img :src="items.littlepic" style="float:right;width:120px;height:120px;"/>
              </el-col>
              <el-col :span="12" style="text-align:left;margin-top:45px;margin-left:0px;">
                  <h1>{{items.nickname}}</h1>
                  <p>{{items.summary}}</p>
                  <router-link :to="{path:'/useredit/id/'+items.userid}" target="_blank"><p>[编辑信息]</p></router-link>
              </el-col>
            </div>
            </el-row>
            <div style="height:50px;border-top:1px solid #eee;margin-top:60px;"></div>
            <h1 style="text-align:left;">我的动态</h1>
            <el-row :gutter="26">
              <div v-if="comments !== null">
                <div v-for="comment in comments" >
                  <div style="height:130px;border:1px solid #eee;background:#eee;margin-top:10px;">
                  <router-link :to="{path:'/home/index/details/id/'+comment.movieid}" target="_blank">
                  <el-col :span="8" style="margin-top:35px;border-right:1px solid rgba(51, 51, 51, 0.29);text-align:right;">
                     <h1>{{comment.pubtimeday}}</h1>
                     <p>{{comment.pubtimehour}}</p>
                  </el-col>
                  <el-col :span="10" style="margin-top:40px;text-align:left;margin-left:30px;">
                      <h1>对《{{comment.moviename}}》发表了评论</h1>
                      <p>{{comment.content}}</p>
                  </el-col>
                      </router-link>
                  </div>
                </div>
              </div>
              <div v-else>
                <div  style="height:150px;border:1px solid #eee;background:#eee;">
                  <p style="margin-top:70px;">还没有动态，快去互动吧</p>
                </div>
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
       comments:[],
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
        }).catch(err => {

        })

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
