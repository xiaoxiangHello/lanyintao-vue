<template>
        <div :id="rank1Arr.id" class="m-rank1">
              <div  v-for="item in rank1Arr.data" :key="item.id" :class="[item.type=='win'? 'u-list1': 'u-list2']">
                  <h2 :class="[item.type=='win'? 'u-start-title': 'u-wh-title']">{{item.title}}</h2>
                  <div :class="[item.type=='win'? 'm-start-blk': 'm-whph-blk']">
                      <ul>
                          <li v-for="levelItem in item.datas" :key="levelItem.id" class="clearfix">
                              <span class="u-start-num">{{levelItem.num}}</span>
                              <strong class="u-start-name">{{levelItem.name}}</strong>
                              <span class="u-start-job">{{levelItem.poll}}</span>
                          </li>
                      </ul>
                  </div>
              </div>
        </div>
</template>

<script>
export default {
  name: 'rank1',
  props:{
    rank1Arr: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      msg: 'rank1'
    }
  }
}
</script>  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped> 
@white:#fff;    
@blk-bg:#f2eee3;
@result-text: #825632;
@result-bg:#ede4d8;
@result-font-size:.28rem;
@imgRoot: '//n.sinaimg.cn/finance/2018airport/pc/img/';
.bg(@name, @w, @h) {
  background: url('@{imgRoot}@{name}') no-repeat@w, @h;
}

.m-rank1{
    margin:0 auto;
    width: 1000px;
    .m-last-list {
        margin-top: 50px;
        padding: 30px;
        background: @blk-bg;
        box-shadow: 0 0 15px #b0b0b0;
    }
    .u-list1,
    .u-list2 {
        padding-top: 10px;
        width: 460px;
        background: @result-bg;
    }
    .u-list1 {
        float: left;
    }
    .u-list2 {
        float: right;
    }
    .u-start-title,
    .u-wh-title {
        padding-bottom: 14px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: @white;
        font-size: @result-font-size;
        font-weight: normal;
    }
    .u-start-title {
       .bg("pc_pic02.png", center,center);
    }
    .u-wh-title {
       .bg("pc_pic03.png",
        center ,center);
    }
    .m-start-blk,
    .m-whph-blk {
        padding: 18px 25px 20px;
    }
    .m-start-blk li,
    .m-whph-blk li {
        margin-top: 14px;
        border-bottom: 1px dashed #d0bfae;
        padding-left: 25px;
        height: 26px;
        line-height: 26px;
        color: @result-text;
    }
    .m-start-blk li {
       .bg("pc_pic04.png",
        12px, center)
    }
    .m-whph-blk li {
       .bg("pc_pic05.png",
        12px, center)
    }
    .u-start-num {
        float: left;
        margin-right: 38px;
        width: 30px;
        text-align: right;
        font-size: @result-font-size;
    }
    .u-start-name {
        float: left;
        font-size: @result-font-size;
    }
    .u-start-job {
        float: right;
        font-size: @result-font-size;
    }
}
</style>
