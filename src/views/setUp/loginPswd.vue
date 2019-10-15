<template>
        <div id="loginPswd">
            <header>
                    <div @click='goBack'>
                            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                        </div>
                <span class="head-title">设置</span>
            </header>
            <ul class="setUp-list">
                <router-link class="list-top" tag="li" :to="{path:'/setUp/changePswd'}">
                    <p class="fl">修改密码</p>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </router-link> 
                <router-link class="list-last" tag="li" :to="{path:'/setUp/forgetPswd'}">
                    <p class="fl">忘记密码</p>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </router-link> 
               
            </ul>
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
                }
            },
            created() {
    
            },
        }
    </script>
    <style lang="scss">
        @import "../../assets/sass/common";
        @import "../../assets/sass/setUp/setUp";
    </style>