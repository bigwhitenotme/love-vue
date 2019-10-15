<template>
    <div id="goodsDetail">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
        </header>
        <div class="goods-detail">
            <div class="detail">
                <p class="d-name">{{detail.goodsName}}</p>
                <div class="d-fuwu">
                    <span class="fuwu-left">支持周期订购/可指定日达/提供上门服务</span>
                    <span class="fuwu-right" v-if="detail.isBlast">爆品</span>
                </div>
                <p class="d-text">{{detail.goodsContent}}</p>
                <div class="price">
                    <span class="price-new">{{detail.onsalePrice}}</span>
                    <span class="price-used">{{detail.goodsPrice}}</span>
                </div>
                <div class="d-list">
                    <div>
                        <img src="../../assets/img/goods/dui.png" alt="">
                        <span>客服跟进</span>
                    </div>
                    <div>
                        <img src="../../assets/img/goods/dui.png" alt="">
                        <span>破损赔付</span>
                    </div>
                    <div>
                        <img src="../../assets/img/goods/authentication.png" alt="">
                        <span>实地认证</span>
                    </div>
                </div>
            </div>
            <!-- 促销 -->
            <div class="romotion">
                <div class="fl romotion-left">促销</div>
                <div class="fl romotion-right">
                    <div class="top">
                        <span class="fl">赠送</span>
                        <p class="fl">新用户首单赠送价值59元MINPLUS广口花瓶*2个 新用户首单赠送价值59元MINPLUS广口花瓶*2个</p>
                    </div>
                    <div class="bottom">
                        <span class="fl">加购</span>
                        <p class="fl">新用户首单赠送价值59元MINPLUS广口花瓶*2个</p>
                    </div>
                </div>
            </div>
            <div class="pic-bg">
                <img :src="detail.pictureDetail" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                detail: {},

            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            getDetail() {
                let data = {
                    "id": this.id,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                }
                this.$http.post('details', data, this.callbackdetails)

            },
            //获取商品列表的回调
            callbackdetails(res) {
                console.log(res)
                this.detail = res.data
            },
        },
        created() {
            this.$route.query.id ? this.id = this.$route.query.id : '';
            this.getDetail()
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/goods/goodsDetail";
</style>