<template>
        <div id="searchContent">
            <div class="search">
                <div class="fl">
                    <img src="../../assets/img/common/search.png" alt="">
                    <span>搜索</span>
                </div>
                <span class="fr" @click="cancel">取消</span>
            </div>
            <div class="consultation">
                <div>与“单身”相关的帖子</div>
                    <ul>
                        <li>
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
                                <span class="fr title">情感</span>
                            </div>
                        </li>
                        <li>
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
                                <span class="fr title">情感</span>
                            </div>
                        </li>
                        <li>
                            <div class="consultation-three">
                                <div class="text">
                                    都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...
                                </div>
                            </div>
                            <div class="consultation-reply">
                                <span class="fl">苏大强</span>
                                <span class="fl">245条回复</span>
                                <span class="fl">3589阅读</span>
                                <span class="fr title">情感</span>
                            </div>
                        </li>
                        <li>
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
                                <span class="fr title">情感</span>
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
                    isShowShare: false
                }
            },
            methods: {
                //返回上一级
                goBack() {
                    this.$router.go(-1);
                },
                //点击取消
                cancel(){
                    this.$router.go(-1);
                }
    
            },
            created() {
    
            },
        }
    </script>
    <style lang="scss">
        @import "../../assets/sass/common";
        @import "../../assets/sass/solutionStore/searchContent";
    </style>