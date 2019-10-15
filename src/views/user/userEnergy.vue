<template>
    <div id="userName">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">设置能量罩</span>
        </header>
        <div class="user-input">
            <div class="user-textarea">
                <textarea placeholder="这家伙很懒，什么都没有写" v-model="energyShield" maxlength="20"
                    @input="descInput"></textarea>
                <p class="user-num" :class='remnant==0?"active":""'><span>{{remnant}}</span>/20</p>
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
                remnant: 0,//数字限制
                energyShield: '',// textarea内容
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            descInput() {
                let txtVal = this.energyShield.length;
                this.remnant = 20 - txtVal;
            },
            //保存
            save() { 
                this.$router.push({
                   name: 'userInfo',
                   query: {energyShield:this.energyShield}
               })
            }
        },
        created() {
            this.$route.query.energyShield ? this.energyShield = this.$route.query.energyShield : '';
            let txtVal = this.energyShield.length;
            this.remnant = 20 - txtVal;
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/userCommon";
</style>