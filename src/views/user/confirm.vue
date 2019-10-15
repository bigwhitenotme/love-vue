<template>
    <div id="confirm">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">确认收货</span>
        </header>
        <div class="content">
            <div class="tishis">
                <img src="../../assets/img/bill/confirm.png" alt="">
                <p>非常感谢您的购买！</p>
            </div>
            <div class="btn">
                <router-link :to="{path:'/user/bill'}" class="continue-btn" tag="div">继续收货</router-link>
                <div class="beturn-btn">返回首页</div>
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
                this.$router.go(-1);
            }

        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/confirm";
</style>