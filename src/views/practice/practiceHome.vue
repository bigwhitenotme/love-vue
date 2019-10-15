<template>
    <div id="practiceHome">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">修行标签</span>
            <span class="head-right" v-if='!isChange' @click='isChange = true'>编辑</span>
            <span class="head-right save" v-if='isChange' @click='save'>保存</span>
        </header>
        <div id="wordCloud">
            <div class="white" :class='{"active":type==0}' @click='changeType(0)'>
                <div v-show='white.length>0' v-for="(item,index) in white" :key='index' :style='{
                        "top":height/6*Math.floor(item.random/4)+"px",
                        "left":width/4*(item.random%4)+"px"
                    }'>
                    <p :style='{
                            "top": item.x+"px",
                            "left": item.y+"px",
                            "fontSize": item.fontSize + "px"
                        }'>{{item.labelName}}</p>
                </div>
                <div class="note" v-show='white.length == 0'>
                    <p>人生就像射箭</p>
                    <p>梦想就像箭靶子</p>
                </div>
            </div>
            <div class="black" :class='{"active":type==1}' @click='changeType(1)'>
                <div v-show='black.length>0' v-for="(item,index) in black" :key='index' :style='{
                        "top":height/6*Math.floor(item.random/4)+"px",
                        "left":width/4*(item.random%4)+"px"
                    }'>
                    <p :style='{
                            "top": item.x+"px",
                            "left": item.y+"px",
                            "fontSize": item.fontSize + "px"
                        }'>{{item.labelName}}</p>
                </div>
                <div class="note" v-show='black.length == 0'>
                    <p>人生就像射箭</p>
                    <p>梦想就像箭靶子</p>
                </div>
            </div>
        </div>

        <div class="icon">
            <ul class="top">
                <li v-for='(item,index) in iconList' :key='item.id' v-show='index%2 == 0'
                    :class='item.isAdd?"active":""' @click='changeIcon(index)'>{{item.labelName}}<span v-if="isChange"
                        :class='{"active":item.isAdd}'></span></li>
            </ul>
            <ul class="bottom">
                <li v-for='(item,index) in iconList' :key='item.id' v-show='index%2 == 1'
                    :class='item.isAdd?"active":""' @click='changeIcon(index)'>{{item.labelName}}<span v-if="isChange"
                        :class='{"active":item.isAdd}'></span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isChange: false,//编辑模式
                type: 0,//黑白模式
                white: [],//阳标签
                black: [],//黑标签
                iconList: [],//可选标签
                dpr: 1,//屏幕dpr
                width: document.body.clientWidth / 750 * 600,//屏幕宽度
                height: document.body.clientHeight / 1334 * 900//屏幕高度
            }
        },
        created() {
            let html = document.getElementsByTagName("html");
            this.dpr = html[0].getAttribute("data-dpr");
            if (this.$user.token) this.getXiuXingList();
        },
        mounted() {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                window.getUserInfo = this.getUserInfo;
            } else if (/(Android)/i.test(navigator.userAgent)) {
                if (android) {
                    android.getUserInfo();
                    window.getUserInfo = this.getUserInfo;
                }
            }
        },
        methods: {
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
                this.$http.post('getXiuXingList', data, this.callBackgetXiuXingList)
            },
            //查询修行标签的回调
            callBackgetXiuXingList(res) {
                this.iconList = res.data.list;
                if (this.type == 0) {
                    if (this.white.length == 0) {
                        this.iconList.forEach(val => {
                            val.isAdd ? this.white.push(val) : '';
                        });
                        this.white = this.$fun.addClipper(600, 900, this.white);
                    }
                } else if (this.type == 1) {
                    if (this.black.length == 0) {
                        this.iconList.forEach(val => {
                            val.isAdd ? this.black.push(val) : '';
                        });
                        this.black = this.$fun.addClipper(600, 900, this.black);
                    }
                }
            },
            //切换标签
            changeType(type) {
                if (this.isChange) {
                    this.$toast({ message: '请先保存当前标签', duration: 3000 });
                    return;
                } else {
                    this.type = type;
                    this.getXiuXingList();
                }
            },
            //更换标签选中状态
            changeIcon(index) {
                if (!this.isChange) return;
                this.$set(this.iconList[index], 'isAdd', !this.iconList[index].isAdd);
                this.type ? this.black = this.$fun.toAddClipper(600, 900, this.black, this.iconList[index]) : this.white = this.$fun.toAddClipper(600, 900, this.white, this.iconList[index]);
            },
            //保存标签
            save() {
                let ids = [];
                if (this.type == 0) {
                    this.white.forEach(val => {
                        ids.push(val.id);
                    })
                } else if (this.type == 1) {
                    this.black.forEach(val => {
                        ids.push(val.id);
                    })
                }
                let data = {
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                    "type": this.type,
                    "ids": ids.join(',')
                }
                this.$http.post('editXiuXing', data, this.callBackeditXiuXing)
            },
            //保存标签的回调
            callBackeditXiuXing(res) {
                this.isChange = false;
            },
            //获取用户信息
            getUserInfo(userName, token, sourceType) {
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
</style>