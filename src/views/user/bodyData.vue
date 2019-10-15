<template>
    <div id="bodyData">
        <header>
            <div @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left">
            </div>
            <span class="head-title">身体数据</span>
        </header>
        <ul class="user-list">
            <li class="list-top">
                <p class="fl">步数</p>
                <div class="fr">
                    <span class="fl colorblack list-right">0步</span>
                </div>
            </li>
            <li @click="heightCartridge">
                <p class="fl">身高</p>
                <div class="fr">
                    <span class="fl">{{height}}cm</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </li>
            <li class="list-line list-last" @click="weightCartridge">
                <p class="fl">体重</p>
                <div class="fr">
                    <span class="fl">{{weight}}Kg</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </li>
            <li>
                <p class="fl">睡眠时长</p>
                <div class="fr">
                    <span class="fl colorblack list-right">8h</span>
                </div>
            </li>
            <li class="blood-pressure" @click="BloodPressureCartridge">
                <p class="fl">血压</p>
                <div class="fr">
                    <div class="fl">
                        <span class="tall">{{bloodPressureLow}}mmHg</span>
                        <span class="lowlet">{{bloodPressureHigh}}mmHg</span>
                    </div>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </li>
            <li class="list-line list-last" @click="BloodSugarCartridge">
                <p class="fl ">血糖</p>
                <div class="fr">
                    <span class="fl">{{bloodSugar}} mmol/L</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </li>
            <router-link :to="{path:'/user/monthTime',query:{'value1':illLength,'value2':illCycle,'value3':illLately}}"
                tag="li" class="list-last" v-if='gender==2'>
                <p class="fl">生理期</p>
                <div class="fr">
                    <span class="fl colorblack">{{feelIll}}号</span>
                    <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                </div>
            </router-link>

        </ul>
        <!-- 输入血糖弹框 -->
        <div id="sureData" v-if="isBloodSugar">
            <div class="data-box">
                <p>请输入当前血糖</p>
                <div class="blood-sugar">
                    <input type="number" v-model='bloodSugar'>
                    <span>mmol/L</span>
                </div>
                <div class="btn-box">
                    <div class="bloodSugar-cancel" @click="bloodSugarCancel">取消</div>
                    <div class="bloodSugar-sure" @click="bloodSugarSave">保存</div>
                </div>
            </div>
        </div>
        <!-- 输入身高 -->
        <div id="sureHeight" v-if="isHeight">
            <div class="height-box">
                <p>请输入当前身高</p>
                <div class="height-data">
                    <input type="number" v-model="height">
                    <span>cm</span>
                </div>
                <div class="btn-box">
                    <div class="sure-cancel" @click="heightCancel">取消</div>
                    <div class="next-step" @click="nextStep">下一步</div>
                </div>
            </div>
        </div>
        <!-- 输入体重 -->
        <div id="sureWeight" v-if="isWeight">
            <div class="weight-box">
                <p>请输入当前体重</p>
                <div class="weight-data">
                    <input type="number" v-model="weight">
                    <span>Kg</span>
                </div>
                <div class="btn-box">
                    <div class="weight-sure-cancel" @click="weightCancel">取消</div>
                    <div class="weight-sure" @click="weightSave">保存</div>
                </div>
            </div>
        </div>
        <!-- 输入当前血压 -->
        <div id="sureBloodPressure" v-if="isBloodPressure">
            <div class="Blood-pressure-box">
                <p>请输入当前血压</p>
                <div class="Blood-pressure-data">
                    <span>收缩压</span>
                    <input type="number" v-model="bloodPressureLow">
                    <span>mmHg</span>
                </div>
                <div class="Blood-pressure-data data-bottom">
                    <span>舒张压</span>
                    <input type="number" v-model="bloodPressureHigh">
                    <span>mmHg</span>
                </div>
                <div class="btn-box">
                    <div class="Blood-pressure-cancel" @click="BloodPressureCancel">取消</div>
                    <div class="Blood-pressure-sure" @click="BloodPressureSave">保存</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                height: '',//身高
                weight: '',//体重
                bloodPressure: '',//血压
                bloodPressureLow: '',//低血压
                bloodPressureHigh: '',//高血压
                bloodSugar: '',//血糖
                feelIll: '',//生理期
                isBloodSugar: false,//血糖
                isHeight: false,//身高
                isWeight: false,//体重
                isBloodPressure: false,//血压
                illCycle: '',//周期长度
                illLength: '',//经期长度
                illLately: '',//最近一次月经日期
                gender:0,//1男2女
            }
        },
        methods: {
            //点击身高弹框
            heightCartridge() {
                this.isHeight = true
            },
            weightCartridge() {
                this.isHeight = true
            },
            // 点击下一步关闭当前弹框，用户体重弹框出现
            nextStep() {
                this.isHeight = false;
                this.isWeight = true
            },
            //点击关闭身高弹框
            heightCancel() {
                this.isHeight = false;
            },
            //点击关闭身高体重弹框
            weightCancel() {
                this.isHeight = false;
                this.isWeight = false
            },
            //修改身高体重数据
            weightSave() {
                this.isHeight = false;
                this.isWeight = false
                this.changeInfo();
            },
            //点击血糖弹框显示
            BloodSugarCartridge() {
                this.isBloodSugar = true
            },
            //点击血糖弹框关闭
            bloodSugarCancel() {
                this.isBloodSugar = false
            },
            //点击保存血糖数据
            bloodSugarSave() {
                this.isBloodSugar = false
                this.changeInfo();
            },
            //点击血压显示弹框
            BloodPressureCartridge() {
                this.isBloodPressure = true
            },
            //点击关闭血压弹框
            BloodPressureCancel() {
                this.isBloodPressure = false
            },
            //修改血压数据
            BloodPressureSave() {
                this.isBloodPressure = false
                this.changeInfo();
            },
            //返回上一级
            goBack() {
                this.$router.push('/user/user');
            },
            //获取身体数据回调函数
            callBackbodyData(res) {
                console.log(res)
                this.height = res.data.height;
                this.weight = res.data.weight;
                this.bloodPressure = res.data.bloodPressure;
                this.bloodPressureLow = res.data.bloodPressure.split('/')[1];
                this.bloodPressureHigh = res.data.bloodPressure.split('/')[0];
                this.bloodSugar = res.data.bloodSugar;
                this.illCycle = res.data.illCycle;
                this.illLength = res.data.illLength;
                this.illLately = res.data.illLately;
                this.feelIll = parseInt(this.illLately.split('-')[2]);
                if (this.$route.query.isChange) {
                    this.illLength = this.$route.query.value1;
                    this.illCycle = this.$route.query.value2;
                    this.illLately = this.$route.query.value3;
                    this.feelIll = parseInt(this.illLately.split('-')[2]);
                    this.changeInfo();
                }
            },
            //修改资料
            changeInfo() {
                let changeBodyData = {
                    "bloodPressure": this.bloodPressureLow + '/' + this.bloodPressureHigh,
                    "bloodSugar": this.bloodSugar,
                    "height": this.height,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                    "weight": this.weight,
                    "illLength": this.illLength,
                    "illCycle": this.illCycle,
                    "illLately": this.illLately
                }
                this.$http.post('changeBodyData', changeBodyData, this.callBackChangeInfo)
            },
            //修改资料的回调
            callBackChangeInfo() { },
            
        },
        created() {
            //获取个人信息
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
            this.gender = userInfo.gender;
            let data = {
                "sourceType": this.$user.sourceType,
                "userName": this.$user.userName,
            }
            this.$http.post('bodyData', data, this.callBackbodyData)
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/bodyData";
</style>