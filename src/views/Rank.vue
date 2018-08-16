<template>
    <div class="module-title">
        <h1>排行榜板块</h1>
        <rank1 :rank1Arr="rank1Arr"></rank1>
    </div>
</template>
<script>
var titleDatas = [
  {
    type: "rank1",
    data: {
      id: "m_rank1",
      data:[
      {
        type: "win",
        title: "国内机场口碑红榜 TOP10",
        datas: []
      }, {
        type: "lose",
        title: "国内机场口碑黑榜 TOP10",
        datas: [{
            num: "1",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "2",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "3",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "4",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "5",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "6",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "7",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "8",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "9",
            name: "许振华",
            poll: "371237票"
        }, {
            num: "10",
            name: "许振华",
            poll: "371237票"
        }]
    }
      ]
    }
  }
];
import rank1 from "@/components/rank";
export default {
  components: {
    rank1,
  },
  created: function() {
    for (var i = 0; i < titleDatas.length; i++) {
      switch (titleDatas[i].type) {
        case "rank1":
          this.rank1Arr = titleDatas[i].data;
          // console.log(this.rank1Arr);
          break;
      }
    }
  },
  data() {
    return {
      rank1Arr: {}
    };
  }
};
</script>
<style lang="less" scoped>
@text-color: #fff;
@background-color: #008af5;

.module-title {
  h1 {
    line-height: 1rem;
    color: #333;
    font-size: 0.3rem;
    font-weight: bold;
  }
  h2 {
    line-height: 1rem;
    color: @text-color;
    background: @background-color;
    font-size: 0.28rem;
  }
}
</style>
