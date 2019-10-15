<template>
    <div id="bill">
        <header>
                <div  @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left">
                    </div>
            <span class="head-title">订单管理</span>
        </header>
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">全部</mt-tab-item>
            <mt-tab-item id="2">待付款</mt-tab-item>
            <mt-tab-item id="3">待发货</mt-tab-item>
            <mt-tab-item id="4">待收货</mt-tab-item>
            <mt-tab-item id="5">已完成</mt-tab-item>
            <mt-tab-item id="6">已取消</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell>
                    <ul>
                        <li>
                            <div class="number">
                                <span class="fl">订单编号：0000000000000</span>
                                <span class="fr gray">已取消</span>
                            </div>
                            <div class="bill">
                                <img src="" alt="" class="fl">
                                <div class="fl content">
                                    <p class="text">
                                        玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金
                                    </p>
                                    <div class="Specifications">
                                        <span>颜色:玫瑰金</span>
                                        <span>尺寸:20cm</span>
                                    </div>
                                    <div class="money">
                                        <span class="fl">￥999</span>
                                        <span class="fr">1</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="number">
                                <span class="fl">订单编号：0000000000000</span>
                                <span class="fr gray">待发货</span>
                            </div>
                            <div class="bill">
                                <img src="" alt="" class="fl">
                                <div class="fl content">
                                    <p class="text">
                                        玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金
                                    </p>
                                    <div class="Specifications">
                                        <span>颜色:玫瑰金</span>
                                        <span>尺寸:20cm</span>
                                    </div>
                                    <div class="money">
                                        <span class="fl">￥999</span>
                                        <span class="fr">1</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="number">
                                <span class="fl">订单编号：0000000000000</span>
                                <span class="fr green">已完成</span>
                            </div>
                            <div class="bill">
                                <img src="" alt="" class="fl">
                                <div class="fl content">
                                    <p class="text">
                                        玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金
                                    </p>
                                    <div class="Specifications">
                                        <span>颜色:玫瑰金</span>
                                        <span>尺寸:20cm</span>
                                    </div>
                                    <div class="money">
                                        <span class="fl">￥999</span>
                                        <span class="fr">1</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="number">
                                <span class="fl">订单编号：0000000000000</span>
                                <span class="fr red">待付款</span>
                            </div>
                            <div class="bill">
                                <img src="" alt="" class="fl">
                                <div class="fl content">
                                    <p class="text">
                                        玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金
                                    </p>
                                    <div class="Specifications">
                                        <span>颜色:玫瑰金</span>
                                        <span>尺寸:20cm</span>
                                    </div>
                                    <div class="money">
                                        <span class="fl">￥999</span>
                                        <span class="fr">1</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bill-btn">
                                <div class="fl money">
                                    <span>合计</span>
                                    <span>￥355</span>
                                </div>
                                <div class="fr btn">
                                    <div class="gray-btn">取消订单</div>
                                    <div class="red-btn" @click="payment">去付款</div>
                                </div>
                            </div>
                        </li>
                        <p class="tishis">已经到底啦~</p>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell>
                    <ul>
                        <li>
                            <div class="number">
                                <span class="fl">订单编号：0000000000000</span>
                                <span class="fr red">待付款</span>
                            </div>
                            <div class="bill">
                                <img src="" alt="" class="fl">
                                <div class="fl content">
                                    <p class="text">
                                        玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金
                                    </p>
                                    <div class="Specifications">
                                        <span>颜色:玫瑰金</span>
                                        <span>尺寸:20cm</span>
                                    </div>
                                    <div class="money">
                                        <span class="fl">￥999</span>
                                        <span class="fr">1</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bill-btn">
                                <div class="fl money">
                                    <span>合计</span>
                                    <span>￥355</span>
                                </div>
                                <div class="fr btn">
                                    <div class="gray-btn">取消订单</div>
                                    <div class="red-btn" @click="payment">去付款</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell>
                    <ul>
                      
                        <div class="bill-none">
                            <img src="../../assets/img/bill/bill.png" alt="">
                            <p>暂无订单记录</p>
                        </div>
                   
                </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell>
                    <ul>
                      
                            <div class="bill-none">
                                <img src="../../assets/img/bill/bill.png" alt="">
                                <p>暂无订单记录</p>
                            </div>
                       
                    </ul>

                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <mt-cell>
                    <ul>
                        <li>

                            <div class="number">
                                <span class="fl">订单编号：0000000000000</span>
                                <span class="fr red">待收货</span>
                            </div>
                            <div class="bill">
                                <img src="" alt="" class="fl">
                                <div class="fl content">
                                    <p class="text">
                                        玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金
                                    </p>
                                    <div class="Specifications">
                                        <span>颜色:玫瑰金</span>
                                        <span>尺寸:20cm</span>
                                    </div>
                                    <div class="money">
                                        <span class="fl">￥999</span>
                                        <span class="fr">1</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bill-btn">
                                <div class="fl money">
                                    <span>合计</span>
                                    <span>￥355</span>
                                </div>
                                <div class="fr btn">
                                    <router-link :to="{path:'/user/logistics'}" class="gray-btn" tag="div">查看物流</router-link>
                                    <router-link :to="{path:'/user/confirm'}"  class="red-btn" tag="div">确认收货</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
                <mt-cell>
                    <ul>
                        <li>
                            <div class="number">
                                <span class="fl">订单编号：0000000000000</span>
                                <span class="fr gray">已取消</span>
                            </div>
                            <div class="bill">
                                <img src="" alt="" class="fl">
                                <div class="fl content">
                                    <p class="text">
                                        玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金玫瑰金
                                    </p>
                                    <div class="Specifications">
                                        <span>颜色:玫瑰金</span>
                                        <span>尺寸:20cm</span>
                                    </div>
                                    <div class="money">
                                        <span class="fl">￥999</span>
                                        <span class="fr">1</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
         <!-- 支付弹框 -->
        <mt-popup v-model="isShowShare" position='bottom'>
            <div class='share-lists'>
              <div class="confrim">确认付款</div>
              <div>
                  <p>￥999.00</p>
                  <ul>
                      <li @click='selectPay=1'>
                         <div class="fl pay">
                                <img src="../../assets/img/bill/wx.png" alt="" class="fl">
                                <span>微信支付</span>
                         </div>
                         <img src="../../assets/img/bill/select_1.png" alt="" class="fr" v-if="selectPay == 1">
                         <img src="../../assets/img/bill/select_2.png" alt="" class="fr" v-if="selectPay == 2">
                      </li>
                      <li @click='selectPay=2'>
                            <div class="fl pay">
                                   <img src="../../assets/img/bill/zfb.png" alt="" class="fl">
                                <span>支付宝支付</span>
                            </div>
                            <img src="../../assets/img/bill/select_2.png" alt="" class="fr" v-if="selectPay == 1">
                            <img src="../../assets/img/bill/select_1.png" alt="" class="fr" v-if="selectPay == 2">
                         </li>
                  </ul>
                </div>
              <div class="paymentBtn">
                  <div class="btn">立即付款</div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected: '1',
                // 支付弹框
                isShowShare: false,
                // 选择支付方式微信或支付宝
                selectPay:1,
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
             //支付弹框
             payment() {
                this.isShowShare = true
            }
        },
        created() {
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/user/bill";
</style>