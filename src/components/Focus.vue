<template>
  <el-carousel :interval="4000" type="card" >
    <el-carousel-item v-for="item in items" >
    <router-link :to="{path:'/detail/id/'+item.article_id}" target="_blank">
      <img :src="item.url" height="300px"/>
    </router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import API from './api/index.js'
export default {
  name: 'Focus',
  props: {
    msg: String,
    item: String
  },
  data(){
    return {
      activeIndex:'1',
      items:[],
    }
  },
  mounted(){
    this.getList();
  },
  methods:{
    getList(){
      var vm = this;

      this.$jsonp(API.FOCUS,{}
      ).then(json => {
         vm.items = json.data;

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

</style>
