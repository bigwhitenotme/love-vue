<template>
    <div id="managmentPswd">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">账户与隐私</span>
        </header>
        <ul class="setUp-list">
            <!-- <router-link class="list-top" tag="li" :to="{path:'/setUp/bindingIphone'}">
                <p class="fl">手机号</p>
                <div class="fr">
                    <span class="fl">未绑定</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </router-link>

            <router-link class="list-last" tag="li" :to="{path:'/setUp/weChat'}">
                <p class="fl">微信号</p>
                <div class="fr">
                    <span class="fl">未绑定</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </router-link>
            <router-link class="list-top" tag="li" :to="{path:'/setUp/loginPswd'}">
                <p class="fl">登录密码</p>
                <div class="fr">
                    <span class="fl">已设置</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </router-link> -->
            <router-link tag="li" :to="{path:'/setUp/relativesPswd'}" class="list-top list-last">
                <p class="fl">至亲密码</p>
                <div class="fr">
                    <span class="fl">未设置</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </router-link>
            <!-- <router-link class="list-last" :to="{path:'/setUp/certification'}" tag="li">
                <p class="fl">实名认证</p>
                <div class="fr">
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </router-link> -->

        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.push({name:'setUp'});
            }
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/setUp/setUp";
</style>