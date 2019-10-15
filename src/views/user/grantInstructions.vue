<template>
  <div id="grantInstructions">
    <header>
        <div @click='goBack'>
            <img src="../../assets/img/head_arrow.png" alt=""  class="head-left">
        </div>
      <span class="head-title">请君赐教</span>
      <span class="head-right" @click="shareWechat"> <img src="../../assets/img/common/forward.png" alt=""> </span>
    </header>
    <ul class="user-list">
      <routerLink tag="li" :to="{path:'/setUp/about'}">
        <p class="fl">关于我们</p>
        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
      </routerLink>
      <router-link :to="{path:'/user/help'}" tag='li' class="list-last">
        <p class="fl">帮助与反馈</p>
        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
      </router-link>
    </ul>
    <!-- 分享弹框 -->
    <mt-popup v-model="isShowShare" position='bottom'>
      <div class='share-list'>
        <div>
          <img src="../../assets/img/common/wx.png" alt="">
          <p>微信好友</p>
        </div>
        <div>
          <img src="../../assets/img/common/pyq.png" alt="">
          <p>朋友圈</p>
        </div>
        <div>
          <img src="../../assets/img/common/qq.png" alt="">
          <p>QQ好友</p>
        </div>
        <div>
          <img src="../../assets/img/common/wb.png" alt="">
          <p>微博</p>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShowShare: false
      }
    },
    methods: {
      //返回上一级
      goBack() {
        this.$router.go(-1);
      },
      //分享弹框
      shareWechat() {
        window.toShare();
      }
    },
    created() {

    }
  }
</script>
<style lang="scss">
  @import "../../assets/sass/common";
  @import "../../assets/sass/user/grantInstructions";
</style>