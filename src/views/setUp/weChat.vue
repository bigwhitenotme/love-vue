<template>
    <div id="weChat">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">微信号</span>
        </header>
        <div class="user-info">
            <div class="user-text">
                <p>已绑定微信号</p>
                <div class="user-pic">
                    <div class="fl">
                        <div>
                            <img src="../../assets/img/pic.jpg" alt="" class="fl">
                            <div class="fl">
                                <p>木芯</p>
                                <p>微信个人信息</p>
                            </div>
                        </div>
                    </div>
                    <img src="../../assets/img/we_chat_dui.png" alt="" class="fr">
                </div>
            </div>
            <div class="pswd-btn">解除绑定</div>
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
    @import "../../assets/sass/setUp/weChat";
</style>