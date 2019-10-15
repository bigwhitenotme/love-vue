<template>
    <div id="userName">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">设置性别</span>
        </header>
        <div class="user-input">
            <div @click='genderID=1' class="user-sxeual">
                <span class="fl">男</span>
                <img src="../../assets/img/feel_note_active_check_list.png" alt="" class="fr" v-if='genderID == 1'>
                <img src="../../assets/img/feel_note_check_list.png" alt="" class="fr" v-if='genderID == 2'>
            </div>
            <div @click='genderID=2' class="user-sxeual">
                <span class="fl">女</span>
                <img src="../../assets/img/feel_note_active_check_list.png" alt="" class="fr" v-if='genderID == 2'>
                <img src="../../assets/img/feel_note_check_list.png" alt="" class="fr" v-if='genderID == 1'>
            </div>
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
                genderID: 1//1男2女
            }
        },
        methods: {
            //保存
            save() {
                this.$router.push({
                    name: 'userInfo',
                    query: { genderID: this.genderID }
                })
            },
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
        },
        created() {
            this.$route.query.genderID ? this.genderID = this.$route.query.genderID : '';
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/userCommon";
</style>