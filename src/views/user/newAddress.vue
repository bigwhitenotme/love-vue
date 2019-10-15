<template>
    <div id="newAddress">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">新增地址</span>
        </header>
        <div class="input-content">
            <div class="input-list">
                <span>姓名：</span>
                <input type="text" placeholder="请输入姓名">
            </div>
            <div class="input-list list-code">
                <span>手机：</span>
                <input type="number" placeholder="请输入手机号">
                <!-- <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose"> -->
                <span class="forget-code fl">获取验证码</span>
            </div>
            <div class="input-list">
                <span>地区：</span>
                <input type="text" placeholder="请选择地区">
                <div>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </div>
            <div class="input-list list-last">
                <span>地址：</span>
                <input type="text" placeholder="请输入地址">
                <div>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </div>
            <div class="input-item input-m">
                <span class="remind-text">设为默认地址</span>
                <mt-switch v-model="value"></mt-switch>
            </div>
            <div class="change-btn active">保存</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: true,//是否提醒
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/setUp/changePswd";
    @import "../../assets/sass/user/newAddress";
</style>