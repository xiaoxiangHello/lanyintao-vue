<template>
  <el-row :gutter="24" class="row">
    <div v-for="item in items">
      <el-col :span="12">
        <div>
          <img class="lazyImg" :data-src="item.pic" height="160px;"/>
          <p style="margin-top:0px;"><a :href="item.url">{{item.title}}</a></p>
        </div>
      </el-col>

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
</style>
