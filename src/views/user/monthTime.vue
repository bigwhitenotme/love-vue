<template>
    <div id="monthTime">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">生理期</span>
        </header>
        <div class="time-content">
            <div>
                <p>你的月经大概持续几天?</p>
                <div class="time-list" @click='showDay1'>
                    <p class="fl ">经期长度</p>
                    <div class="fr">
                        <span class="fl">{{value1}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </div>
            </div>
            <div>
                <p>两次月经日期开始日大概间隔多久?</p>
                <div class="time-list" @click='showDay2'>
                    <p class="fl ">周期长度</p>
                    <div class="fr">
                        <span class="fl">{{value2}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </div>
            </div>
            <div>
                <p>最近一次月经大概是哪天来的?</p>
                <div class="time-list" @click='showDay3'>
                    <p class="fl ">最近一次月经</p>
                    <div class="fr">
                        <span class="fl">{{value3}}</span>
                        <img src="../../assets/img/user_arrow.png" alt="" class="fr list-arrow">
                    </div>
                </div>
            </div>
        </div>
        <div class="day-picker" v-show="showChoose">
            <van-picker v-show='day1Show' show-toolbar :title="title" :columns="day1" @cancel="onCancel"
                @confirm="changeDay1" :default-index="startIndex1" />
            <van-picker v-show='day2Show' show-toolbar :title="title" :columns="day2" @cancel="onCancel"
                @confirm="changeDay2" :default-index="startIndex2" />
            <van-datetime-picker v-show='day3Show' v-model="dayvalue" :title="title" type="date" @cancel="onCancel"
                @confirm="changeDay3" :formatter="formatter" />
        </div>
    </div>
</template>
<script>
    import { Picker } from 'vant';
    import { DatetimePicker } from 'vant';
    export default {
        data() {
            return {
                pickerVisible: true,//是否显示选择器
                day1: ['1天', '2天', '3天', '4天', '5天', '6天', '7天', '8天', '9天', '10天'],//经期长度选择器
                day2: ['1天', '2天', '3天', '4天', '5天', '6天', '7天', '8天', '9天', '10天', '11天', '12天', '13天', '14天', '15天', '16天', '17天', '18天', '19天', '20天', '21天', '22天', '23天', '24天', '25天', '26天', '27天', '28天', '29天', '30天', '31天', '32天', '33天', '34天', '35天', '36天', '37天', '38天', '39天', '40天'],//周期长度选择器
                showChoose: false,//选择显示选择器
                day1Show: false,//经期长度显示
                day2Show: false,//周期长度显示
                day3Show: false,//最近一次月经显示
                title: '',//选择器头部
                value1: '',//经期长度值
                value2: '',//周期长度值
                value3: '',//最近一次月经日期值
                dayvalue: new Date(),//选择日期默认值
                startIndex1: 0,//经期长度选择开始日期
                startIndex2: 0,//周期长度选择开始日期
            }
        },
        methods: {
            //返回上一级
            goBack() {
                if (this.value1 || this.value2 || this.value3) {
                    let num1 = parseInt(this.value1);
                    let num2 = parseInt(this.value2);
                    this.$router.push({
                        'path': '/user/bodyData',
                        'query': {
                            'isChange': true,
                            'value1': num1,
                            'value2': num2,
                            'value3': this.value3,
                        }
                    })
                }
            },
            //选择经期长度
            changeDay1(value) {
                this.value1 = value;
                this.onCancel();
            },
            //选择周期长度
            changeDay2(value) {
                this.value2 = value;
                this.onCancel();
            },
            //选择最近一次月经
            changeDay3(value) {
                this.value3 = this.$fun.getDate(value);
                this.onCancel();
            },
            //经期长度显示
            showDay1() {
                this.showChoose = true;
                this.day1Show = true;
                this.title = '选择经期长度';
            },
            //周期长度显示
            showDay2() {
                this.showChoose = true;
                this.day2Show = true;
                this.title = '选择周期长度';
            },
            //最近一次月经显示
            showDay3() {
                this.showChoose = true;
                this.day3Show = true;
                this.title = '最近一次经期开始日期';
            },
            //取消经期弹窗
            onCancel() {
                this.showChoose = false;
                this.day1Show = false;
                this.day2Show = false;
                this.day3Show = false;
            },
            //处理数据
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`;
                } else if (type === 'month') {
                    return `${value}月`
                } else if (type === 'day') {
                    return `${value}日`
                }
                return value;
            }
        },
        components: {
            Picker,
            DatetimePicker
        },
        created() {
            this.value1 = this.$route.query.value1 + '天';
            this.value2 = this.$route.query.value2 + '天';
            this.value3 = this.$route.query.value3;
            parseInt(this.$route.query.value1) ? this.startIndex1 = parseInt(this.$route.query.value1) - 1 : this.startIndex1 = 6;
            parseInt(this.$route.query.value2) ? this.startIndex2 = parseInt(this.$route.query.value2) - 1 : this.startIndex2 = 27;
            if (this.$route.query.value3) {
                let num = this.$route.query.value3;
                let timestamp = new Date(num);
                this.dayvalue = timestamp;
            } else {
                this.dayvalue = new Date();
            }
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/monthTime";
</style>