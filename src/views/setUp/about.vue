<template>
  <div id="about">
    <header>
        <div  @click='goBack'>
            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
        </div>
      <span class="head-title">关于我们</span>
    </header>
    <div class="about-pic">
      <img src="../../assets/img/about_logo.png" alt />
      <p class="about-name">别等等</p>
      <p class="about-number">version{{version}}</p>
    </div>
    <div class="about-text">
      <p>生命是最大的一次性消费品</p>
      <p>因为我们只活一次</p>
      <p>如果我们活了这一生</p>
      <p>却不了解这个自己</p>
      <p>岂不是辜负了这仅有一次的人生</p>
      <p>生而为人，能够自知、自爱、爱人</p>
      <p>是一件多么幸运的事情</p>
      <p>大雨文化就致力于做出来一款</p>
      <p>帮助人付出爱、感受幸福</p>
      <p>遇见更好自己的app工具而激动不已</p>
    </div>
    <div class="about-btn">
      <div @click="update">版本更新{{version}}</div>
      <p class="copyright">大雨文化版权所有</p>
    </div>
       <mt-popup v-model="isShowRemind">
        <div class="frame">
            <div class="frame-pic">
                <img src="../../assets/img/about_pic.png" alt="">
            </div>
            <p class="frame-text">全新界面，更多精彩活动
            </p>
            <p class="frame-text">
                真爱粉快来更新吧~
            </p>
            <div class="frame-btn">
                <div @click="shutDown">以后再说</div>
                <div class="line"></div>
                <div class="update">立即更新</div>
            </div>
        </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowRemind: false,//是否开启弹窗
      type: 'ios',//手机类型
      version: '1.0.0',//版本号
    };
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //关闭弹框
    shutDown() {
      this.isShowRemind = false;
    },
    //检查更新
    update() {
      let data = {
        "sourceType": this.$user.sourceType,
        "userName": this.$user.userName,
      }
      this.$http.post('versionCheck',data,this.callbackversionCheck)
      
    },
    //检查更新的回调
    callbackversionCheck(res){
      let version = '';
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        version = res.data.iosNo;
      } else if (/(Android)/i.test(navigator.userAgent)) {
        version = res.data.androidNo;
      }
      if(this.version == version){
        this.$toast({message: '已是最新版本',duration: 3000});
      }else{
        this.isShowRemind = true;
      }
    }
  },
  created() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      this.type = 'ios';
      this.version = '1.0.0';
    } else if (/(Android)/i.test(navigator.userAgent)) {
      this.type = 'android';
      this.version = '1.0.1';
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/sass/common";
@import "../../assets/sass/setUp/about";
</style>