<template>
  <div id="wishListHome" @touchmove.self.prevent>
    <header>
        <div @click='goBack'>
            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
        </div>
      <span class="head-title">{{nowYear}}</span>
    </header>
    <div class="input-text">
      <input type="text" v-model="wishListTitle" @blur="editTitleDone" />
    </div>
    <div class="content">
      <ul v-if="workList.length > 0 || isAdd && isLoading">
        <li
          v-for="(item,index) in workList"
          :key="index"
          @touchstart.self="startMove"
          @touchend.self="endMove"
          :data-index="index"
          :class="item.move?'active':'' "
        >
          <div
            class="L-content"
            :data-index="index"
            @touchstart.self="startMove"
            @touchend.self="endMove"
          >
            <img
              class="fl L-icon"
              v-if="!item.isFinish"
              :src="item.pic"
              alt
              :data-index="index"
              @click="editFinish(item.id,1)"
              @touchstart.self="startMove"
              @touchend.self="endMove"
            />
            <img
              class="fl L-icon"
              v-if="item.isFinish"
              :src="item.active"
              alt
              :data-index="index"
              @click="editFinish(item.id,0)"
              @touchstart.self="startMove"
              @touchend.self="endMove"
            />
            <div
              class="C-text fl"
              :data-index="index"
              @touchstart.self="startMove"
              @touchend.self="endMove"
            >
              <div class="L-title" :data-index="index" @touchstart="startMove" @touchend="endMove">
                <div class="input-text" :data-index="index">
                  <input
                    type="text"
                    v-model=" item.wishContent"
                    :data-index="index"
                    @focus="editList"
                    @blur="editDone(item.id,item.wishContent)"
                  />
                </div>
              </div>
              <div
                v-if="item.isUp"
                class="is-top"
                :data-index="index"
                @click="topItem(item.id,0)"
                @touchstart.self="startMove"
                @touchend.self="endMove"
              >取消置顶</div>
              <div
                v-if="!item.isUp"
                class="is-top"
                :data-index="index"
                @click="topItem(item.id,1)"
                @touchstart.self="startMove"
                @touchend.self="endMove"
              >置顶</div>
              <div class="delete" :data-index="index" @click="deleteItem(item.id)">删除</div>
            </div>
          </div>
        </li>
        <li v-if="isAdd">
          <div class="L-content">
            <img class="fl L-icon" :src="addPic" />
            <div class="C-text fl">
              <div class="L-title">
                <div class="input-text">
                  <input type="text" v-model="addText" @blur="listPreserved" ref="addInput" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="none" v-if="workList.length == 0 && !isAdd && isLoading">
        <none text="您还没有添加愿望清单哦~"></none>
      </div>
    </div>
    <div class="time" ref="timeBox">
      <div class="time-box">
        <div
          v-for="item in timeList"
          :key="item.time"
          @click="timeActive(item.time)"
          :class="nowYear==item.time?'active':'' "
        >{{item.time}}</div>
      </div>
    </div>
    <div class="add" @click="toAdd">+</div>
    <sureDelete @cancelDelete="cancelDelete" @sureDelete="sureDelete" v-if="isDelete"></sureDelete>
  </div>
</template>
<script>
import sureDelete from "../../components/sureDelete.vue"; //引入弹框组件
import none from "../../components/none.vue"; //引入缺省组件
export default {
  data() {
    return {
      startX: 0, //开始左滑时的起始坐标
      workIndex: -1, //当前操作的清单项下标
      chooseNormal: [
        require("../../assets/img/wish_color1.png"),
        require("../../assets/img/wish_color2.png"),
        require("../../assets/img/wish_color3.png"),
        require("../../assets/img/wish_color4.png"),
        require("../../assets/img/wish_color5.png")
      ], //正常图标列表
      chooseActive: [
        require("../../assets/img/wish_active_color1.png"),
        require("../../assets/img/wish_active_color2.png"),
        require("../../assets/img/wish_active_color3.png"),
        require("../../assets/img/wish_active_color4.png"),
        require("../../assets/img/wish_active_color5.png")
      ], //激活图标列表
      isAdd: false, //开启添加模式
      addPic: "", //添加时的图标
      addText: "", //添加时的输入文字
      isEdit: false, //开启编辑模式
      workList: [], //愿望清单
      timeList: [], //年份列表
      nowYear: "", //当前年份
      isLoading: false, //是否完成加载
      isDelete: false, //开启删除弹框
      deleteID: 0, //删除项id
      wishListTitle: "" //愿望清单标题
    };
  },
  components: {
    sureDelete,
    none
  },
  methods: {
    //获取愿望列表
    init() {
      this.isLoading = false;
      let data = {
        year: this.nowYear,
        "sourceType": this.$user.sourceType,
"userName": this.$user.userName,
      };
      this.$http.post("getWishList", data, this.callBackWishList);
    },
    // 愿望清单列表回调
    callBackWishList(res) {
      let arr = res.data.list;
      arr.forEach(val => {
        val.move = false;
        let num = this.$fun.random(0, 5); //输出0～4之间的随机整数
        val.pic = this.chooseNormal[num];
        val.active = this.chooseActive[num];
      });
      this.workList = arr;
      this.isLoading = true;
      this.wishListTitle = res.data.wishListTitle;
    },

    //愿望清单头部标题修改

    //开始移动
    startMove(e) {
      e = e || event;
      this.startX = e.changedTouches[0].clientX;
      this.workIndex = e.srcElement.dataset.index;
    },
    //结束移动
    endMove(e) {
      e = e || event;
      //let的指向比较小，只在最近的{}方法内有效。
      let startX = this.startX;
      let endX = e.changedTouches[0].clientX;
      this.workList.forEach(element => {
        element.move = false;
      });
      if (startX - endX > 100) {
        this.workList[this.workIndex].move = true;
      } else {
        this.workList[this.workIndex].move = false;
      }
    },

    //删除愿望清单
    deleteItem(id) {
      this.deleteID = id;
      this.isDelete = true;
    },
    //弹框确定删除
    sureDelete(bool) {
      if (bool) this.sureDeleteItem();
    },
    //确定删除
    sureDeleteItem() {
      let deleteList = {
        id: this.deleteID,
        "sourceType": this.$user.sourceType,
"userName": this.$user.userName,
      };
      this.$http.post("wishDelete", deleteList, this.callBackdeleteList);
    },
    // 愿望清单删除回调
    callBackdeleteList(res) {
      this.workList[this.workIndex].move = false;
      setTimeout(() => {
        this.workList.splice(this.workIndex, 1);
      }, 300);
      this.isDelete = false;
    },

    //点击底部时间添加激活类
    timeActive(time) {
      this.nowYear = time;
      this.isAdd = false;
      this.addText = "";
      this.init();
    },

    //点击是否置顶
    topItem(id, isUp) {
      let topList = {
        id: id,
        isUp: isUp,
        "sourceType": this.$user.sourceType,
"userName": this.$user.userName,
      };
      this.$http.post("wishUp", topList, this.callBackwishUp);
    },
    // 愿望清单是否置顶回调
    callBackwishUp(res) {
      let arr = this.workList;
      this.workList = [];
      let item = arr[this.workIndex];
      if (item.isUp == 0) {
        item.isUp = 1;
        arr.splice(this.workIndex, 1);
        arr.unshift(item);
        this.workList = arr;
      } else {
        item.isUp = 0;
        arr.splice(this.workIndex, 1);
        let index = -1;
        arr.forEach((val, ind) => {
          val.isUp == 1 ? (index = ind) : 0;
        });
        arr.splice(index + 1, "", item);
        this.workList = arr;
      }
    },

    //点击完成愿望(切换图片)
    editFinish(id, isFinish) {
      let editFinish = {
        id: id,
        isFinish: isFinish,
        "sourceType": this.$user.sourceType,
"userName": this.$user.userName,
      };
      this.$http.post("wishEditFinish", editFinish, this.callBackEditFinish);
    },
    //点击完成愿望的回调
    callBackEditFinish(res) {
      this.workList[this.workIndex].isFinish = !this.workList[this.workIndex]
        .isFinish;
    },
    //点击编辑列表
    editList() {
      this.isEdit = true;
    },
    //完成编辑列表
    editDone(id, wishContent) {
      let editList = {
        id: id,
        "sourceType": this.$user.sourceType,
"userName": this.$user.userName,
        wishContent: wishContent
      };
      this.$http.post("wishEdit", editList, this.callBackeditList);
    },
    //点击编辑列表回调
    callBackeditList(res) {
      this.isEdit = false;
    },
    //添加愿望清单列表
    toAdd() {
      if (!this.isAdd) {
        this.isAdd = true;
        let num = this.$fun.random(0, 5); //输出0～4之间的随机整数
        this.addPic = this.chooseNormal[num];
        this.$nextTick(() => {
          this.$refs.addInput.focus();
        });
      }
    },
    //点击保存愿望清单
    listPreserved() {
      let wishContent = this.addText;
      if (!wishContent) {
        this.isAdd = false;
        return;
      }
      let addList = {
        isFinish: 0,
        "sourceType": this.$user.sourceType,
"userName": this.$user.userName,
        wishContent: wishContent,
        year: this.nowYear
      };
      this.$http.post("wishAdd", addList, this.callBackaddList);
    },
    //添加愿望清单列表回调
    callBackaddList(res) {
      this.init();
      this.isAdd = false;
      this.addText = "";
    },
    //返回上一级
    goBack() {
      window.webGoBackTap();
    },
    //取消删除
    cancelDelete(bool) {
      if (bool) this.isDelete = false;
    },
    //修改愿望标题
    editTitleDone() {
      let WishListTitle = {
        isFinish: 1,
        "sourceType": this.$user.sourceType,
"userName": this.$user.userName,
        wishListTitle: this.wishListTitle
      };
      this.$http.post(
        "editWishListTitle",
        WishListTitle,
        this.callBackeditWishListTitle
      );
    },
    //修改愿望标题回调
    callBackeditWishListTitle(res) {},
    //获取用户信息
    getUserInfo(userName,token,sourceType){
        this.$user.userName = userName;
        this.$user.token = token;
        this.$user.sourceType = sourceType;
        this.$http.defaultOption.user.userName = userName;
        this.$http.defaultOption.user.token = token;
        this.$http.defaultOption.user.sourceType = sourceType;
        this.init();
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
    this.nowYear = parseInt(
      this.$fun.getNowDate({ d: false, w: false, h: false }).str
    );
    this.timeList = [
      { time: this.nowYear - 2 },
      { time: this.nowYear - 1 },
      { time: this.nowYear },
      { time: this.nowYear + 1 },
      { time: this.nowYear + 2 }
    ];
    let html = document.getElementsByTagName("html");
    let dpr = html[0].getAttribute("data-dpr");
    this.$nextTick(() => {
      this.$refs.timeBox.scrollLeft = 25 * dpr;
    });
    if(this.$user.token) this.init();
  }
};
</script>
<style lang="scss">
@import "../../assets/sass/common";
@import "../../assets/sass/wishList/wishListHome";
</style>