<template>
    <div id="struggleHome">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">奋斗起来</span>
            <span class="head-right" v-if='!isChange' @click='isChange = true'>编辑</span>
            <span class="head-right save" v-if='isChange' @click='save'>保存</span>
        </header>
        <div id="wordCloud">
            <div class="white">
                <div 
                    v-show='white.length>0'
                    v-for="(item,index) in white" 
                    :key='index'
                    :style='{
                        "top":width/5*Math.floor(item.random/5)+"px",
                        "left":width/5*(item.random%5)+"px"
                    }'
                >
                    <p
                        :style='{
                            "top": item.x+"px",
                            "left": item.y+"px",
                            "fontSize": item.fontSize + "px"
                        }'
                    >{{item.labelName}}</p>
                </div>
                <div class="note" v-show='white.length == 0'>
                    <p>人生就像射箭</p>
                    <p>梦想就像箭靶子</p>
                </div>
            </div>

        </div>
        <div class="struggleText">
            <div>
                <p>有多少能力去表达你的爱</p>
                <p>对标几个走在前面的同龄伙伴</p>
                <p>看看自己的生存现状 拥有什么 追求什么 </p>
            </div>
        </div>
        <div class="icon">
            <ul class="top">
                    <li 
                        v-for='(item,index) in iconList' 
                        :key='item.id'
                        v-show='index%2 == 0'
                        :class='item.isAdd?"active":""'
                        @click='changeIcon(index)'
                    >{{item.labelName}}<span v-if="isChange" :class='{"active":item.isAdd}'></span></li>
                </ul>
                <ul class="bottom">
                    <li 
                        v-for='(item,index) in iconList' 
                        :key='item.id'
                        v-show='index%2 == 1'
                        :class='item.isAdd?"active":""'
                        @click='changeIcon(index)'
                    >{{item.labelName}}<span v-if="isChange" :class='{"active":item.isAdd}'></span></li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isChange: false,//编辑模式
            white:[],//阳标签
            iconList: [],//可选标签
            dpr: 1,//屏幕dpr
            width: document.body.clientWidth,//屏幕宽度
        }
    },
    created(){
        let html = document.getElementsByTagName("html");
        this.dpr = html[0].getAttribute("data-dpr"); 
        if(this.$user.token) this.getXiuXingList();
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
    methods:{
        //返回上一级
        goBack() {
            window.webGoBackTap();
        },
        //查询修行标签
        getXiuXingList() {
            let data = {
                "sourceType": this.$user.sourceType,
                "userName": this.$user.userName,
                "type": this.type
            }
            this.$http.post('getStiveList', data, this.callBackgetXiuXingList)
        },
        //查询修行标签的回调
        callBackgetXiuXingList(res) {
            this.iconList = res.data.list;
            if(this.white.length == 0){
                this.iconList.forEach(val => {
                    val.isAdd ? this.white.push(val) : '';
                });
                this.white = this.$fun.addClipper(750,750,this.white);
            }
        },
        //更换标签选中状态
        changeIcon(index){
            if(!this.isChange) return;
            this.$set(this.iconList[index],'isAdd',!this.iconList[index].isAdd);
            this.white = this.$fun.toAddClipper(750,750,this.white,this.iconList[index]);
        },
        //保存标签
        save(){
            let ids = [];
            this.white.forEach(val=>{
                ids.push(val.id);
            })
            let data = {
                "sourceType": this.$user.sourceType,
                "userName": this.$user.userName,
                "ids": ids.join(',')
            }
            this.$http.post('editStive', data, this.callBackeditXiuXing)
        },
        //保存标签的回调
        callBackeditXiuXing(res){
            this.isChange = false;
        },
        //获取用户信息
        getUserInfo(userName,token,sourceType){
            this.$user.userName = userName;
            this.$user.token = token;
            this.$user.sourceType = sourceType;
            this.$http.defaultOption.user.userName = userName;
            this.$http.defaultOption.user.token = token;
            this.$http.defaultOption.user.sourceType = sourceType;
            this.getXiuXingList();
        }
    }
}
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/practice/practiceHome";
    @import "../../assets/sass/struggle/struggle";
</style>