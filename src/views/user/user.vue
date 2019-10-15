<template>
    <div id="userContent">
        <header>
            <div  @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left">
            </div>
           
        </header>
        <router-link :to="{path:'/user/userInfo'}" tag='div' class="user-top">

            <img :src="userInfo.portraitUrl" alt="" class="fl head-pic">
            <div class="user-info fl">
                <p class="user-name">{{filterLength(200,17,userInfo.nickName)}}</p>
                <p class="user-text">{{filterLength(200,12,userInfo.identitySign)}}</p>
            </div>
            <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">

        </router-link>
        <ul class="user-list">
            <!-- <router-link :to="{path:'/user/bill'}" tag='li'>
                <img src="../../assets/img/user_bill.png" alt="" class="fl list-icon icon-three">
                <p class="fl">订单管理</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </router-link> -->
            <router-link :to="{path:'/user/bodyData'}" tag='li'>
                <img src="../../assets/img/user_data.png" alt="" class="fl list-icon icon-one ">
                <p class="fl">身体数据</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </router-link>
            <routerLink tag="li" :to="{path:'/user/collect'}"  class="list-line list-last" >
                <img src="../../assets/img/user_collect.png" alt="" class="fl list-icon icon-one icon-top">
                <p class="fl">我的收藏</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </routerLink>
            <routerLink tag="li" :to="{path:'/setUp/addBackups'}" class="list-line list-last">
                <img src="../../assets/img/user_xinxi.png" alt="" class="fl list-icon icon-two">
                <p class="fl">重要资料备份</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </routerLink>
            <!-- <li>
                <img src="../../assets/img/user_conceal.png" alt="" class="fl list-icon">
                <p class="fl">隐私设置</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </li> -->
            <routerLink tag="li" :to="{path:'/setUp/setUp'}"  class="list-line list-last">
                <img src="../../assets/img/user_set.png" alt="" class="fl list-icon ">
                <p class="fl">设置管理</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </routerLink>
            <routerLink tag="li" :to="{path:'/user/grantInstructions'}" class="list-last" >
                <img src="../../assets/img/user_words.png" alt="" class="fl list-icon icon-two">
                <p class="fl">请君赐教</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </routerLink>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userInfo:""
            }
        },
        methods: {
            //过长省略
            filterLength(width,fontSize,str) {
                if(str){
                    return this.$fun.addEllipsis(width,fontSize,str)
                }
            },
            //返回上一级
            goBack() {
                window.webGoBackTap();
            },
            //获取用户信息
            getUserInfo() {
                let data = {
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                }
                this.$http.post('getUserInfo', data, this.callBackGetUserInfo)
            },
            //获取用户信息的回调
            callBackGetUserInfo(res) {
                let userInfo = res.data;
                this.userInfo = res.data;
                sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
            },
            //获取用户信息
            getInfo(userName,token,sourceType){
                this.$user.userName = userName;
                this.$user.token = token;
                this.$user.sourceType = sourceType;
                this.$http.defaultOption.user.userName = userName;
                this.$http.defaultOption.user.token = token;
                this.$http.defaultOption.user.sourceType = sourceType;
                this.getUserInfo();
            }
        },
        mounted() {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                window.getUserInfo = this.getInfo;
            } else if (/(Android)/i.test(navigator.userAgent)) {
                if(android){
                    android.getUserInfo();
                    window.getUserInfo = this.getInfo;
                }
            }
        },
        created() {
            if(this.$user.token) this.getUserInfo();
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/user";
</style>