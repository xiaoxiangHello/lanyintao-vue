<template>
  <div id="app">

    <el-container>
      <el-header class="nav">
        <Header/>
      </el-header>
      <div class="search">
        <el-input v-model="input" placeholder="想搜点什么？请输入电影名"></el-input>
      </div>
      <el-container>
        <el-main class="main">
            <focus/>
            <MovieList title="最新电影" id="1" movie_type="0"/>
            <MovieList title="国产电影" id="2" movie_type="1"/>
            <MovieList title="欧美新片" id="3" movie_type="2"/>
            <MovieList title="日韩新片" id="4" movie_type="3"/>
            <MovieList title="东南亚" id="5" movie_type="4"/>
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
          <el-main class="aside-1">
            <h4>热门影评</h4>
          </el-main>


        </el-aside>

      </el-container>

    </el-container>

  </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue'
import Focus from '@/components/Focus.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Tags from '@/components/Tag.vue'
import Guess from '@/components/Guess.vue'
import Rank from '@/components/RankList.vue'


export default {
  name: 'app',
  components: {
    MovieList,
    Focus,
    Header,
    Footer,
    Tags,
    Guess,
    Rank,
  },
  data(){
    return {
      input:"",
       pageName: 'loading'
    }
  },
  metaInfo () {
      return {
        title: this.pageName
      }
    },
    mounted () {
      setTimeout(() => {
        this.pageName = 'async'
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

</style>
