<template>
    <div id="userName">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">设置名字</span>
        </header>
        <div class="user-input">
            <input type="text" placeholder="请输入姓名" v-model="nickName" maxlength="10">
            <div class="user-save" @click='save'>
                保存
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                nickName: ""//用户昵称
            }
        },
        methods: {
            //保存
            save() {
                this.$router.push({
                    name: 'userInfo',
                    query: { nickName: this.nickName }
                })
            },
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
        },
        created() {
            this.$route.query.nickName ? this.nickName = this.$route.query.nickName : '';
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/userCommon";
</style>