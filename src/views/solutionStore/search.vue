<template>
    <div id="search">
        <div class="search">
            <div class="fl">
                <img src="../../assets/img/common/search.png" alt="">
                <input type="text" placeholder="搜索"></input>
            </div>
            <span class="fr" @click="cancel">取消</span>
        </div>
        <div class="search-record" v-if="isList">
            <div class="list" v-for="(item,index) in list" :key='index'>
                <span class="fl content">{{item.text}}</span>
                <img src="../../assets/img/solutionStore/close.png" alt="" class="fr" @click='deleteItem(index)'>
            </div>
            
            <div class="clear-records" @click="clearRecords">
                清楚搜索记录
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isList:true,
               list:[
                   {
                       text:'单身'
                   },{
                       text:'木芯'
                   },{
                        text:'职场'
                   }
               ]
            }
        },
        methods: {
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            //点击取消
            cancel(){
                    this.$router.go(-1);
            },
            //清空搜索记录
            clearRecords(){
                this.isList = false

            },
            //删除搜索记录单条
            deleteItem(index){
                 this.list.splice(index,1)
            }
        },
        created() {

        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/solutionStore/search";
</style>