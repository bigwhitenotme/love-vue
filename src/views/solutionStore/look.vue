<template>
    <div id="look">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">二楼的回复</span>
        </header>
        <div class="consultation">

            <div class="details">
                <!-- 个人资料 -->
                <div class="user-info">
                    <img src="../../assets/img/pic.jpg" alt="">
                    <div class="user fl">
                        <div>木芯</div>
                        <div>3月24</div>
                    </div>
                    <div class="fr right">2楼</div>
                </div>
                <!-- 内容 -->
                <div class="text-content">
                    失业一个月了，目前还在继续中…整个人感觉废掉了，每天都在躺尸，今天又投了几份简历，不知道能不能收到面试通知，心情慢慢的从当初的轻松解脱，变成了现在的颓废绝望。
                </div>

            </div>
            <div class="comment">
                <div class="all">
                    <p>全部回复</p>
                </div>
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <!-- 个人资料 -->
                        <div class="user-info">
                            <div class="fl">
                                <img src="../../assets/img/pic.jpg" alt="">
                                <div class="fl">
                                    <div>{{item.name}}</div>
                                    <div>{{item.time}}</div>
                                </div>
                            </div>

                            <div class="fr">
                                <span>433</span>
                                <img v-show="!item.zanNum" src="../../assets/img/solutionStore/zan.png" alt="" class="zan"
                                    @click="fabulous(index)">
                                <img v-show="item.zanNum" src="../../assets/img/solutionStore/a_zan.png" alt="" class="zan"
                                    @click="fabulous(index)">

                            </div>
                        </div>
                        <!-- 评论内容 -->
                        <div class="content">
                            {{item.content}}
                        </div>
                    </li>
                </ul>
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
                // 分享弹框
                isShowShare: false,
                // 打赏弹框
                isShowappreciation: false,
                //输入框
                isShowBox: true,
                list: [
                    {
                        name: '木芯',
                        time: '3月24',
                        content: "上星期被通知裁员，30岁的我除了焦虑，还是焦虑经过这次我知道，人必须认真对待生活工作，做到问心无愧，才不会被生活所辜负！",
                        zanNum: false
                    }, {
                        name: '木头',
                        time: '5月13',
                        content: "上星期被通知裁员，30岁的我除了焦虑，还是焦虑经过这次我知道，人必须认真对待生活工作，做到问心无愧，才不会被生活所辜负！",
                        zanNum: false
                    }, {
                        name: '多多',
                        time: '2月13',
                        content: "上星期被通知裁员，30岁的我除了焦虑，还是焦虑经过这次我知道，人必须认真对待生活工作，做到问心无愧，才不会被生活所辜负！",
                        zanNum: false
                    }
                ]
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
            //点击切换点赞图片
            fabulous(index) {
                this.$set(this.list[index],'zanNum',!this.list[index].zanNum)
            }
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/solutionStore/look";
</style>