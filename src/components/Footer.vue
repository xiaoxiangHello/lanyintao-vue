<template>

  <div class="footer">
    <div class="decrote-line"></div>
    <h3>{{title}}</h3>
    <p>{{time}}</p>
    <p>京ICP备18008417号</p>
    <p>烂樱桃电影旨在为大家分享有趣的电影,若无意中侵犯了您的版权所有,我们将立即删除相关内容</p>
    <p>我们鼓励大家付费购买正版，有任何问题可以点击下面联系我们</p>
    <p><a :href="email" target="_blank">{{connect}}</a>|
      <a href="#" target="_blank">{{feedback}}</a></p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
  data(){
    return {
      title:"烂樱桃电影网",
      time:"2017-2018@COPYRIGHT",
      email:"mailto:xiaoxiangbao@hotmail.com",
      connect:"联系我们",
      feedback:"意见反馈",

    }
  },
  methods: {

  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  height: 190px;
  text-align: center;
  margin-top: 10%;
  border-top: solid 1px #e6e6e6;
  color:#606266;
}
.footer a{
  text-decoration: none;
  color:#606266;
}
</style>
