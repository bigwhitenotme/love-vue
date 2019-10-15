<template>
  <div id="addBackups">
    <header>
        <div  @click='goBack'>
            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
        </div>
      <span class="head-title">重要资料备份</span>
      <span class="head-right" v-if='!isChange && (content || list.length>0)' @click='isChange = true'>编辑</span>
    </header>
    <div class="content" v-if='detail.content || isChange && isLoading'>
      <form>
        <div class="title">
          <textarea
            id="title"
            placeholder="输入私密信息"
            v-model="content"
            maxlength="400"
            @input="descInput"
            :disabled='!isChange'
          ></textarea>
          <p class="user-num" :class='remnant==0?"active":""' v-if='isChange'>
            <span>{{remnant}}</span>/400
          </p>
        </div>

        <!-- 上传图片 -->
        <div class="pic"  v-if='list.length!=0 || isChange' >
          <div class="add-pic">
            <div v-for="(item,index) in list" :key="index">
              <img :src="item.pic" alt />
              <div class="cancle" @click="deletePic"  v-if='isChange'>
                <img src="../../assets/img/solutionStore/cancel.png" alt />
              </div>
            </div>
          </div>
          <div class="add" v-if='isChange'>
            <img src="../../assets/img/solutionStore/add.png" alt />
            <p>添加照片</p>
            <input type="file" @change='uploadFile($event)'>
          </div>
        </div>
        <div class="btn" @click="addPersonInfo" v-if='isChange'>上传</div>
      </form>
    </div>
    <div class="tishi" v-if="!detail.content && !isChange && isLoading">
      <div>
        <img src="../../assets/img/common/collet_tishi.png" alt />
        <div class="text">
          <p>还没有信息，快去上传吧</p>
        </div>
        <div class="tishiBtn" @click='isChange = true'>去添加</div>
      </div>
    </div>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      remnant: 0,//限制输入字数
      content: "", // textarea内容
      id: 0,//私密信息id
      detail: {}, //私密信息详情
      isChange: false,//编辑私密信息
      list: [],// 图片列表
      isLoading: false,//加载完成
    };
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //上传
    upload() {
      this.$router.push({
        name: "addPrivateList",
        query: { list: this.list }
      });
    },
    //限制输入字数
    descInput() {
      let txtVal = this.content.length;
      this.remnant = 400 - txtVal;
    },
    //删除当前选择图片
    deletePic(index) {
      this.list.splice(index, 1);
    },
    //编辑私密信息
    addPersonInfo() {
      if (!this.content && this.list.length == 0) return;
      let arr = this.list;
      let str = [];
      arr.forEach(val => {
        str.push(val.pic)
      });
      str = str.join(',');
      let data = {
        "id": this.id,
        "content": this.content,
        "sourceType": this.$user.sourceType,
        "userName": this.$user.userName,
        "pictureUrl": str
      };
      data.id ? "" : delete data.id;
      this.$http.post("addPersonInfo", data, this.callBackaddPersonInfo);
    },
    //编辑私密信息的忽地奥
    callBackaddPersonInfo(res) {
      if (res.code == 1000) {
        this.isChange = false;
        this.getPersonInfo();
      }
    },
    //获取私密信息的回调
    callBackgetPersonInfo(res){
        this.detail = res.data;
        this.content = res.data.content;
        this.id = res.data.id;
        let txtVal = this.content.length;
        this.remnant = 400 - txtVal;
        this.isLoading = true;
        let arr = res.data.pictureUrl;
        if(arr){
          arr = arr.split(',');
          arr.forEach(val=>{
            this.list.push({
              pic: val
            })
          })
        }
    },
    //获取私密信息
    getPersonInfo() {
        this.list = [];
        let data = {
            "sourceType": this.$user.sourceType,
            "userName": this.$user.userName,
        }
        this.$http.post('getPersonInfo', data, this.callBackgetPersonInfo)
    },
    //上传照片
    uploadFile(e){
      let file = e.target.files[0];
      var reader = new FileReader()
      reader.onload = (e) => {
          let data;
          data = e.target.result
          this.$http.upload('base', {"imageString": data}, this.callBackUpload)
      }
      reader.readAsDataURL(file)
    },
    //上传图片的回调
    callBackUpload(res){
      this.list.push({pic:res.data.url});
    }
  },
  
  created() {
    this.getPersonInfo();
  }
};
</script>
    <style lang="scss">
@import "../../assets/sass/common";
@import "../../assets/sass/setUp/addBackups";
</style>