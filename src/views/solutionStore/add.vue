<template>
    <div id="add">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-right">发布</span>
        </header>
        <div class="content">
            <form>
                <div class="title">
                    <textarea name="title" id="title" placeholder="请添加标题" v-model="identitySign" maxlength="50"
                        @input="descInput"></textarea>
                    <p class="user-num" :class='remnant==0?"active":""'><span>{{remnant}}</span>/50</p>
                </div>
                <div class="text">
                    <textarea name="text" id="text" placeholder="请输入正文"></textarea>
                </div>
                <!-- 上传图片 -->
                <div class="pic">
                    <div class="add-pic">
                        <div v-for="(item,index) in list" :key="index">
                            <img :src="item.pic" alt="" >
                            <div class="cancle" @click="deletePic">
                                <img :src="item.close" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="add">
                        <img src="../../assets/img/solutionStore/add.png" alt="">
                        <p>添加照片</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import close from "../../assets/img/solutionStore/cancel.png";
    import pic from "../../assets/img/pic.jpg"
    export default {
        
        data() {
            return {
                remnant: 0,
                identitySign: '', // textarea内容
                pic,
                close,
                // 图片列表
                list:[
                    {
                        close,
                        pic
                    }, {
                        close,
                        pic
                    }, {
                        close,
                        pic
                    }
                ]
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            //限制输入字数
            descInput() {
                let txtVal = this.identitySign.length;
                this.remnant = 50 - txtVal;
            },
            //删除当前选择图片
            deletePic(index){
                this.list.splice(index,1)
            }
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/solutionStore/add";
</style>