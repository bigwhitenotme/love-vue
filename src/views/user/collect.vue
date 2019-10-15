<template>
    <div id="collect">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <ul>
                <li 
                    v-for='(item,index) in tabList' 
                    :key='index' 
                    :class='activeTab==index?"active":""' 
                    @click='activeTab = index'
                >{{item.name}}</li>
            </ul>
        </header>
        <div class="content">
            <div class="none" v-if='tabList[activeTab].list.length == 0'>
                <div>
                    <img src="../../assets/img/common/collet_tishi.png" alt="">
                    <div class="text">
                            <p>您还没有收藏哦</p>
                    </div>
                </div>
            </div>
            <div class="list-one" v-if='activeTab == 0'>
                <img v-for='(item,index) in tabList[activeTab].list' :key='index' :src="item.sourceUrl" alt="">
            </div>
            <div class="list-two" v-if='activeTab == 1'>
                <ul class="tabs">
                    <li 
                        v-for='(item,index) in tabList[activeTab].list' 
                        :key='index' 
                        :class='activeTab2==index?"active":""' 
                        @click='activeTab2 = index'
                    >{{item.name}}</li>
                </ul>
                <ul class="content">
                    <li v-for='(item,index) in tabList[activeTab].list[activeTab2].list' :key='index'>
                        <div class="consultation-one">
                            <div class="text">
                                {{item.title}}
                            </div>
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="consultation-reply">
                            <span>{{item.time}}</span>
                           
                        </div>
                    </li>
                </ul>
                <div class="none" v-if='tabList[activeTab].list[activeTab2].list == 0'>
                    <div>
                        <img src="../../assets/img/common/collet_tishi.png" alt="">
                        <div class="text">
                                <p>您还没有收藏哦</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-three" v-if="activeTab == 2">
                <ul>
                    <li v-for='(item,index) in tabList[activeTab].list' :key='index'>
                        <img :src="item.pic" alt="" class="fl">
                        <div class="fl">
                            <p class="title">{{item.title}}</p>
                            <p class="content">{{item.content}}</p>
                            <div class="location">
                                <div class="fl location-left">
                                    <span class="zan">{{item.great}}点赞</span>
                                    <span class="collect">{{item.collect}}收藏</span>
                                </div>
                                <div class="fr location-right">
                                    <img :src="item.location" alt="" class="fl">
                                    <span class="fl">{{item.area}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-four" v-if='activeTab == 3'>
               
            </div>
            <div class="list-five" v-if='activeTab == 4'>
                
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabList:[
                    {name:'图片说',list:[]},
                    {name:'TA们',list:[
                        {name:'父母健康',list:[
                            // {
                            //     title:'大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...',
                            //     pic:require('../../assets/img/pic.jpg'),
                            //     time: '2019-09-08'
                               
                            // },
                            // {
                            //     title:'大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...',
                            //     pic:require('../../assets/img/pic.jpg'),
                            //     time: '2019-09-08'
                               
                            // }
                        ]},
                        {name:'孩子教育',list:[
                            // {
                            //     title:'大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...',
                            //     pic:require('../../assets/img/pic.jpg'),
                            //     time: '2019-09-08',
                               
                            // },
                            // {
                            //     title:'大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...',
                            //     pic:require('../../assets/img/pic.jpg'),
                            //     name: '苏大强',
                              
                            // },
                            // {
                            //     title:'大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...',
                            //     pic:require('../../assets/img/pic.jpg'),
                            //     time: '2019-09-08',
                              
                            // },
                            // {
                            //     title:'大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...',
                            //     pic:require('../../assets/img/pic.jpg'),
                            //     time: '2019-09-08',
                               
                            // },{
                            //     title:'大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来.大家最长一次失业有多久，都是怎么过来的？大家最长一次失业有多久，都是怎么过来的过来...',
                            //     pic:require('../../assets/img/pic.jpg'),
                            //     time: '2019-09-08',
                            // }
                        ]},
                        {name:'情感灯塔',list:[]},
                        {name:'家居生活',list:[]}
                    ]},
                    {name:'世界那么大',list:[
                        // {
                        //     pic:require('../../assets/img/pic.jpg'),
                        //     title: '适合7月避暑目的地，这个夏天 就应该去这些地方！',
                        //     content: '适合7月避暑目的地，这个夏天就应该去这 些地方！这个夏天就应该去这些地方！这个 夏天就应该去这些地方！',
                        //     great: 199,
                        //     collect: 202,
                        //     area: '合肥',
                        //     location: require('../../assets/img/bill/location.png')
                        // }
                    ]},
                    {name:'美美的自己',list:[]},
                    {name:'成长向上',list:[]},
                ],//收藏内容
                activeTab: 0,//激活tab
                activeTab2: 0,//第二个模块的选项卡
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            getCollectPicture() {
                let data = {
                    "recordOperation": 2,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,

                }
                this.$http.post('queryCollectPicture', data, this.callbackqueryCollectPicture)

            },
            //获取商品列表的回调
            callbackqueryCollectPicture(res) {
               console.log(res)
               this.tabList[0].list = res.data.collectList
            },

        },
        created() {
            this.getCollectPicture()
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/commonTishi";
    @import "../../assets/sass/user/collect";
</style>