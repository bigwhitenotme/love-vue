<template>
        <div id="problemDetail">
            <header>
                    <div @click='goBack'>
                            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                        </div>
                <span class="head-title">{{detail.nav}}</span>
            </header>
            <div>
                <p v-html='detail.title'></p>
                <p v-html="detail.content"></p>
            </div>
        </div>
    </template>
    <script>
        import problem from '../../assets/json/problem.json';
        export default {
            data() {
                return {
                    detail:{}//问题详情
                }
            },
            methods: {
                //返回上一级
                goBack() {
                    this.$router.go(-1);
                }
            },
            created() {
                let id = this.$route.query.id;
                let problemList = problem;
                problemList.forEach(val => {
                    val.id == id ? this.detail = val : '';
                });
            },
        }
    </script>
    <style lang="scss">
        @import "../../assets/sass/common";
        @import "../../assets/sass/user/problemDetail";
    </style>