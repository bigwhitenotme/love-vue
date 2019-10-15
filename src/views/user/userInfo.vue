<template>
    <div id="userInfo">
        <header>
                <div  @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left">
                    </div>
                   
            <span class="head-title">个人信息</span>
            <span class="head-right" @click="save">保存</span>
        </header>
        <div class="user-list">
            <router-link :to="{path:'/user/userPic'}" tag="div" class="user-pic">
                <img :src="portraitUrl" alt="">
            </router-link>
            <ul>
                <router-link :to="{path:'/user/userName?nickName='+nickName}" tag="li">
                    <p class="fl">名字</p>
                    <div class="fr">
                        <span class="fl">{{filterLength(nickName)}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </router-link>
                <router-link :to="{path:'/user/userSexual?genderID='+genderID}" tag="li">
                    <p class="fl">性别</p>
                    <div class="fr">
                        <span class="fl">{{gender}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </router-link>
                <router-link :to="{path:'/user/userSignature?identitySign='+identitySign}" tag="li">
                    <p class="fl">个性签名</p>
                    <div class="fr">
                        <span class="fl text-number">{{filterLength(identitySign)}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </router-link>
                <li @click='openDate'>
                    <p class="fl">生日</p>
                    <div class="fr">
                        <span class="fl">{{dateBirthText}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </li>
                <li>
                    <p class="fl">手机号</p>
                    <div class="fr">
                        <span class="fl">{{phoneNumber}}</span>
                    </div>
                </li>
                <router-link :to="{path:'/user/userEnergy?energyShield='+energyShield}" tag="li">
                    <p class="fl">能量罩</p>
                    <div class="fr">
                        <span class="fl text-number">{{filterLength(energyShield)}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </router-link>
                <router-link :to="{path:'/user/userAddress'}" tag="li">
                    <p class="fl">我的地址</p>
                    <div class="fr">
                        <span class="fl"></span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </router-link>
            </ul>
            <div class="hobby">
                <ul class="top">
                    <li 
                        v-for='(item,index) in hobbyList' 
                        :key='item.id'
                        v-show='index%2 == 0'
                        :class='item.isAdd?"active":""'
                        @click='item.isAdd = !item.isAdd'
                    >{{item.labelName}}</li>
                </ul>
                <ul class="bottom">
                    <li 
                        v-for='(item,index) in hobbyList' 
                        :key='item.id'
                        v-show='index%2 == 1'
                        :class='item.isAdd?"active":""'
                        @click='item.isAdd = !item.isAdd'
                    >{{item.labelName}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userName:this.$user.userName,//手机号
                phoneNumber: "",//手机号
                nickName: "",//用户昵称
                gender: "",//性别
                genderID: 1,//1男2女
                energyShield: '',//能量罩
                identitySign: "",//个性签
                hobbyList: [],//爱好列表
                portraitUrl: '',//头像
                dateBirth: '',//生日
                dateBirthText: '',//生日显示
            }
        },
        methods: {
            //保存个人信息
            save() {
                let ids = [];
                let list = this.hobbyList;
                list.forEach(val => {
                    val.isAdd ? ids.push(val.id) : '';
                });
                let changeUserInfo = {
                    "nickName":this.nickName,
                    "gender":this.genderID,
                    "identitySign":this.identitySign,
                    "energyShield": this.energyShield,
                    "sourceType": this.$user.sourceType,
                    "userName": this.userName,
                    "hobbyIds": ids.join(','),
                    "dateBirth": this.dateBirth
                }
                this.$http.post('changeUserInfo', changeUserInfo, this.callBackchangeUserInfo)
            },
            //修改个人信息回调函数
            callBackchangeUserInfo(res){
                this.$router.push({
                    name: 'user'
                })
            },
            //返回上一级
            goBack() {
                this.$router.push({
                    name: 'user'
                })
            },
            //过长省略
            filterLength(str) {
                return this.$fun.addEllipsis(200, 17, str)
            },
            //获取生日
            getdateBirth(dateBirth){
                this.dateBirth = dateBirth;
                let arr = dateBirth.split('-');
                this.dateBirthText = arr[0] + '年' + arr[1] + '月' + arr[2] + '日';
            },
            //打开日历
            openDate(){
                window.showDatePickerDialog();
            }
        },
        created() {
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
            this.$route.query.nickName ? userInfo.nickName = this.$route.query.nickName : '';//修改当前昵称
            //修改当前性别
            if (this.$route.query.genderID) {
                userInfo.gender = this.$route.query.genderID;
            };
            //修改能量罩
            this.$route.query.energyShield ? userInfo.energyShield = this.$route.query.energyShield : '';
            //修改个性签名
            this.$route.query.identitySign ? userInfo.identitySign = this.$route.query.identitySign : '';
            this.nickName = userInfo.nickName;
            if (userInfo.gender == 1) {
                this.gender = '男';
            } else if (userInfo.gender == 2) {
                this.gender = '女';
            }
            this.genderID = userInfo.gender;
            this.energyShield = userInfo.energyShield;
            this.identitySign = userInfo.identitySign;
            this.hobbyList = userInfo.hobbyList;
            this.portraitUrl = userInfo.portraitUrl;
            this.dateBirth = userInfo.dateBirth;
            this.phoneNumber = userInfo.phoneNumber;
            let arr = userInfo.dateBirth.split('-');
            this.dateBirthText = arr[0] + '年' + arr[1] + '月' + arr[2] + '日';
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            
        },
        mounted() {
            window.getDate = this.getdateBirth;
        }
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/userInfo";
</style>