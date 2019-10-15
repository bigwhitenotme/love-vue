<template>
        <div id="userAddress">
            <header>
                    <div @click='goBack'>
                            <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                        </div>
                <span class="head-title">设置地址</span>
                <router-link class="head-right" :to="{path:'/user/newAddress'}" tag="div">新增地址</router-link> 
            </header>
            <div class="list">
                <ul>
                    <li v-for="item in list">
                        <div class="fl">
                            <p>
                                <span class="name">{{item.name}}</span>
                                <span>{{item.phone}}</span>
                            </p>
                            <p>
                                {{item.address}}
                            </p>
                        </div>
                        <img src="../../assets/img/address/edit.png" alt="" class="fr" @click="editAddress"> 
                    </li>
                </ul>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    list:[
                        {
                            name:'木芯',
                            phone:18133677167,
                            address:'杭州市滨江区金色蓝庭小区2幢3单元802杭州市滨江区金色蓝庭小区2幢3单元802杭州市滨江区金色蓝庭小区2幢3单元802'
                        },{
                            name:'木头',
                            phone:18133677167,
                            address:'杭州市滨江区金色蓝庭小区2幢3单元802'
                        }
                    ]
                }
            },
            methods: {
                //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            editAddress(){
                this.$router.push({'name':"editAddress"});
            },
        //获取身体数据回调函数
        callBackPersonalList(res) {
            
            console.log(res)
            },
            },
            created() {
                let data = {
                "sourceType": this.$user.sourceType,
                "userName": this.$user.userName,
                'name':this.list.name,
                'phone':this.list.phone,
            }
            this.$http.post('personalList', data, this.callBackPersonalList)
            },
        }
    </script>
    <style lang="scss">
        @import "../../assets/sass/common";
        @import "../../assets/sass/user/userAddress";
    </style>