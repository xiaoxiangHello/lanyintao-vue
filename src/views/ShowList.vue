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
          <h2 style="text-align:left;">找到关于[黄金花]共<span style="color:red;">2</span>个:</h2>
          <el-row :gutter="24">
            <el-col :span="6">
              <div class="grid-content bg-purple" style="border:0px solid #eee;height:220px;margin-left:30px;">
                <img :src="pic" style="height:200px;float:right;"/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" style="borde《》:1px solid #eee;height:220px;text-align:left;">
                  <h2 style="margin-top:10px;">黄金花</h2>
                  <p><b>导演:</b></p>
                  <p><b>演员:</b></p>
                  <p><b>上映时间:</b></p>
                  <p><b>地区:</b></p>
                  <p><b>浏览量:</b></p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" style="height:220px;margin-left:30px;">
                <img :src="pic" style="height:200px;float:right;"/>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" style="border:0px solid #eee;height:220px;text-align:left;">
                  <h2 style="margin-top:10px;">黄金花</h2>
                  <p><b>导演:</b></p>
                  <p><b>演员:</b></p>
                  <p><b>上映时间:</b></p>
                  <p><b>bt:</b></p>
                  <p><b>简介:</b></p>
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


export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Tags,
    Guess,
    Rank,
  },
  data(){
    return {
      input:"",
       pageName: '烂樱桃_搜索_电影',
       pic:"http://www.lanyintao.com./Uploads/20180824/181345.14992361_270X405X4_20180824_81643.jpg",
    }
  },
  metaInfo () {
      return {
        title: this.pageName
      }
    },
    mounted () {
      setTimeout(() => {
        this.pageName = pageName
      }, 2000)
      this.getList()
    },
    methods:{
      getList(){
        var vm = this;
        this.$jsonp(API.SEARCH,
          {
            name:this.name,
            page:1
          }
        ).then(json => {
            vm.items = json.data
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
