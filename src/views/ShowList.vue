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
          <h2 style="text-align:left;">找到关于<span style="color:red;">{{title}}</span>的影片共<span style="color:red;">{{count}}</span>个:</h2>
          <el-row :gutter="24" style="min-height:1800px;">
            <div v-for="item in items">
              <a :href="item.url" target="_blank">
              <el-col :span="5">
                <img :src="item.pic" height="200px;"/>
              </el-col>
              <el-col :span="7" style="height:220px;text-align:left;">
                <h5 class="one-line" style="margin-top:15px;">【片名】{{item.title}}</h5>
                <p class="one-line">【导演】{{item.director}}</p>
                <p class="one-line">【地区】{{item.location}}</p>
                <p class="one-line">【上映时间】{{item.show_time}}</p>
              </el-col>
              </a>
            </div>
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
          <!-- <el-main class="aside-1">
            <h4>热门影评</h4>
          </el-main> -->


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
       pageName: "烂樱桃_搜索_电影",
       pic:"http://www.lanyintao.com./Uploads/20180824/181345.14992361_270X405X4_20180824_81643.jpg",
       items:[],
       title:this.$router.history.current.params.name,
       count:""
    }
  },
  metaInfo () {
      return {
        title: this.pageName
      }
    },
    mounted () {
      // setTimeout(() => {
      //   this.pageName = "loading"
      // }, 2000)
      this.getList()
    },
    methods:{

      getList(){
        var vm = this;
        this.$jsonp(API.SEARCH,
          {
            name:this.$router.history.current.params.name,
            page:this.$router.history.current.params.page
          }
        ).then(json => {
            vm.items = json.data,
            vm.count = json.pageinfo.totalRows
        }).catch(err => {

        })
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
