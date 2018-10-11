<template>
  <el-row  :gutter="20" >
    <el-col :span="8" v-for="item in tags" style="margin-top:8px;">
        <router-link :to="{path:'/ShowList/pos/'+item.loc+'/p/1'}" target="_blank">
          {{item.loc}}
        </router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Location',
  props: {
    msg: String,
  },
  data(){
    return {
      activeIndex:'1',

      tags:[{loc:"中国"},
{loc:"中国香港"},
{loc:"中国台湾"},
{loc:"美国"},
{loc:"加拿大"},
{loc:"巴西"},
{loc:"俄罗斯"},
{loc:"印度"},
{loc:"南非"},
{loc:"法国"},
{loc:"英国"},
{loc:"马来西亚"},
{loc:"匈牙利"},
{loc:"德国"},
{loc:"意大利"},
{loc:"日本"},
{loc:"比利时"},
{loc:"波兰"},
{loc:"泰国"},
{loc:"澳大利亚"},
{loc:"爱尔兰"},
{loc:"卢森堡"},
{loc:"瑞典"},
{loc:"马耳他"},
{loc:"西班牙"},
{loc:"瑞士"},
{loc:"印度尼西亚"}],
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
