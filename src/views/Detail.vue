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
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <img :src="items.pic" style="width:300px;"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple" style="text-align:left;">
                <h1>{{items.title}}</h1>
                <p><b>导演:</b></p>
                <p style="background:#eee;padding:10px;">{{items.director}}</p>
                <p><b>演员:</b></p>
                <p style="background:#eee;padding:10px;">{{items.actors}}</p>
                <p><b>上映时间:</b></p>
                  <p style="background:#eee;padding:10px;">{{items.show_time}}</p>
                <p><b>地区:</b></p>
                <p style="background:#eee;padding:10px;">{{items.location}}</p>
                <p><b>bt链接:</b></p>
                <p style="background:#eee;padding:10px;word-wrap:break-word;word-break:break-all;">{{items.bt}}</p>
                <p><b>简介:</b></p>
                <p style="background:#eee;padding:10px;">{{items.summary}}</p>
              </div>
            </el-col>
          </el-row>
            <el-footer>
              <Footer/>
            </el-footer>
        </el-main>
        <el-aside class="aside">
          <el-main class="aside-0">
            <h4>影片分类</h4>
            <Tags/>
          </el-main>
          <el-main class="aside-3">
            <h4>猜你喜欢</h4>
            <Guess/>
          </el-main>
          <el-main class="aside-2">
            <h4>点击排行榜</h4>
            <Rank/>
          </el-main>



        </el-aside>

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

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Tags,
    Guess,
    Rank,
    Search,
  },
  data(){
    return {
      input:"",
       pageName: "烂樱桃_电影_详情",
       items:[],
       title:"",
       //pic:''
    }
  },
  metaInfo () {
      return {
        title: this.pageName+this.title,
      }
    },
    mounted () {

       var id = this.$router.history.current.params.id;
       this.getMovie(id);

    },
    methods:{
      getMovie(id){
        var vm = this;
        this.$jsonp(API.GETMOVIE,
          {
            id:id,
          }
        ).then(json => {
            vm.items = json.data;
            vm.title = json.data.title
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

</style>
