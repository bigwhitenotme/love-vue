<template>
    <div id="userName">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">设置个性签名</span>
        </header>
        <div class="user-input">
                <div class="user-textarea">
                    <textarea placeholder="这家伙很懒，什么都没有写" v-model="identitySign" maxlength="30"
                        @input="descInput"></textarea>
                    <p class="user-num" :class='remnant==0?"active":""'><span>{{remnant}}</span>/30</p>
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
                remnant: 0,
                identitySign: '', // textarea内容
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
                this.remnant = 30 - txtVal;
            },
            //保存
            save() { 
                this.$router.push({
                   name: 'userInfo',
                   query: {identitySign:this.identitySign}
               })
            }
        },
        created() {
            this.$route.query.identitySign ? this.identitySign = this.$route.query.identitySign : '';
            let txtVal = this.identitySign.length;
            this.remnant = 30 - txtVal;
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/userCommon";
</style>