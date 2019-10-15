<template>
    <div id="changePswd">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">修改密码</span>
        </header>
        <div class="input-content">
            <div class="input-list">
                <img src="../../assets/img/changePswd_1.png" alt="">
                <input type="number" placeholder="旧密码">
                <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose">
            </div>
            <div class="input-list">
                <img src="../../assets/img/changePswd_2.png" alt="">
                <input type="number" placeholder="新密码">
                <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose">
            </div>
            <div class="input-list list-last">
                <img src="../../assets/img/changePswd_3.png" alt="">
                <input type="number" placeholder="确认密码">
                <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose">
            </div>
            <div class="change-btn">保存</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isClose:false //清空输入内容
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
    @import "../../assets/sass/setUp/changePswd";
</style>