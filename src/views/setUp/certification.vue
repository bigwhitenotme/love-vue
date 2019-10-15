<template>
        <div id="certification">
            <header>
                    <div @click='goBack'>
                            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                        </div>
                <span class="head-title">实名认证</span>
            </header>
            <div class="input-content">
                <div class="input-list list-top list-last">
                    <span>姓名</span>
                    <input type="text" placeholder="请输入你的真实姓名">
                    <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose">
                </div>
                <div class="input-list list-top list-last">
                        <span>身份证号</span>
                    <input type="number" placeholder="请输入身份证号">
                    <img src="../../assets/img/changePswd_close.png" alt="" class="close" v-if="isClose">
                </div>
               <p>注:认证信息一经认证，不可修改，请真实填写</p>
                <div class="change-btn">保存</div>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    isClose:false //清空输入内容
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
        @import "../../assets/sass/setUp/changePswd";
    </style>