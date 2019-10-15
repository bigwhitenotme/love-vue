<template>
    <div id="goodsHome">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">为爱有心</span>
        </header>
        <div class="goods-content">
            <div class="goods-top">
                <div>

                    <ul>

                 

                        <li v-for='(item,index) in tabList' :key='index' :class='activeTab==index?"active":""'
                            @click='changeTab(index)'>{{item.labelValue}}</li>
                    </ul>
                </div>
            </div>
            <!-- 这里是商品列表，循环的 -->
            <div class="goods-list">
                <ul>
                    <router-link :to="{path:'/goods/goodsList',query:{'id':item.id}}" v-for='(item,index) in goodsList'
                        :key="index" tag="li">
                        <p>{{item.title}}</p>
                        <div class="authentication" v-if="item.isAuth">
                            <img src="../../assets/img/goods/authentication.png" alt="">
                            <span>认证</span>
                        </div>
                        <div class="text">
                            {{item.content}}
                        </div>
                        <div class="pic">
                            <div v-for="(val,index) in item.goodsInfo" :key="index"
                                v-if="val.goodsPrice && val.goodsPictureUrl">
                                <img :src="val.goodsPictureUrl" alt="">
                                <div class="price">￥{{val.goodsPrice}}</div>
                            </div>

                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabList: [],//收藏内容
                activeTab: 0,//激活tab
                activeTab2: 0,//第二个模块的选项卡
                goodsList: [],
                goodsInfo: []
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            titleList() {
                let data = {
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,

                }
                this.$http.post('titleList', data, this.callbacktitle);

            },
            callbacktitle(res) {
                this.tabList = res.data.labels;
                //获取标签以后，才能获取商品
                this.getGoods();
            },
            //获取商品列表
            getGoods() {
                let data = {
                    "multiplexingId": this.tabList[this.activeTab].id,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,

                }
                this.$http.post('queryList', data, this.callbackqueryList)

            },
            //获取商品列表的回调
            callbackqueryList(res) {
                this.goodsList = res.data.softWenList;

                //    this.goodsList = res.data.labels;
            },
            //切换标签
            changeTab(index) {
                this.activeTab = index;
                //切换标签以后重新获取商品
                this.getGoods();
            }
        },
        created() {
            this.titleList();
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/goods/goods";
</style>