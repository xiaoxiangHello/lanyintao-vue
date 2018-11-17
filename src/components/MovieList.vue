<template>
  <div class="list">
     <h2>{{title}}
       <font class="more" v-if="movie_type != '0'">
       <router-link :to="listurl">【更多】</router-link>
       </font>
     </h2>
     <div class="decrote-line"></div>

     <el-row>

       <el-col :span="6" v-for="item in items">
         <div class="grid-content bg-purple">
            <router-link :to="{path:'/home/index/details/id/'+item.id}" target="_blank">
             <img :data-src="item.pic" class="movie-item lazyImg"/>
             <p class="movie-title"><b>{{item.title}}</b></p>
            </router-link>
         </div>
       </el-col>


      </el-row>
  </div>
</template>

<script>
import API from './api/index.js';
export default {
  name: 'MovieList',
  components:{
    API
  },
  props: {
    title:String,
    id:String,
    movie_type:String,
    listurl:String,
  },
  data(){
    return{
      moremovies:"",
      items:[],
      latest: [],
      main_land: [],
      url:this.listurl,
      counts:[1,2,3,4],
    }
  },
  mounted(){

    this.getList()
  },
  methods:{
    getList(){
      var vm = this;
      this.$jsonp(API.COMMON_API,
        {
          type:this.movie_type,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  text-align: left;
}
.list a{
  text-decoration: none;
  color:#333;
}
.decrote-line{
  border-bottom: solid 1px #e6e6e6;
  width: 100%;
}
.more{
  font-size: 8px;
}
.el-row {
    margin-bottom: 20px;
    margin-top:20px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    text-align: center;
  }
  .row-bg {
    padding: 5px 0;
    background-color: #f9fafc;
  }
  .movie-item{
    height:220px;
    width: 92%;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;
  }
  .movie-title{
    margin-top: 0px;
  }
  .lazyImg{
    height:200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
