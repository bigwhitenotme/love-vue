<template>
    <div id="common">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">暂无网络</span>
        </header>
        <div class="tishi">
            <div>
                <img src="../../assets/img/common/Nonetwork.png" alt="">
                <div class="text">
                    <p>无法连接到网络~</p>
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
                this.$router.go(-1);
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