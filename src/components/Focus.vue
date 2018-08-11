<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Focus',
  props: {
    msg: String,
    item: String
  },
  data(){
    return {
      activeIndex:'1',
      items:[{title:'支持国产', url:"#", id:"1"},
             {title:'欧美新片', url:"#", id:"2"},
             {title:'日韩新片', url:"#", id:"3"},
             {title:'东南亚', url:"#", id:"4"}],
      picUrl:"http://www.lanyintao.com/Public/img/Cherry.png",
    }
  },
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
