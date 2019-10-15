<template>
    <div>
        <image-clipper ref="clipper" :img="pic" @ok="ok" @cancel='cancel'></image-clipper>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pic: '',//裁剪图片
        }
    },
    created(){
        this.pic = sessionStorage.getItem('portraitUrl');
    },
    methods:{
        //确定裁剪
        ok(data){
            let url = 'data:image/png;base64,' + this.$refs.clipper.getBase64(data);
            this.$http.upload('base', {"imageString": url}, this.callBackUpload)
        },
        //上传图片的回调
        callBackUpload(res){
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
            userInfo.portraitUrl = res.data.url;
            let data = {
                "sourceType": this.$user.sourceType,
                "userName": this.$user.userName,
                "portraitUrl": res.data.url
            }
            this.$http.post('changeUserInfo', data, this.callBackchangeUserInfo);
            sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
        },
        //修改信息的回调
        callBackchangeUserInfo(res){
            this.$router.go(-1);
        },
        //取消裁剪
        cancel(){
            this.$router.go(-1);
        }
    }
}
</script>