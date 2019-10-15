<template>
    <div id="sureDelete">
        <div class="delete-box">
            <p>确定要删除吗</p>
            <div class="btn-box">
                <p class="cancel" @click='cancelDelete'>取消</p>
                <p class="sure" @click='sureDelete'>确认</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            //取消删除弹框
            cancelDelete(){
                this.$emit('cancelDelete',true)
            },
            //确定删除
            sureDelete(){
                this.$emit('sureDelete',true)
            }
        },
    }
</script>
<style lang="scss">
    @import "../assets/sass/common";
    @import "../assets/sass/components/sureDelete";
</style>