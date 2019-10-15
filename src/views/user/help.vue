<template>
  <div id="help">
    <header>
        <div @click='goBack'>
            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
        </div>
      <span class="head-title">帮助与反馈</span>
    </header>
    <div class="content">
      <form>
        <div class="title">
          <textarea
            name="title"
            id="title"
            placeholder="输入您要反馈的内容"
            v-model="identitySign"
            maxlength="300"
            @input="descInput"
          ></textarea>
          <p class="user-num" :class='remnant==0?"active":""'>
            <span>{{remnant}}</span>/300
          </p>
        </div>
        <!-- 上传图片 -->
        <div class="pic">
          <div class="add-pic">
            <div v-for="(item,index) in list" :key="index">
              <img :src="item.pic" alt />
              <div class="cancle" @click="deletePic">
                <img src="../../assets/img/solutionStore/cancel.png" alt />
              </div>
            </div>
          </div>
          <div class="add">
            <img src="../../assets/img/solutionStore/add.png" alt />
            <p>添加照片</p>
            <input type="file" @change="uploadFile($event)" />
          </div>
        </div>
        <div class="btn" @click="send">发送</div>
      </form>
    </div>
    <div class="help-bottom">
      <div class="help-emil">
        <div>
          <img src="../../assets/img/help_emil.png" alt />
          <span>邮箱：kefu@aiziji2019.com</span>
        </div>
        <div>
          <img src="../../assets/img/help_iphone.png" alt />
          <span>电话：400-623-0535</span>
        </div>
      </div>
      <router-link class="help-btn" :to="{path:'/user/problem'}" tag="div">常见问题</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      remnant: 0, //限制输出字数
      identitySign: "", // textarea内容
      list: [] // 图片列表
    };
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //限制输入字数
    descInput() {
      let txtVal = this.identitySign.length;
      this.remnant = 300 - txtVal;
    },
    //删除当前选择图片
    deletePic(index) {
      this.list.splice(index, 1);
    },
    //发送意见反馈
    send() {
      if (!this.identitySign && this.list.length == 0) return;
      let arr = this.list;
      let str = [];
      arr.forEach(val => {
        str.push(val.pic);
      });
      str = str.join(",");
      let data = {
        sourceType: this.$user.sourceType,
        userName: this.$user.userName,
        content: this.identitySign,
        pictureUrl: str
      };
      this.$http.post("addQuestion", data, this.callbackaddQuestion);
    },
    //提交意见反馈的回调
    callbackaddQuestion(res) {
        this.$toast({ message: "意见反馈提交成功", duration: 3000 });
        this.identitySign = "";
        this.list = [];
        let txtVal = this.identitySign.length;
        this.remnant = 300 - txtVal;
    },
    //上传照片
    uploadFile(e) {
      let file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        data = e.target.result;
        this.$http.upload("base", { imageString: data }, this.callBackUpload);
      };
      reader.readAsDataURL(file);
    },
    //上传图片的回调
    callBackUpload(res) {
      this.list.push({ pic: res.data.url });
    }
  },
  created() {
    let txtVal = this.identitySign.length;
    this.remnant = 300 - txtVal;
  }
};
</script>
<style lang="scss">
@import "../../assets/sass/common";
@import "../../assets/sass/user/help";
</style>