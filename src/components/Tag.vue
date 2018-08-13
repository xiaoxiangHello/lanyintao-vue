<template>
  <el-row style="padding-left:24px;">
    <el-col :span="6.5" v-for="item in tags" :key="item.id">
      <el-button class="tag">
        <a :href="item.url" target="_blank">{{item.title}}</a>
      </el-button>
    </el-col>
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
      tags:[{title:'动作', url:"", id:"1"},
            {title:'喜剧', url:"#", id:"2"},
            {title:'剧情', url:"#", id:"3"},
            {title:'犯罪', url:"#", id:"4"},
            {title:'惊悚', url:"#", id:"5"},
            {title:'悬疑', url:"#", id:"6"},
            {title:'科幻', url:"#", id:"7"},
            {title:'爱情', url:"#", id:"8"},
            {title:'音乐', url:"#", id:"9"},
            {title:'儿童', url:"#", id:"10"},
            {title:'家庭', url:"#", id:"11"},
            {title:'动画', url:"#", id:"12"},
            {title:'纪录', url:"#", id:"13"},
            {title:'传记', url:"#", id:"14"},
            {title:'历史', url:"#", id:"15"},
      ],
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

</style>
