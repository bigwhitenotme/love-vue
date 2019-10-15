<template>
    <div id="common">
        <header>
            <div @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
            </div>
            <span class="head-title">爱自己</span>
        </header>
        <div class="tishi_bg">
            <div>
                <img src="../../assets/img/common/tishi_bg.png" alt="">
                <div class="text">
                    <p>抱歉，您访问的页面找不到！</p>
                </div>
                <div class="tishiBtn" @click="goHome">
                    返回首页
                </div>
            </div>
        </div>
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
                window.webGoBackTap();
            },
            goHome() {
                window.webGoBackTap();
            }
        },
        created() {
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/commonTishi";
</style>