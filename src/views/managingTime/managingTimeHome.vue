<template>
  <div id='managingTimeHome'>
    <header>
        <div @click='goBack'>
            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
        </div>
      <span class="head-title">{{title}}</span>
      <span class="head-right" v-if="isAddTimeManaging || isEdit" @click="save">保存</span>
    </header>
    <img src="../../assets/img/managing_add.png" alt="" class="add" @click='addPop' v-if='!isAddTimeManaging && !isEdit'>
    <ul v-if='!isEdit && workList.length != 0 && isLoading'>
      <li v-for="(item,index) in workList" :key="index" @touchstart='startMove' @touchend='endMove' :data-index='index'
        :class="item.move?'active':''">
        <div class="L-content" :data-index='index' @click.self='detail(item)'>
          <div v-if="item.priorityType == 0" class="L-icon fl" :data-index='index' @click='detail(item)'></div>
          <img v-if="item.priorityType == 1" :src="gradeOne" class="L-icon fl" :data-index='index' @click='detail(item)'>
          <img v-if="item.priorityType == 2" :src="gradeTwo" class="L-icon fl" :data-index='index' @click='detail(item)'>
          <img v-if="item.priorityType == 3" :src="gradeThree" class="L-icon fl" :data-index='index' @click='detail(item)'>
          <div class="C-text fl" @click.self='detail(item)'>
            <div class="L-title" :data-index='index' @click='detail(item)'>
              <span class="L-text" :data-index='index'>{{item.matterDescribe}}</span>
            </div>
            <div class="L-time" :data-index='index' @click='detail(item)'>{{item.matterTime}}</div>
            <div class="delete" :data-index='index' @touchstart='deleteItem(item.businessId)'>删除</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="none" v-if='workList.length == 0 && !isEdit && !isAddTimeManaging && isLoading'>
        <none text='您还没有添加事项提醒哦~'></none>
    </div>
    <div class="pro-input" v-if='isAddTimeManaging || isEdit && isLoading' :class='isEdit || (workList.length == 0 && isAddTimeManaging)?"edit":""'>
        <div class="input-item">
          <textarea v-model="message" placeholder="输入内容" class="input-text"></textarea>
        </div>
        <div class="input-item input-border">
          <img src="../../assets/img/managing_alarm_clock.png" alt="" class="fr alarm-clock">
          <div class="input-time" @click='openPicker'>{{nowTime}}</div>
        </div>
        <div class="input-item input-m">
          <span class="remind-text">提醒否</span>
          <mt-switch v-model="value"></mt-switch>
        </div>
        <div class="input-warn" v-if='value'>
          <!-- 提醒，重复 -->
          <div class="input-item">
            <div class="remind fl" @click='showOne' :class="isShowRemind?'active':''">
              <img v-if="isShowRemind" src="../../assets/img/manaing_active_remind.png" alt="" class="remind-icon">
              <img v-if="!isShowRemind" src="../../assets/img/managing_remind.png" alt="" class="remind-icon">
              <span>{{frameItem[frameNums].text}}</span>
            </div>
            <div class="no-repetition fl" @click='showTwo' :class="isShowRepeat?'active':''">
              <img v-if="isShowRepeat" src="../../assets/img/manaing_active_repeat.png" alt="" class="repetition-icon">
              <img v-if="!isShowRepeat" src="../../assets/img/managing_repeat.png" alt="" class="repetition-icon">
              <span>{{repeatItem[repeatNums].text}}</span>
            </div>
          </div>
          <!-- 优先级 -->
          <div class="input-item">
            <div class="grade fl">
              优先级
            </div>
            <div class="fr button-item">
              <span v-for='(item,index) in buttonItem' :key="item.background" @click='changeGrade(index)'
                :class="gradeNum==index?'active':''" v-if='item.important == 0' :style="{
                  'color':gradeNum==index?'#fff':item.color,
                  'backgroundColor':gradeNum==index?item.background:'',
                  'borderColor':gradeNum==index?item.background:'#d44c45'
                }">无</span>
              <div v-for='(item,index) in buttonItem' :class="gradeNum==index?'active':''" v-if='item.important != 0'
                :key="item.background" @click='changeGrade(index)' :style="{
                  'backgroundColor':gradeNum==index?item.background:'',
                  'borderColor':gradeNum==index?item.background:'#d44c45'
                }">
                <img :src="gradeNum==index?item.active:item.normal" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- 准点提醒弹框 -->
    <mt-popup v-model="isShowRemind" position='bottom'>
      <div class="frame">
        <div class="frame-item" v-for="(item,index) in frameItem" :key="item.text" @click="changeRemind(index)"
          :class="frameNums==index?'active':'' ">
          {{item.text}}
        </div>
        <div class="frame-button fl">
          <button class="remind-hide" @click="remindHide">取消</button>
          <button class="remind-complete" @click='remindSure'>完成</button>
        </div>
      </div>
    </mt-popup>
    <!-- 不重复时间 -->
    <mt-popup v-model="isShowRepeat" position='bottom'>
      <div class="frame">
        <div class="frame-item" v-for="(item,index) in repeatItem" :key="item.text" @click="changeRepeat(index)"
          :class="repeatNums==index?'active':'' ">
          {{item.text}}
        </div>
        <div class="frame-button fl">
          <button class="remind-hide" @click="repeatHide">取消</button>
          <button class="remind-complete" @click='repeatSure'>完成</button>
        </div>
      </div>
    </mt-popup>
    <div class="day-picker" v-show="showTime">
      <van-datetime-picker
          v-model="now"
          type="datetime"
          @cancel="onCancel"
          @confirm="changeDay"
          :formatter="formatter"
      />
    </div>
    <div class="day-picker" v-show="showChoose">
      <div class="top">
        <p class="cancel fl" @click='showChoose = false'>取消</p>
        <p class="sure fr" @click='showChoose = false'>确定</p>
      </div>
      <div class="content">提前 {{chooseTime}}</div>
      <van-picker :columns="columns" @change="onChange" />
    </div>
    <sureDelete @cancelDelete='cancelDelete' @sureDelete='sureDelete' v-if='isAll'></sureDelete>
  </div>
</template>
<script>
  import gradeActiveOne from "../../assets/img/managing_one.png"
  import gradeActiveTwo from "../../assets/img/managing_two.png"
  import gradeActiveThree from "../../assets/img/managing_three.png"
  import gradeOne from "../../assets/img/managing_active_one.png"
  import gradeTwo from "../../assets/img/managing_active_two.png"
  import gradeThree from "../../assets/img/managing_active_three.png"
  import { DatetimePicker } from 'vant';
  import { Picker } from 'vant';
  import obj from '../../assets/json/time'
  import sureDelete from '../../components/sureDelete.vue';//声明组件变量
  import none from '../../components/none.vue';//引入缺省组件
  export default {
    data() {
      return {
        gradeOne,//图片
        gradeTwo,//图片
        gradeThree,//图片
        startX: 0,//触摸开始位置
        index: -1,//开始移动的项目下标
        isAddTimeManaging: false,//添加事项提醒模式
        isShowRemind: false,//准点提醒弹框
        isShowRepeat: false,//循环提醒弹框
        message: '',//提醒内容
        value: true,//是否提醒
        gradeNum: 0,//优先级
        frameNum: 0,//准点提醒的激活index
        repeatNum: 0,//循环提醒的激活index
        frameNums: 0,//准点提醒的激活index
        repeatNums: 0,//循环提醒的激活index
        businessId: 0,//当前事项id
        workList: [],//事项提醒列表
        nowTime: '',//当前时间
        nowT: '',//传输时间
        now: '',//当前时间戳
        showTime: false,//显示时间弹窗
        showChoose: false,//自定义时间选取
        chooseTime: '0天 0时 0分',//选择时间
        title: '事项提醒',//标题
        isLoading: false,//结束加载
        isAll: false,//删除弹窗
        buttonItem: [
          {
            id: 1,
            important: 0,
            color: '#000',
            background: '#82858e'
          },
          {
            id: 2,
            important: 1,
            normal: gradeOne,
            active: gradeActiveOne,
            background: '#2fb36c'
          },
          {
            id: 3,
            important: 2,
            normal: gradeTwo,
            active: gradeActiveTwo,
            background: '#f27450'
          },
          {
            id: 4,
            important: 3,
            normal: gradeThree,
            active: gradeActiveThree,
            background: '#ff5656'
          }
        ],// 优先级
        frameItem: [
          {
            text: "准点提醒"
          },
          {
            text: "提前30分钟"
          },
          {
            text: "提前1小时"
          },
          {
            text: "提前一天"
          },
          {
            text: "提前三天"
          },
          {
            text: "自定义"
          }
        ],//提前列表
        repeatItem: [
          {
            text: "不重复"
          }, {
            text: "每天"
          }, {
            text: "每周"
          }, {
            text: "每两周"
          }, {
            text: "每月"
          }, {
            text: "每年"
          }
        ],//循环列表
        columns: [
          {
            values:obj.arr1,
            defaultIndex: 0
          },
          {
            values:obj.arr2,
            defaultIndex: 0
          },
          {
            values:obj.arr3,
            defaultIndex: 0
          }
        ],//多列选择
        isEdit: false,//是否编辑
      }
    },
    components:{
      DatetimePicker,
      Picker,
      sureDelete,
      none
    },
    methods: {
      //开始移动
      startMove(e) {
        e = e || event;
        this.startX = e.changedTouches[0].clientX;
        this.index = e.srcElement.dataset.index;
      },
      //结束移动
      endMove(e) {
        e = e || event;
        //let的指向比较小，只在最近的{}方法内有效。
        let startX = this.startX;
        let endX = e.changedTouches[0].clientX;
        this.workList.forEach(element => {
          element.move = false
        });
        if (startX - endX > 60) {
          this.$set(this.workList[this.index],'move',true);
        } else {
          this.$set(this.workList[this.index],'move',false);
        }
      },
      //删除项目
      deleteItem(id) {
        this.deleteID = id;
        this.isAll = true;
      },
      //取消删除
      cancelDelete(bool) {
          if (bool) this.isAll = false;
      },
      //弹框确定删除
      sureDelete(bool) {
          if (bool) this.sureDeleteItem();
      },
      //删除项目
      sureDeleteItem(){
        let data = {
          "businessId": this.deleteID,
          "sourceType": this.$user.sourceType,
          "userName": this.$user.userName,
        }
        this.$http.post('deleteMatterRemind',data,this.callbackdeleteMatterRemind)
      },
      //删除事项提醒的回调
      callbackdeleteMatterRemind(res){
        this.deleteID = 0;
        this.isAll = false;
        this.getList();
      },
      //添加弹框
      addPop() {
        this.message = '';
        this.value = true;
        this.frameNum = 0;
        this.frameNums = 0;
        this.repeatNum = 0;
        this.repeatNums = 0;
        this.gradeNum = 0;
        this.chooseTime = '0天 0时 0分';
        this.isAddTimeManaging = true;
        this.title = '事项添加';
        setTimeout(()=>{
          let doc = document.getElementById('managingTimeHome');
          doc.scrollTop = 1000000000;
        },10)
      },
      //点击保存关闭弹框
      save(){
        if(!this.message){
          this.$toast({message: '请先输入事项内容',duration: 3000});
          return;
        }
        let str = '';
        let arr = this.chooseTime.split(' ');
        if(arr[0] || arr[1] || arr[2]) str = parseInt(arr[2]) + '-' + parseInt(arr[1]) + '-' + parseInt(arr[0]);
        let data = {
          "sourceType": this.$user.sourceType,
          "userName": this.$user.userName,
          "matterTitle": '事项提醒',
          "matterDescribe": this.message,
          "remindType": this.value ? 2 : 1,
          "remindMode": parseInt(this.frameNum) + 1,
          "repeatMode": parseInt(this.repeatNum),
          "customValue": str,
          "matterTime": this.nowT,
          "priorityType": this.gradeNum
        }
        data.customValue != '0-0-0' ? '' : delete data.customValue;
        if(this.isEdit) data.businessId = this.businessId;
        if(this.isAddTimeManaging){
          this.$http.post('addMatterRemind',data,this.callbackaddMatterRemind)
        }else{
          this.$http.post('updateMatterRemind',data,this.callbackaddMatterRemind)
        }
      },
      //新增事项提醒弹窗
      callbackaddMatterRemind(res){
        this.isAddTimeManaging = false;
        this.isEdit = false;
        this.title = '事项提醒';
        this.getList();
      },
      //取消弹框
      cancel() {
        this.isAddTimeManaging = false
        this.title = '事项提醒';
      },
      //打开时间选择器
      openPicker() {
        this.showTime = true;
      },
      //选择优先级
      changeGrade(num) {
        this.gradeNum = num;
      },
      //提醒
      showOne() {
        this.isShowRemind = true;
      },
      showTwo() {
        this.isShowRepeat = true;
      },
      //点击添加激活类
      changeRemind(num) {
        this.frameNums = num;
        if(num == 5){
          this.showChoose = true;
        }
      },
      //取消弹框
      remindHide() {
        this.isShowRemind = false;
        this.frameNums = this.frameNum;
      },
      //点击添加激活类
      changeRepeat(num) {
        this.repeatNums = num;
      },
      //取消弹框
      repeatHide() {
        this.isShowRepeat = false;
        this.repeatNums = this.repeatNum;
      },
      //确认弹窗
      remindSure(){
        this.isShowRemind = false;
        this.frameNum = this.frameNums;
      }, 
      //确认弹窗
      repeatSure(){
        this.isShowRepeat = false;
        this.repeatNum = this.repeatNums;
      }, 
      //返回上一级
      goBack() {
        if(this.isEdit){
          this.isEdit = false;
          this.title = '事项提醒';
        }else if(this.isAddTimeManaging){
          this.isAddTimeManaging = false;
          this.title = '事项提醒';
        }else{
          window.webGoBackTap();
        }
      },
      //处理数据
      formatter(type, value) {
          if (type === 'year') {
              return `${value}年`;
          } else if (type === 'month') {
              return `${value}月`
          } else if (type === 'day') {
              return `${value}日`
          } else if (type === 'hour') {
              return `${value}时`
          } else if (type === 'minute') {
              return `${value}分`
          }
          return value;
      },
      //取消时间弹窗
      onCancel(){
        this.showTime = false;
      },
      //确定时间弹窗
      changeDay(value){
        let date = new Date ();
        date.setMinutes (date.getMinutes () + 5);
        if(value < date) value = date;
        this.now = date;
        this.showTime = false;
        let time = this.$fun.getSomeDate(value);
        this.nowTime = time.str;
        let times = this.$fun.getSomeDate(value,{w:false,s:true});
        this.nowT = times.str;
      },
      //多列选择器val
      onChange(pick,val){
        this.chooseTime = val.join(' ');
      },
      //查询列表
      getList(){
        let data = {
          "sourceType": this.$user.sourceType,
          "userName": this.$user.userName
        }
        this.$http.post('queryMatterRemindList',data,this.callbackqueryMatterRemindList)
      },
      //查询事项提醒列表
      callbackqueryMatterRemindList(res){
        let arr = res.data.matterRemindList;
        arr.forEach(val=>{
          val.move = false;
        })
        this.workList = arr;
        this.isLoading = true;
      },
      //进入详情
      detail(item){
        this.isEdit = true;
        this.title = '事项详情';
        this.message = item.matterDescribe;
        item.remindType == 2 ? this.value = true : this.value = false;
        this.frameNum = item.remindMode - 1;
        this.frameNums = item.remindMode - 1;
        this.repeatNum = item.repeatMode;
        this.repeatNums = item.repeatMode;
        this.gradeNum = item.priorityType;
        this.businessId = item.businessId;
        if(item.customValue){
          let arr = item.customValue.split('-');
          this.chooseTime = arr[2] + '日 ' + arr[1] + '时 ' + arr[0] + '分';
          this.columns[0].defaultIndex = arr[2];
          this.columns[1].defaultIndex = arr[1];
          this.columns[2].defaultIndex = arr[0];
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
          this.getList();
      }
    },
    created() { 
      let date = new Date ();
      date.setMinutes (date.getMinutes () + 5);
      this.now = date;
      let time = this.$fun.getSomeDate(date);
      this.nowTime = time.str;
      let times = this.$fun.getSomeDate(date,{w:false,s:true});
      this.nowT = times.str;
      if(this.$user.token) this.getList();
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
  }
</script>

<style lang="scss">
  @import "../../assets/sass/managingTime/managingTime";
</style>