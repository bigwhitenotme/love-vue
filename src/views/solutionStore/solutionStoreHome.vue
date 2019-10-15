<template>
    <div id="solutionStoreHome">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">解忧杂货铺</span>
                <img src="../../assets/img/solutionStore/forward.png" alt="" @click="shareWechat">
        </header>
        <div class="content">
            <router-link :to="{path:'/solutionStore/search'}" tag="div" class="search">
                <img src="../../assets/img/common/search.png" alt="">
                <span>搜索</span>
            </router-link>
            <div class="list">
                <router-link :to="{path:'/solutionStore/solutionStoreDetail'}" tag="div">
                    <img src="../../assets/img/solutionStore/list_1.png" alt="">
                    <p>情感</p>
                </router-link>
                <router-link :to="{path:'/solutionStore/solutionStoreDetail'}" tag="div">
                    <img src="../../assets/img/solutionStore/list_2.png" alt="">
                    <p>职场</p>
                </router-link>
                <router-link :to="{path:'/solutionStore/solutionStoreDetail'}" tag="div">
                    <img src="../../assets/img/solutionStore/list_3.png" alt="">
                    <p>焦虑</p>
                </router-link>
                <router-link :to="{path:'/solutionStore/solutionStoreDetail'}" tag="div">
                    <img src="../../assets/img/solutionStore/list_4.png" alt="">
                    <p>家庭</p>
                </router-link>
            </div>
            <div class="consultation">
                <ul>
                    <router-link :to="{path:'/solutionStore/detail'}" tag="li">
                        <div class="consultation-one">
                            <div class="text">
                                大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...
                            </div>
                            <img src="../../assets/img/pic.jpg" alt="">
                        </div>
                        <div class="consultation-reply">
                            <span class="fl">苏大强</span>
                            <span class="fl">245条回复</span>
                            <span class="fl">3589阅读</span>
                            <span class="fr title">「情感」</span>
                        </div>
                    </router-link>
                    <router-link :to="{path:'/solutionStore/detail'}" tag="li">
                        <div class="consultation-two">
                            <div class="text">
                                都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...
                            </div>
                            <div class="pic">
                                <img src="../../assets/img/pic.jpg" alt="">
                                <img src="../../assets/img/pic.jpg" alt="">
                                <img src="../../assets/img/pic.jpg" alt="">
                            </div>
                        </div>
                        <div class="consultation-reply">
                            <span class="fl">苏大强</span>
                            <span class="fl">245条回复</span>
                            <span class="fl">3589阅读</span>
                            <span class="fr title">「职场」</span>
                        </div>
                    </router-link>
                    <router-link :to="{path:'/solutionStore/detail'}" tag="li">
                        <div class="consultation-three">
                            <div class="text">
                                都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...
                            </div>
                        </div>
                        <div class="consultation-reply">
                            <span class="fl">苏大强</span>
                            <span class="fl">245条回复</span>
                            <span class="fl">3589阅读</span>
                            <span class="fr title">「情感」</span>
                        </div>
                    </router-link>
                    <router-link :to="{path:'/solutionStore/detail'}" tag="li">
                        <div class="consultation-four">
                            <div class="text">
                                都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...
                            </div>
                            <div class="pic">
                                <img src="../../assets/img/pic.jpg" alt="">
                            </div>
                        </div>
                        <div class="consultation-reply">
                            <span class="fl">苏大强</span>
                            <span class="fl">245条回复</span>
                            <span class="fl">3589阅读</span>
                            <span class="fr title">「情感」</span>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
        <!-- 分享弹框 -->
        <mt-popup v-model="isShowShare" position='bottom'>
            <div class='share-list list-border'>
                <div>
                    <img src="../../assets/img/common/wx.png" alt="">
                    <p>微信好友</p>
                </div>
                <div>
                    <img src="../../assets/img/common/pyq.png" alt="">
                    <p>朋友圈</p>
                </div>
                <div>
                    <img src="../../assets/img/common/qq.png" alt="">
                    <p>QQ好友</p>
                </div>
                <div>
                    <img src="../../assets/img/common/wb.png" alt="">
                    <p>微博</p>
                </div>
            </div> 
            <div class="cancel" @click="cancelShare">
                取消
            </div>
        </mt-popup>
        <router-link :to="{path:'/solutionStore/add'}" class="edit" tag="div">
            <img src="../../assets/img/solutionStore/edit.png" alt="">
        </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShowShare: false
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            //分享弹框
            shareWechat() {
                this.isShowShare = true
            },
            //关闭分享弹框
            cancelShare(){
                this.isShowShare = false
            }
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/solutionStore/solutionStore";
</style>