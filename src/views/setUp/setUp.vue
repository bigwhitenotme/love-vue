<template>
    <div id="setUp">
        <header>
            <div @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
            </div>
            <span class="head-title">设置</span>
        </header>
        <ul class="setUp-list">
            <routerLink tag="li" :to="{path:'/setUp/managmentPswd'}" class="list-top">
                <p class="fl">账号与隐私</p>
                <div class="fr">
                    <span class="fl">绑定、密码</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </routerLink>
            <!-- <li class="list-last">
                <p class="fl">私密管理</p>
                <div class="fr">
                    <span class="fl">记录备份</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </li>  -->
            <!-- <li class="list-top">
                <p class="fl">隐私设置</p>
                <div class="fr">
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </li> -->
            <!-- <routerLink tag="li" :to="{path:'/setUp/about'}">
                <p class="fl">关于</p>
                <div class="fr">
                    <span class="fl">版本号{{version}}</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </routerLink> -->
            <!-- <routerLink tag="li" :to="{path:'/setUp/switchingAccounts'}" >
                <p class="fl">切换账号</p>
                <div class="fr">
                    <span class="fl"></span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </routerLink> -->
            <li class="list-last" @click="logOut">
                <p class="fl">退出登录</p>
                <div class="fr">
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </li>
        </ul>
        <!-- 退出登录弹框 -->
        <mt-popup v-model="isLogOut" position='bottom'>
            <div class="log-content">
                <p class="log-text">退出后不会删除任何记录,下次登录依旧可以使用本账号</p>
                <p class="confrim-logOut" @click="loginOut">退出登录</p>
                <p class="cancle-logOut" @click="cancleLogOut">取消</p>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //退出登录
                isLogOut: false,
                // version: '1.0.0',//版本号
                type: 'ios'
            }
        },
        methods: {
            //显示退出登录弹框
            logOut() {
                this.isLogOut = true;
                // this.getLogout()
            },
            //点击退出登录方法
            loginOut(){
                this.getLogout()
            },
            //关闭退出登录弹框
            cancleLogOut() {
                this.isLogOut = false
            },
            //返回上一级
            goBack() {
                this.$router.push({name:'user'});
            },
            //退出登录的方法
            getLogout(){
                let data = {
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                }
                this.$http.post('logout', data, this.callbacklogout)
            },
            //退出登录的回调
            callbacklogout(res){
                console.log(res)
            },
            // //获取版本号的方法
            // getversionCheck() {
            //     let data = {
            //         "noteType": 5,
            //         "sourceType": this.$user.sourceType,
            //         "userName": this.$user.userName,

            //     }
            //     this.$http.post('versionCheck', data, this.callbackversionCheck)

            // },
            // //获取版本号的回调
            // callbackversionCheck(res) {
            //     let version = '';
            //     if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            //         this.version = res.data.iosNo;
            //     } else if (/(Android)/i.test(navigator.userAgent)) {
            //         this.version = res.data.androidNo;
            //     }
            // },


        },
        created() {
            // this.getversionCheck();
            // if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            //     this.type = 'ios';
            //     this.version = '1.0.0';
            // } else if (/(Android)/i.test(navigator.userAgent)) {
            //     this.type = 'android';
            //     this.version = '1.0.1';
            // }
           
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/setUp/setUp";
</style>