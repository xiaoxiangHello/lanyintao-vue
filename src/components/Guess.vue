<template>
  <el-row :gutter="24" class="row">
    <div v-for="item in items" style="border:1px solid #eee;">
      <router-link :to="{path:'/detail/id/'+item.id}" target="_blank">
      <el-col :span="10">
        <img :src="item.pic" height="160px;" width="110px;"/>
      </el-col>
      <el-col :span="14" style="height:170px;text-align:left;overflow:hidden;white-space:nowrap;">
        <h5 style="margin-top:15px;">{{item.title}}</h5>
        <p>{{item.director}}</p>
        <p>{{item.location}}</p>
        <p>{{item.show_time}}</p>
      </el-col>
    </router-link>
    </div>
  </el-row>
</template>

<script>
import API from './api/index.js'
export default {
  name: 'Guess',
  components:{
    API
  },
  props: {
    msg: String,
    item: String
  },
  data(){
    return {
      items:[],
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
      getList(){
        var vm = this;
        this.$jsonp(API.GUESS,{}
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .tag a{
    text-decoration: none;
    color:#333;
  }
  .row{
    text-align:center;
  }
  .row a{
    text-decoration: none;
    color:#333;
  }
  .one-line{
  overflow:hidden;white-space:nowrap;
  }
</style>
