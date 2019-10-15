<template>
    <div id="detail">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
                <img src="../../assets/img/solutionStore/forward.png" alt="" @click="shareWechat">
            
        </header>
        <div class="consultation">
            <ul>
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
                        <span class="fl">3589阅读</span>
                        <span class="fl">245条回复</span>
                        <span class="fr title">「职场」</span>
                    </div>
                </li>
            </ul>
            <div class="details">
                <!-- 个人资料 -->
                <div class="user-info">
                    <img src="../../assets/img/pic.jpg" alt="">
                    <div class="fl">
                        <div>木芯</div>
                        <div>3月24</div>
                    </div>
                </div>
                <!-- 内容 -->
                <div class="text-content">
                    失业一个月了，目前还在继续中…整个人感觉废掉了，每天都在躺尸，今天又投了几份简历，不知道能不能收到面试通知，心情慢慢的从当初的轻松解脱，变成了现在的颓废绝望。
                </div>
                <div class="reward">
                    <div class="top">
                        <p>给作者支持与鼓励</p>
                    </div>
                    <div class="harvest">
                        <div class="left">
                            <p>作者收获：</p>
                            <p>玫瑰花：52朵</p>
                            <p>打赏金额：21元</p>
                            <p>赞言：<span>324条</span></p>
                        </div>
                        <div class="right" @click="appreciation">赏</div>
                    </div>
                </div>
            </div>
            <div class="comment">
                <div class="all">
                    <p>全部评论</p>
                </div>
                <ul>
                    <li>
                        <!-- 个人资料 -->
                        <div class="user-info">
                            <div class="fl">
                                <img src="../../assets/img/pic.jpg" alt="">
                                <div class="fl">
                                    <div>木芯</div>
                                    <div>3月24</div>
                                </div>
                            </div>
                            <div class="fr">3楼</div>
                        </div>
                        <!-- 评论内容 -->
                        <div class="content">
                            上星期被通知裁员，30岁的我除了焦虑，还是焦虑经过这次我知道，人必须认真对待生活工作，做到问心无愧，才不会被生活所辜负！
                        </div>
                        <!-- 点赞 -->
                        <div class="fabulous">
                            <div>
                                <div class="fl m-right" @click="fabulous">
                                    <img v-show="zanNum" src="../../assets/img/solutionStore/zan.png" alt=""
                                        class="zan">
                                    <img v-show="!zanNum" src="../../assets/img/solutionStore/a_zan.png" alt=""
                                        class="zan">
                                    <span>赞</span>
                                </div>
                                <div class="fl reply" @click="showBox">
                                    <img src="../../assets/img/solutionStore/comment.png" alt="" class="comment">
                                    <span>回复</span>
                                </div>
                            </div>
                        </div>
                        <!-- 回复评论 -->
                        <div class="reply-comments">
                            <div>
                                <span>张家哲：</span>
                                上星期被通知裁员，30岁的我除了焦虑，还是焦虑经过这次我知道，人必须认真对待生活工作，做到问心无愧，才不会被生活所辜负
                            </div>
                            <div>
                                <span>张家哲：</span>
                                还是焦虑经过这次我知道，人必须认真对待生活工作，做到问心无愧，才不会被生活所辜负
                            </div>
                            <router-link :to="{path:'/solutionStore/look'}" tag="p" class="look">查看全部6条回复</router-link>
                        </div>
                    </li>
                    <li>
                        <!-- 个人资料 -->
                        <div class="user-info">
                            <div class="fl">
                                <img src="../../assets/img/pic.jpg" alt="">
                                <div class="fl">
                                    <div>木芯</div>
                                    <div>3月24</div>
                                </div>
                            </div>
                            <div class="fr">3楼</div>
                        </div>
                        <!-- 评论内容 -->
                        <div class="content">
                            上星期被通知裁员，30岁的我除了焦虑，还是焦虑经过这次我知道，人必须认真对待生活工作，做到问心无愧，才不会被生活所辜负！
                        </div>
                        <!-- 点赞 -->
                        <div class="fabulous">
                            <div>
                                <div class="fl m-right">
                                    <img src="../../assets/img/solutionStore/zan.png" alt="" class="zan">
                                    <span>赞</span>
                                </div>
                                <div class="fl reply" @click="showBox">
                                    <img src="../../assets/img/solutionStore/comment.png" alt="" class="comment">
                                    <span>回复</span>
                                </div>
                            </div>
                        </div>
                    </li>
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
        <!-- 打赏弹框 -->

        <div class='appreciation' v-if="isShowappreciation">
            <div class="top">
                <p>打赏给作者的人都十分可爱</p>
                <img src="../../assets/img/solutionStore/close.png" alt="" @click="topClose">
            </div>
            <div class="list-pic">
                <div>
                    <img src="../../assets/img/pic.jpg" alt="">
                    <p>玫瑰花</p>
                </div>
                <div>
                    <img src="../../assets/img/pic.jpg" alt="">
                    <p>一块钱</p>
                </div>
                <div>
                    <img src="../../assets/img/pic.jpg" alt="">
                    <p>五块钱</p>
                </div>
                <div>
                    <img src="../../assets/img/pic.jpg" alt="">
                    <p>十块钱</p>
                </div>
            </div>
            <div class="input-item">
                <input type="text" placeholder="送他一段话吧">
            </div>
            <div class="number">
                <div>
                    <span class="reduce">-</span>
                    <span class="num">1</span>
                    <span class="add">+</span>
                </div>

                <button class="btn">发送</button>
            </div>
        </div>
        <div class="b-box" v-if="isShowBox">
            <input type="text" placeholder="说点什么吧...">
            <img src="../../assets/img/solutionStore/expression.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //分享弹框
                isShowShare: false,
                //打赏弹框
                isShowappreciation: false,
                //底部输入框
                isShowBox: false,
                zanNum: true
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
            //打赏弹框
            appreciation() {
                this.isShowappreciation = true
            },
            //关闭打赏弹框
            topClose() {
                this.isShowappreciation = false
            },
            //点击输入框
            showBox() {
                this.isShowBox = true
            },
            //点击切换点赞图片
            fabulous() {
                this.zanNum = !this.zanNum
            },
            //关闭分享弹框
            cancelShare() {
                this.isShowShare = false
            }
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/solutionStore/detail";
</style>