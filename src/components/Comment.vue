<template>
<div style="text-align:left;">
  <h1>打个分吧</h1>
  <div style="border:1px solid #eee;padding:10px;border-radius:10px;margin-bottom:20px;">
  <el-row :gutter="20">
    <el-col :span="10">
      <p style="line-height:0px;"><b>剧情</b></p>
    </el-col>
    <el-col :span="10">
      <el-rate
        v-model="value1"
        show-score
        text-color="#ff9900"
        score-template="{value}">
      </el-rate>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="10">
      <p style="line-height:0px;"><b>特效</b></p>
    </el-col>
    <el-col :span="10">
      <el-rate
        v-model="value2"
        show-score
        text-color="#ff9900"
        score-template="{value}">
      </el-rate>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="10">
      <p style="line-height:0px;"><b>演员阵容</b></p>
    </el-col>
    <el-col :span="10">
      <el-rate
        v-model="value3"
        show-score
        text-color="#ff9900"
        score-template="{value}">
      </el-rate>
    </el-col>
  </el-row>
</div>
<el-button v-on:click="submitScore">提交</el-button>
  <h1 style="margin-top:30px;">留下发言吧</h1>
  <el-input
  type="textarea"
  :rows="3"
  placeholder="请输入内容"
  v-model="textarea">
  </el-input>
  <el-button style="margin-top:10px;" v-on:click="submitScore">提交</el-button>
    <div style="height:50px;border-top:1px solid #eee;margin-top:60px;"></div>
  <h1 style="text-align:left;margin-top:10px;">精彩评论</h1>
  <el-row :gutter="24" class="row">
    <div v-for="(item,key) in items">
    <el-col :span="3" style="height:130px;">
      <img :src="item.littlepic" width="50px;">
      <p>{{item.nickname}}</p>
    </el-col>
    <el-col :span="20" style="text-align:left;height:130px;">
      <p>{{item.content}}</p>
      <p style="color:#606266a6;">{{item.pubtime}}</p>
    </el-col>
    </div>
  </el-row>
</div>
</template>

<script>
import API from './api/index.js'
export default {
  name: 'Comment',
  props: {
    msg: String,
    item: String,
  },
  data(){
    return {
      items:[],
      value1:null,
      value2:null,
      value3:null,
      textarea:"",
    }
  },
  mounted(){
    var id = this.$router.history.current.params.id;
    this.getList(id)
  },
  methods:{
      getList(id){
        var vm = this;
        this.$jsonp(API.MOVIE_COMMENT,{
          id:id
        }
        ).then(json => {
            vm.items = json.data
        }).catch(err => {
          // console.log(err)
        })
      },

      submitScore(){
         this.$jsonp(API.POST_SCORE, {
            id:this.$router.history.current.params.id,
            story_score:this.value1,
            effect_score:this.value2,
         }).then(json => {
            alert(json.msg);
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

</style>
