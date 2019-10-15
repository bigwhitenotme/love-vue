<template>
    <div id="bindingIphone">
        <header>
            <div @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
            </div>
            <span class="head-title">绑定手机号</span>
        </header>
        <div class="input-content">
            <div class="binding-shield">
                <img src="../../assets/img/bindingIphone_shield.png" alt="">
                <P>为了你的账户安全请及时绑定手机</P>
            </div>
            <div class="input-list">
                <div class="binding-addres">
                    <span class="fl">国家与地区</span>
                    <div class="fr">
                        <span class="fl">中国</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="list-arrow fr">
                    </div>
                </div>
                <div>
                    <span class="iphoneNumber">+86</span>
                    <input type="text" placeholder="手机号">
                    <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose">
                </div>
                <div class="list-code list-last">
                    <input type="text" placeholder="请输入短信验证码">
                    <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose">
                    <span class="forget-code fr">获取验证码</span>
                </div>
            </div>

        </div>
        <div class="change-btn">立即绑定</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isClose: false //清空输入内容
            }
        },
        methods: {
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
    @import "../../assets/sass/setUp/bindingIphone";
</style>