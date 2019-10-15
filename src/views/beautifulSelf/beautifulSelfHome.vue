<template>
    <div id="beautifulSelfHome">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">美美的自己</span>

            <img src="../../assets/img/beautifulSelf/h_right.png" alt="">

        </header>
        <div class="banner">
            <img src="../../assets/img/pic.jpg" alt="">
        </div>
        <div class="content-list">
            <ul>
                <li>
                    <img src="../../assets/img/pic.jpg" alt="" class="fl">
                    <div class="fl">
                        <div class="text">
                            大牌明星都在练的懒人瘦身法，每个 人都可以
                        </div>
                        <div class="pay">
                            <span class="fl num">200人已购</span>
                            <span class="fr money"> <span>￥</span> 299.00</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/pic.jpg" alt="" class="fl">
                    <div class="fl">
                        <div class="text">
                            大牌明星都在练的懒人瘦身法，每个 人都可以
                        </div>
                        <div class="pay">
                            <span class="fl num">200人已购</span>
                            <span class="fr money"> <span>￥</span> 299.00</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/pic.jpg" alt="" class="fl">
                    <div class="fl">
                        <div class="text">
                            大牌明星都在练的懒人瘦身法，每个 人都可以
                        </div>
                        <div class="pay">
                            <span class="fl num">200人已购</span>
                            <span class="fr money"> <span>￥</span> 299.00</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/pic.jpg" alt="" class="fl">
                    <div class="fl">
                        <div class="text">
                            大牌明星都在练的懒人瘦身法，每个 人都可以
                        </div>
                        <div class="pay">
                            <span class="fl num">200人已购</span>
                            <span class="fr money"> <span>￥</span> 299.00</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/pic.jpg" alt="" class="fl">
                    <div class="fl">
                        <div class="text">
                            大牌明星都在练的懒人瘦身法，每个 人都可以
                        </div>
                        <div class="pay">
                            <span class="fl num">200人已购</span>
                            <span class="fr money"> <span>￥</span> 299.00</span>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/img/pic.jpg" alt="" class="fl">
                    <div class="fl">
                        <div class="text">
                            大牌明星都在练的懒人瘦身法，每个 人都可以
                        </div>
                        <div class="pay">
                            <span class="fl num">200人已购</span>
                            <span class="fr money"> <span>￥</span> 299.00</span>
                        </div>
                    </div>
                </li>
            </ul>
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
            },
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/beautifulSelf/beautifulSelfHome";
</style>