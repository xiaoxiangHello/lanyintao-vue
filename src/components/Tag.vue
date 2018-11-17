<template>
  <el-row style="padding-left:24px;">
    <el-col :span="6.5" v-for="item in tags" :key="item.id">
      <router-link :to="item.url">
      <el-button class="tag">
        {{item.title}}
      </el-button>
      </router-link>
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
      tags:[{title:'动作', url:"/ShowList/type/动作/p/1", id:"1"},
            {title:'喜剧', url:"/ShowList/type/喜剧/p/1", id:"2"},
            {title:'冒险', url:"/ShowList/type/冒险/p/1", id:"3"},
            {title:'犯罪', url:"/ShowList/type/犯罪/p/1", id:"4"},
            {title:'惊悚', url:"/ShowList/type/惊悚/p/1", id:"5"},
            {title:'悬疑', url:"/ShowList/type/悬疑/p/1", id:"6"},
            {title:'科幻', url:"/ShowList/type/科幻/p/1", id:"7"},
            {title:'爱情', url:"/ShowList/type/爱情/p/1", id:"8"},
            {title:'音乐', url:"/ShowList/type/音乐/p/1", id:"9"},
            {title:'儿童', url:"/ShowList/type/儿童/p/1", id:"10"},
            {title:'家庭', url:"/ShowList/type/家庭/p/1", id:"11"},
            {title:'动画', url:"/ShowList/type/动画/p/1", id:"12"},
            {title:'纪录', url:"/ShowList/type/纪录/p/1", id:"13"},
            {title:'传记', url:"/ShowList/type/传记/p/1", id:"14"},
            {title:'历史', url:"/ShowList/type/历史/p/1", id:"15"},
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
