<template>
    <div id="switchingAccounts">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">切换账号</span>
            <span class="head-right" @click="deleteList">{{isDelete ? '完成' : '编辑'}}</span>
        </header>
        <div class="accounts-list">
            <ul>
                <li v-for='(item,index) in  accountsList' :key="index" @click="activeIndex = index">
                    <div class="switching-less" v-if='isDelete' :class="isDelete?'active':''" @click="deleteItem">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="wechat-info" :class="isDelete?'active':''">
                        <img src="../../assets/img/pic.jpg" alt="" class="fl">
                        <span class="fl">{{item.name}}</span>
                    </div>
                    <img :src="item.select" class="select" v-if="activeIndex == index && !isDelete">
                </li>
            </ul>
            <div class="addswitching list-last">
                <img src="../../assets/img/switching_add.png" alt="" class="fl">
                <span class="fl">添加账号</span>
            </div>
        </div>

    </div>
</template>
<script>
    import pic from "../../assets/img/switching_less.png";
    import select from "../../assets/img/switching_dui.png"
    export default {
        data() {
            return {
                activeIndex: 0,// 默认选中账号
                isDelete: false,//删除微信号
                accountsList: [
                    {
                        pic,
                        name: "木芯",
                        select
                    }, {

                        pic,
                        name: "乐多",
                        select
                    }
                ]
            }
        },
        methods: {
            //删除选中微信号
            deleteList() {
                this.isDelete = !this.isDelete;
            },
            //删除账户
            deleteItem(e) {
                let index = e.srcElement.dataset.index;
                // this.workList[this.index].move = false;
                setTimeout(() => {
                    this.accountsList.splice(index, 1);
                }, 300)
            },
            //返回上一级
            goBack() {
                this.$router.go(-1);
            }
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/setUp/switchingAccounts";
</style>