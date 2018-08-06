<template>
  <div id="app">

    <el-container>
      <el-header class="nav">
        <Header/>
      </el-header>
      <el-container>
        <el-main class="main">
            <focus msg="Welcome to Your Vue.js App"/>
            <MovieList title="最新电影" id="1"/>
            <MovieList title="欧美新片" id="2"/>
            <MovieList title="日韩新片" id="3"/>
            <MovieList title="东南亚" id="4"/>
            <el-footer>
              <Footer/>
            </el-footer>
        </el-main>
        <el-aside class="aside">
          <el-main class="aside-1">
          </el-main>
          <el-main class="aside-2">
          </el-main>
          <el-main class="aside-2">
          </el-main>
          <el-main class="aside-2">
          </el-main>

        </el-aside>

      </el-container>

    </el-container>

  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'
import Focus from './components/Focus.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


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
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.nav{
  background-color: #fff;
}
.main{
  min-height: 800px;
  margin-top:10px;
}
.aside{
  margin-left:10px;
  margin-top: 30px;
  background-color: #fff;
}
.aside-1{
  height: 200px;
  background-color: #eee;
}
.aside-2{
  height: 600px;
  background-color: #eee;
  margin-top:20px;
}

</style>
