<template>
  <div id="downApp">
    <header>
      <span class="head-title">别等等APP下载</span>
    </header>
    <img src="../../assets/img/common/about_logo.png" alt />
    <p class="text">爱人·别等等</p>
    <p class="down" @click="downApp">免费下载APP</p>
    <div class="guid" v-if="isWeChat">
      <img src="../../assets/img/common/arrow.png" alt />
      <div>
        <p>
          <span>1</span><span>点击右上角功能按钮</span>
        </p>
        <p>
          <span>2</span><span>选择“在浏览器中打开”</span>
        </p>
        <p>
          <span>3</span><span>在浏览器打开的网页下载APP</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        type: "ios", //手机类型
        url: "", //下载地址
        isWeChat: false,//是否微信打开
        titleArr:[
           {main:'打开【设置】',sub:''},
           {main:'打开【通用】',sub:''},
           {main:'进入【设备管理】',sub:''},
           {main:'找到相应选项',sub:'【Zhuhai Heng****】'},
           {main:'进入页面选择',sub:'【信任Zhuhai Heng****】'},
           {main:'点击【信任】',sub:'回到桌面重新打开别等等'}],
    };
  },
  methods: {
    //下载app
    downApp() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            
        } else if (/(Android)/i.test(navigator.userAgent)) {
            
        }
    },
    //检测是否微信登录
    isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            this.isWeChat = true;
        }else{
            this.isWeChat = false;
        }
    }
  },
  created(){
      this.isWeiXin();
  }
};
</script>

<style lang="scss">
#downApp {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  > header {
    border-bottom: 1px solid #ddd;
  }
  > img {
    width: 130px;
    height: 130px;
    display: block;
    margin: 100px auto 0;
  }
  > .text {
    font-size: 24px;
    color: #999999;
    line-height: 1;
    margin: 40px 0;
    text-align: center;
  }
  > .down {
    width: 250px;
    height: 40px;
    background-color: #ff5656;
    border-radius: 10px;
    color: #fff;
    margin: 60px auto 0;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
  }
  > .guid {
    position: fixed;
    top: 48px;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.8);
    z-index: 10001;
    > img {
      width: 2rem;
      position: absolute;
      top: 1.17333rem;
      right: 0.8rem;
    }
    >div{
        width: 70%;
        margin: 150px auto 0;
    }
    p {
      color: #ffffff;
      font-size: 16px;
      font-weight: 500;
      margin-top: 30px;
      line-height: 30px;
      > span:first-child {
        margin-right: 20px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #ad7600;
        border: 1px solid rgba(99, 86, 68, 0.61);
      }
      >span{
          display: inline-block;
          vertical-align: middle;
      }
    }
  }
}
</style>