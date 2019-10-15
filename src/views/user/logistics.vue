<template>
    <div id="logistics">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">查看物流</span>
        </header>
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
</style>