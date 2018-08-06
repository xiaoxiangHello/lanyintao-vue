<template>
  <div class="list">
     <h2>{{title}}<font class="more"><a :href="moremovies">【更多】</a></font></h2>
     <div class="decrote-line"></div>
     <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    title:String,
    url:String,
    id:String
  },
  data(){
    return{
      moremovies:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  text-align: left;
  height: 400px;
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

</style>
