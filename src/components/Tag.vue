<template>
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
      tags:[{title:'支持国产', url:"#", id:"1"},
             {title:'欧美新片', url:"#", id:"2"},
             {title:'日韩新片', url:"#", id:"3"},
             {title:'东南亚', url:"#", id:"4"}],
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
