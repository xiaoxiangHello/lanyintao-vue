<template>
  <div class="list">
     <h2>{{title}}<font class="more"><a :href="moremovies">【更多】</a></font></h2>
     <div class="decrote-line"></div>
     <el-row :gutter="20">
       <el-col :span="6" v-for="item in items">
         <div class="grid-content bg-purple">
           <a :href="item.url">
             <img class="lazyImg" :data-src="item.pic" />
             <p class="movie-title">{{item.title}}</p>
           </a>
         </div>
       </el-col>
   </el-row>
  </div>
</template>

<script>
import API from './api/index.js'
export default {
  name: 'MovieList',
  components:{
    API
  },
  props: {
    title:String,
    url:String,
    id:String,
    movie_type:String,
  },
  data(){
    return{
      moremovies:"",
      items:[],
      latest: [],
      main_land: [],
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    getList(){

      console.log(API.COMMON_API);
      var vm = this;
      this.$jsonp(API.COMMON_API,
        {
          type:this.movie_type,
          page:1
        }
      ).then(json => {
          console.log(json);
          vm.items = json.data
      }).catch(err => {
        console.log(err)
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
    height:190px;
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
