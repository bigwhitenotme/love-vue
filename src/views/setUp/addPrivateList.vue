<template>
    <div id="addPrivateList">
        <header>
            <div @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
            </div>
            <span class="head-title">重要资料备份</span>
            <span class="head-right">编辑</span>
        </header>
        <div class="tishi" v-if='show == 0'>
            <div>
                <img src="../../assets/img/common/collet_tishi.png" alt="">
                <div class="text">
                    <p>还没有信息，快去上传吧</p>
                </div>
                <router-link :to="{path:'/setUp/addBackups'}" tag="div" class="tishiBtn">去添加</router-link>
            </div>
        </div>
        <div class="content" v-if="show == 1">
            <ul>
                <li v-for="item in list">
                    <div class="consultation-one">
                        <div class="text">
                            {{item.content}}
                        </div>
                        <div class="pic">
                            <img :src="item.pic" alt="">
                            <img :src="item.pic" alt="">
                            <img :src="item.pic" alt="">
                        </div>

                    </div>
                    <div class="consultation-reply">
                        <span class="fl">{{item.time}}</span>
                        <span class="delete fr">删除</span>
                    </div>
                </li>
            </ul>
            <router-link :to="{path:'/setUp/addBackups'}" class="add-btn" tag="div">添加私密信息</router-link>
        </div>

    </div>
</template>
<script>
    import pic from '../../assets/img/pic.jpg'
    export default {
        data() {
            return {
                // 提示显示
                show: 1,
                pic,
                // 备份列表
                list: []
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            callBackgetPersonInfo(res) {
                console.log(res)
                let arr = res;
                this.list = [arr];
            },
            //获取私密信息e
            getPersonInfo() {
                let data = {
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                }
                this.$http.post('getPersonInfo', data, this.callBackgetPersonInfo)
            },
        },
        created() {
            this.getPersonInfo();
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/commonTishi";
    @import "../../assets/sass/setUp/addPrivateList";
</style>