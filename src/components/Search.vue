<template>
  <el-input v-model="input_value" placeholder="想搜点什么？请输入电影名" ref="input_search" @keyup.enter.native="keys($event)"></el-input>
</template>

<script>
export default {
  name: 'Search',
  props: {
    msg: String,
    item: String,
  },
  data(){
    return {
      input_value: "",
    }
  },
  methods: {
    keys: function(ev){
      if(ev.keyCode == 13) {
        this.$router.push({
            name: 'showList',
            params:{
              name:this.input_value,
              page:1
            }
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
