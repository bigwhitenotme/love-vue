<template>
    <div id="problem">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">常见问题</span>
        </header>
        <ul class="problem-list">
            <router-link :to="{path:'/user/problemDetail',query: {id:item.id}}" v-for="(item,index) in problemList" :key='index' tag="li">
                <p>{{item.title}}</p>
                <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
            </router-link>
        </ul>
    </div>
</template>
<script>
    import problem from '../../assets/json/problem.json';
    export default {
        data() {
            return {
                problemList: []//问题清单
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            }
        },
        created() {
            this.problemList = problem;
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/problem";
</style>