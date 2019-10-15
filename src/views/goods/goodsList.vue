<template>
    <div id="goodsList">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">心意攻略</span>
        </header>
        <div class="goods-content">
            <div class="top">
                <div class="top-title">{{detail.title}}</div>
                <p class="line"></p>
                <div class="top-content">{{detail.content}}</div>
            </div>
            <ul>
                <li v-for="(item,index) in detail.passageList" :key="index" v-if='detail.passageList'>
                    <div class="list-tltle"> {{item.head}}</div>
                    <div class="list-fuwu">{{item.goodsSonTitle}}</div>
                    <div class="list-news">
                        <span v-if="item.isBlast">爆品</span>
                        <span v-if="item.isBestSeller">畅销</span>
                        <span v-if="item.isNew">新品</span>
                    </div>
                    <img :src="item.pictureUrl" alt="">
                    <div class="list-content">{{item.content}}</div>
                    <div class="list-price">
                        <span class="fl">￥{{item.goodsPrice}}</span>
                        <router-link :to="{path:'/goods/goodsDetail',query:{'id':item.id}}" tag="div" class="fr">查看详情
                        </router-link>
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
                detail: {},

            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            getGoods() {
                let data = {
                    "multiplexingId": this.id,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,

                }
                this.$http.post('queryOne', data, this.callbackqueryList)

            },
            //获取商品列表的回调
            callbackqueryList(res) {
                this.detail = res.data;
            },

        },
        created() {
            this.$route.query.id ? this.id = this.$route.query.id : '';
            this.getGoods();
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/goods/goodsList";
</style>