<template>
  <div id="home">
    <!-- <router-link :to="{path:'/managingTime/managingTimeHome'}">
      去事项提醒页面
    </router-link> -->
    <!-- <router-link :to="{path:'/struggle/struggleHome'}">
      去奋斗起来页面
    </router-link>
    <router-link :to="{path:'/wishList/wishList'}">
      去愿望清单
    </router-link>
    <router-link :to="{path:'/user/user'}">
      个人中心
    </router-link> -->
    <div class="list">
        <div v-if='list.length==0' class="none">
          <div>
            <p>点点</p>
            <div class="box">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>看看</p>
          </div>
          <div>
            <p>挑你中意的 把ta拽出来</p>
          </div>
        </div>
        <ul v-if='list.length>0'>
          <li v-for='item in list' :key='item.columnName' @click='goOther(item.columnUrl)'>
            <img :src="item.columnIconUrl" alt="">
            <p>{{item.columnName}}</p>
          </li>
        </ul>
    </div>
    <div class="icon">
        <a @click='goOther("/practice/practiceHome")'>
          修行标签
        </a>
    </div>
    <div class="choose">
        <div class="box" @click='chooseShow(isShowChoose)'>
            <span v-if='!isShowChoose'></span>
            <span v-if='!isShowChoose'></span>
            <span v-if='!isShowChoose'></span>
            <p v-if='isShowChoose' :class="list.length>0?'active':''">完成</p>
        </div>
        <ul v-if='isShowChoose'>
          <li v-for='item in chooseList' :key='item.id' @click='changeChoose(item.id,item.columnName)'>
            <img :src="item.upColumnIconUrl" alt="">
            <p>{{item.columnName}}</p>
            <span :class='item.isAdd?"reduce":"add"'></span>
          </li>
          <li></li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        chooseList: [],//所有项目
        list: [],//已选择项目
        isLoading: false,//是否加载完成
        isShowChoose: false,//是否展示选择列表
        changeName: '',//正在改变的id
        addID: [],//添加的id
      };
    },
    methods: {
      //获取图标列表
      init() {
        let data = {
          "sourceType": this.$user.sourceType,
          "userName": this.$user.userName,
        }
        this.$http.post('oneSelfApp', data, this.callBackOneSelfApp)
      },
      //获取图标列表的回调
      callBackOneSelfApp(res) {
        let list = res.data.appFunctions;
        let ids = [];
        list.forEach(val=>{
          val.isAdd ? ids.push(val.id) : '';
        })
        this.list = res.data.userFunctions;
        this.chooseList = res.data.appFunctions;
        this.addID = ids;
        this.isLoading = true;
      },
      //更改图标选中状态
      changeChoose(id,name){
        this.changeName = name;
        let ids = this.addID;
        if(ids.indexOf(id)!=-1){
          ids.splice(ids.indexOf(id),1)
        }else{
          ids.push(id)
        }
        this.addID = ids;
        let data = {
          "sourceType": this.$user.sourceType,
          "userName": this.$user.userName,
          "functionSort": this.addID.join(',')
        }
        this.$http.post('updateApp', data, this.callBackChangeChoose)
      },
      //更改图标选中状态的回调
      callBackChangeChoose(res){
        let name = this.changeName;
        let list = this.chooseList;
        list.forEach(val=>{
          if(val.columnName == name){
            if(val.isAdd){
              this.list.forEach((item,index)=>{
                item.columnName == name ? this.list.splice(index,1) : '';
              })
            }else{
              this.list.push(val);
            }
            val.isAdd = !val.isAdd;
          }
        })
        this.chooseList = list;
      },
      //进入每个模块
      goOther(link){
        if(link){
          window.geturl(link);
        }else{
          this.$toast({message: '暂未开放，敬请期待',duration: 3000})
        }
      },
      //获取用户信息
      getUserInfo(userName,token,sourceType){
          this.$user.userName = userName;
          this.$user.token = token;
          this.$user.sourceType = sourceType;
          this.$http.defaultOption.user.userName = userName;
          this.$http.defaultOption.user.token = token;
          this.$http.defaultOption.user.sourceType = sourceType;
          this.init();
      },
      //展开收起选择图标
      chooseShow(bool){
        this.isShowChoose = !bool;
        window.judgeShow(!bool);
      }
    },
    mounted() {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        window.getUserInfo = this.getUserInfo;
      } else if (/(Android)/i.test(navigator.userAgent)) {
          if(android){
              android.getUserInfo();
              window.getUserInfo = this.getUserInfo;
          }
      }
    },
    created() {
      if(this.$user.token) this.init();
      // let data = {
      //   "type": "L",
      //   "userName": "13955135080"
      // }
      // this.$http.post('getVerifyCode', data, this.callBackChangeChoose)
      // let data = {
      //   "loginType": "C",
      //   "osType": "ios",
      //   "phoneType": "ios",
      //   "userName": "13955135080",
      //   "uuid": "ios",
      //   "verifyCode": "9098",
      //   "version": 100
      // }
      // this.$http.post('login', data, this.callBackChangeChoose)
      
    },
  };
</script>

<style lang="scss">
  @import "../../assets/sass/common";
  @import "../../assets/sass/home/index";
</style>