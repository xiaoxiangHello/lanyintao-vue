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
                  <img :src="items.pic" style="width:300px;margin-bottom:20px;"/>
                  <el-row>
                    <el-col :span="8">
                      <p style="line-height:0px;"><b>剧情</b></p>
                    </el-col>
                    <el-col :span="16">
                      <el-rate
                        v-model="value1"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="8">
                      <p style="line-height:0px;"><b>特效</b></p>
                    </el-col>
                    <el-col :span="16">
                      <el-rate
                        v-model="value2"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <p style="line-height:0px;"><b>演员阵容</b></p>
                    </el-col>
                    <el-col :span="16">
                      <el-rate
                        v-model="value3"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <h4>总共有 {{count}} 个评分</h4>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple" style="text-align:left;">
                  <h1 style="font-size:30px;">{{items.title}}</h1>
                  <p><b>导演:</b></p>
                  <p style="background:#eee;padding:10px;line-height:25px;">{{items.director}}</p>
                  <p><b>演员:</b></p>
                  <p style="background:#eee;padding:10px;line-height:25px;">{{items.actors}}</p>
                  <p><b>上映时间:</b></p>
                    <p style="background:#eee;padding:10px;">{{items.show_time}}</p>
                  <p><b>地区:</b></p>
                  <p style="background:#eee;padding:10px;">{{items.location}}</p>
                  <p><b>bt链接:</b></p>
                  <p style="background:#eee;padding:10px;word-wrap:break-word;word-break:break-all;line-height:20px;color:#333;">{{items.bt}}</p>
                  <p><b>简介:</b></p>
                  <p style="background:#eee;padding:10px;text-indent:20px;line-height:25px;">{{items.summary}}</p>
                </div>
              </el-col>
            </el-row>
            <div style="height:50px;border-top:1px solid #eee;margin-top:60px;"></div>
            <Comment v-on:childByValue="postScore"/>
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
import Comment from '@/components/Comment.vue'
import Location from '@/components/Location.vue'

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
    Location,
  },
  data(){
    return {
      input:"",
       pageName: "烂樱桃_电影_详情_",
       items:[],
       title:"",
       value1:0.0,
       value2:0.0,
       value3:0.0,
       count:"",
       //pic:''
    }
  },
  metaInfo () {
      return {
        title: this.pageName+this.title+"_"+this.items.show_time,
      }
    },
    mounted () {

       var id = this.$router.history.current.params.id;
       this.getMovie(id);
       this.getScore(id);

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

      },
      getScore(id){
        var vm = this;
        this.$jsonp(API.MOVIE_SCORE,
          {
            id:id,
          }
        ).then(json => {
          this.value1 = 0;
          vm.value2 = 0;
          vm.value3 =  0;
          vm.count = 0;

          if(json.count != 0){
            vm.value1 = parseFloat(json.data.story_score);
            vm.value2 = parseFloat(json.data.effect_score);
            vm.value3 = parseFloat(json.data.actor_score);
            vm.count = json.count;

          }
        }).catch(err => {

        })
      },
      postScore:function(postScore){
        getScore(this.$router.history.current.params.id);
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
