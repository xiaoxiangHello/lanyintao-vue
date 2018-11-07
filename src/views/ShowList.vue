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
          <h2 style="text-align:left;">找到关于<span style="color:red;">{{title}}</span>的影片共<span style="color:red;">{{total}}</span>个:</h2>

          <el-row :gutter="24" style="min-height:1800px;">
            <div v-for="item in items" style="height:200px;border:1px solid #eee;padding-top:20px;" :key="item.id">
              <router-link :to="{path:'/home/index/details/id/'+item.id}" target="_blank">
              <el-col :span="8">
                 <img :data-src="item.pic" class="movie-item lazyImg" style="height:180px;width:120px;"/>
              </el-col>
              <el-col :span="12" style="height:200px;text-align:left;">
                <h5 class="one-line" style="margin-top:15px;">【片名】{{item.title}}</h5>
                <p class="one-line">【导演】{{item.director}}</p>
                <p class="one-line">【演员】{{item.actors}}</p>
                <p class="one-line">【地区】{{item.location}}</p>
                <p class="one-line">【上映时间】{{item.show_time}}</p>
              </el-col>
              </router-link>
            </div>
            <el-pagination
              style="margin-top:30px;"
              background
              layout="prev, pager, next"
              :current-page="curPage"
              :total="total"
              @current-change="handleCurrentChange"
              >
            </el-pagination>
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
          <el-main class="aside-0" style="margin-top:20px;">
            <h4>影片地区</h4>
            <Location/>
          </el-main>
          <el-main class="aside-3">
            <h4>猜你喜欢</h4>
            <Guess/>
          </el-main>
          <el-main class="aside-2">
            <h4>点击排行榜</h4>
            <Rank/>
          </el-main>
          <!-- <el-main class="aside-2">
            <h4>热门影评</h4>
            <CommentRank />
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
// import Page from '@/components/Page.vue'
import API from '@/components/api/index.js'
import CommentRank from '@/components/CommentRank.vue'
import Location from '@/components/Location'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Tags,
    Guess,
    Rank,
    Search,
    CommentRank,
    Location
    // Page,
  },
  data(){
    return {
      input:"",
       pageName: "烂樱桃_搜索_电影",
       pic:"",
       items:[],
       title:"",
       count:"",
       total:0,
       curPage:0,
       pageSize:0,
    }
  },
  metaInfo () {
      return {
        title: this.pageName+this.title,
      }
    },
    mounted () {
      // setTimeout(() => {
      //   this.pageName = "loading"
      // }, 2000)
      var name = this.$router.history.current.params.name;
      var page = this.$router.history.current.params.page;
      var type = this.$router.history.current.params.type;
      var local = this.$router.history.current.params.local;
      var pos = this.$router.history.current.params.pos;


      if (name != null) {
        this.getList(name, page)
      }

      if (type != null) {
        this.getTypeList(type, page)
      }

      if (local != null) {
        this.getLocalList(local, page)
      }

      if (pos != null) {
        this.getPosList(pos, page)
      }

    },
    methods:{

      getList(name, page){
        var vm = this;
        this.$jsonp(API.SEARCH,
          {
            name:name,
            p:page
          }
        ).then(json => {
            vm.items = json.data;
            vm.total = json.pageinfo.totalRows*1;
            vm.title = this.$router.history.current.params.name;
        }).catch(err => {

        })
      },
      getTypeList(type, page){
        var vm = this;
        this.$jsonp(API.SEARCH,
          {
            type:type,
            p:page
          }
        ).then(json => {
            vm.items = json.data;
            vm.total = json.pageinfo.totalRows*1;
            vm.title = this.$router.history.current.params.type;

        }).catch(err => {

        })
      },
      getPosList(pos, page){
        var vm = this;
        this.$jsonp("http://www.lanyintao.com/home/MovieList/apiGetPos",
          {
            pos:pos,
            p:page
          }
        ).then(json => {
            vm.items = json.data;
            vm.total = json.pageinfo.totalRows*1;
            vm.title = this.$router.history.current.params.pos;
        })
      },
      getLocalList(local, page){
        var vm = this;
        this.$jsonp(API.SEARCH,
          {
            local:local,
            p:page
          }
        ).then(json => {
            vm.items = json.data;
            vm.total = json.pageinfo.totalRows*1;
            //vm.title = this.$router.history.current.params.local;
            // console.log(this.$router.history.current.params.local);
            switch(this.$router.history.current.params.local){
              case "1":
                vm.title = "欧美新片";
                break;
              case "2":
                vm.title = "日韩新片";
                break;
              case "3":
                vm.title = "东南亚";
                break;
              case "4":
                vm.title = "国产电影";
                break;
              default:
                break;
            }
        }).catch(err => {

        })
      },
      //页码变更
      handleCurrentChange: function(val) {
          this.curPage = val;
          var type = this.$router.history.current.params.type;
          var name = this.$router.history.current.params.name;
          var local = this.$router.history.current.params.local;
          var pos = this.$router.history.current.params.pos;

          if (type != null){
            this.getTypeList(type, this.curPage);
          } else if (name != null){
            this.getList(name, this.curPage);
          } else if (local != null){
            this.getLocalList(local, this.curPage);
          } else if (pos != null){
            this.getPosList(pos, this.curPage);
          }

          // this.loadData(this.criteria, this.curPage, this.pagesize);
      },
    },
    watch:{
      $route(to, from){

        if (to.params.name != null){
          this.getList(to.params.name, to.params.page);
          this.title = to.params.name;
        }

        if (to.params.type != null){
          this.getTypeList(to.params.type, to.params.page);
          this.title = to.params.type;
        }

        if (to.params.local != null){
          this.getLocalList(to.params.local, to.params.page);
        }

        if(to.params.pos != null){
          this.getPosList(to.params.pos, to.params.page);
        }

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
