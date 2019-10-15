<template>
    <div id="userName">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">设置头像</span>
        </header>
        <div class="user-input user-content user-pic-detail">
            <div class="user-pic">
                <img :src="portraitUrl" alt="">
            </div>
            <div class="user-button">
                <div class="user-photo">从相册选一张</div>
                <input type="file" @change='uploadFile($event)'>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                portraitUrl: '',//头像地址
                pic: ''//上传图片
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            //裁剪图片
            uploadFile(e) {
                let file = e.target.files[0];
                var reader = new FileReader()
                reader.onload = (e) => {
                    let data
                    data = e.target.result
                    this.pic = data
                    sessionStorage.setItem('portraitUrl', data);
                    this.$router.push({ name: 'userPicClipper' })
                }
                reader.readAsDataURL(file)
            }
        },
        created() {
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
            this.portraitUrl = userInfo.portraitUrl;
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/userCommon";
</style>