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
            <el-row style="padding-left:24px;">
              <el-col :span="6.5"><el-button>动作</el-button></el-col>
              <el-col :span="6.5"><el-button>喜剧</el-button></el-col>
              <el-col :span="6.5"><el-button>剧情</el-button></el-col>
              <el-col :span="6.5"><el-button>犯罪</el-button></el-col>
              <el-col :span="6.5"><el-button>惊悚</el-button></el-col>
              <el-col :span="6.5"><el-button>悬疑</el-button></el-col>
              <el-col :span="6.5"><el-button>科幻</el-button></el-col>
              <el-col :span="6.5"><el-button>爱情</el-button></el-col>
              <el-col :span="6.5"><el-button>音乐</el-button></el-col>
              <el-col :span="6.5"><el-button>儿童</el-button></el-col>
              <el-col :span="6.5"><el-button>家庭</el-button></el-col>
              <el-col :span="6.5"><el-button>动画</el-button></el-col>
              <el-col :span="6.5"><el-button>纪录</el-button></el-col>
              <el-col :span="6.5"><el-button>传记</el-button></el-col>
              <el-col :span="6.5"><el-button>历史</el-button></el-col>
            </el-row>
          </el-main>
          <el-main class="aside-2">
            <h4>猜你喜欢</h4>
            <el-row>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
              <p>【美女与野兽】2018-03-18 美国</p>
            </el-row>
          </el-main>
          <el-main class="aside-2">
          </el-main>
          <el-main class="aside-2">
          </el-main>
          <el-main class="aside-1">
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


export default {
  name: 'app',
  components: {
    MovieList,
    Focus,
    Header,
    Footer
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
}
.aside{
  margin-left:10px;
  margin-top: 10px;
  background-color: #fff;
}
.aside-1{
  height: 500px;
  background-color: #eee;
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
}
.tags{

}
</style>
