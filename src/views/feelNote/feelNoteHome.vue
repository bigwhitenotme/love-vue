<template>
    <div id="feelNoteHome">
        <header>
                <div @click='goBack'>
                        <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
                    </div>
            <span class="head-title">有感笔记</span>
            <span class="head-right" @click="deleteAll" v-if='noteList.length>0'>{{isDelete ? '取消' : '编辑'}}</span>
        </header>
        <div class="search">
            <div class="search-content">
                <form action="javascript:return true">
                    <img src="../../assets/img/feel_note_search.png" alt="" :class='search || isFocus?"active-img":""'
                        @click='searchs'>
                    <input type="search" placeholder="搜索" v-model="search" @keypress="searchs" @focus='isFocus=true'
                        @blur='isFocus = false' :class='search || isFocus?"active":""'>
                    <p class="cancel" v-if='isFocus' @click='isFocus = false,search = ""'>取消</p>
                </form>
            </div>
        </div>
        <div class="note-list" v-for='(item,index) in noteList' :key="index" v-show='noteList.length>0 && isLoading'
            @click='goDetail(item)'>
            <div class='check-list' :class="isDelete?'active':''" @click='chooseDeleteItem(index)'>
                <img :src="item.isCheck?activeCheck:normalCheck" alt="">
            </div>
            <div class="list-right" :class="isDelete?'active':''">
                <div class="list-top">
                    <div class="top-title fl">{{item.title}}</div>
                    <div class="top-right fr">
                        <img src="../../assets/img/feelnote/bell_active.png" alt="" class="collect" v-if="item.isSign">
                        <img src="../../assets/img/feelnote/star_active.png" alt="" class="star" v-if="item.isRemind">
                    </div>
                </div>
                <div class="list-content">
                    {{item.textcontent}}
                </div>
                <div class="list-time">
                    {{item.createTime}}
                </div>
            </div>
        </div>
        <div class="none" v-if='noteList.length == 0 && isLoading'>
            <none text='您还没有添加有感笔记哦~'></none>
        </div>
        <div class="delete-all" :class='isDelete?"active":""' @click="deleteCheck">
            删除
        </div>
        <div class="add" @click='addFeelNote' v-if="!isDelete">
            <img :src="imgList[activeSort-1]" alt="">
        </div>
        <div class="type" v-if="!isDelete">
            <ul class="choose">
                <li v-for='item in typeList' :key='item.sort' :style='{"backgroundColor": item.color}'
                    v-show='item.choose' :class='item.sort==activeSort?"active":""' @click='chooseType(item.sort)'>
                    <img src="../../assets/img/feel_note_color_white.png" alt="" v-if='item.sort!=activeSort'>
                </li>
            </ul>
            <div class="more" :class='isAddType?"active":""'>
                <div class="btn" @click='addType'>
                    <img src="../../assets/img/feel_note_type_add.png" alt="" v-if='!isAddType'>
                    <img src="../../assets/img/feel_note_type_reduce.png" alt="" v-if='isAddType'>
                </div>
                <ul class="type">
                    <li v-for='item in typeList' :key='item.sort' :style='{"backgroundColor": item.color}'
                        v-show='item.sort>3' :class='item.sort==activeSort?"active":""'
                        @click='changeType(item.choose,item.sort)'>
                        <img src="../../assets/img/feel_note_type_item_add.png" alt="" v-if='!item.choose'>
                        <img src="../../assets/img/feel_note_type_item_reduce.png" alt="" v-if='item.choose'>
                    </li>
                </ul>
            </div>
        </div>
        <sureDelete @cancelDelete='cancelDelete' @sureDelete='sureDelete' v-if='isAll'></sureDelete>
    </div>
</template>
<script>
    import type1 from '../../assets/img/feel_note_color_one.png';
    import type2 from '../../assets/img/feel_note_color_two.png';
    import type3 from '../../assets/img/feel_note_color_three.png';
    import type4 from '../../assets/img/feel_note_color_four.png';
    import type5 from '../../assets/img/feel_note_color_five.png';
    import type6 from '../../assets/img/feel_note_color_six.png';
    import normalCheck from '../../assets/img/feel_note_check_list.png';
    import activeCheck from '../../assets/img/feel_note_active_check_list.png';

    import sureDelete from '../../components/sureDelete.vue';//声明组件变量
    import none from '../../components/none.vue';//引入缺省组件
    export default {
        data() {
            return {
                search: '',//搜索关键字
                searchData: [],//搜索列表
                noteList: [],//笔记列表
                isDelete: false,//编辑删除
                isAll: false,//删除
                normalCheck,//选择图片
                activeCheck,//点击激活时图片
                imgList: [type1, type2, type3, type4, type5, type6],//小羽毛列表
                typeList: [
                    { sort: 1, color: '#FF5656', choose: false },
                    { sort: 2, color: '#E7B657', choose: false },
                    { sort: 3, color: '#70A95E', choose: false },
                    { sort: 4, color: '#5D91F6', choose: false },
                    { sort: 5, color: '#8B71F8', choose: false },
                    { sort: 6, color: '#EF9369', choose: false }
                ],//笔记类型
                activeSort: 1,//默认笔记类型
                isAddType: false,//是否添加类型
                changeItem: 0,//添加或删除的类型
                isFocus: false,//搜索框是否有焦点
                isLoading: false,//是否结束加载
            }
        },
        //引入组件
        components: {
            sureDelete,
            none
        },
        methods: {
            //有感笔记获取列表
            init() {
                this.isLoading = false;
                let noteList = {
                    "noteType": this.activeSort,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                    'title': this.search
                };
                noteList.title ? '' : delete noteList.title
                this.$http.post('getNoteList', noteList, this.callbackGetNoteList);
            },
            //获取有感笔记类型
            getNoteType() {
                let noteType = {
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                }
                this.$http.post('getNoteType', noteType, this.callbackGetNoteType);
            },
            //点击复选框
            chooseDeleteItem(index) {
                this.noteList[index].isCheck = !this.noteList[index].isCheck
            },
            //删除已选复选框
            deleteCheck() {
                this.isAll = true;

            },
            //确定删除
            sureDeleteItem() {
                let id = [];
                let arr = this.noteList;
                arr.forEach(val => {
                    val.isCheck ? id.push(val.id) : '';
                })
                let deleteNote = {
                    "ids": id,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                }
                this.$http.post('deleteNote', deleteNote, this.callBackDeleteNote)
            },
            //取消删除
            cancelDelete(bool) {
                if (bool) this.isAll = false;
            },
            //弹框确定删除
            sureDelete(bool) {
                if (bool) this.sureDeleteItem();
            },
            //删除已选复选框的回调
            callBackDeleteNote() {
                this.isDelete = false;
                this.isAll = false;
                this.init();
            },
            //查询有感笔记列表
            callbackGetNoteList(res) {
                let arr = res.data.list;
                arr.forEach(val => {
                    val.isCheck = false;
                });
                this.noteList = arr;
                this.noteList.forEach(val => {
                    if (val.content.indexOf('[img]') != -1) {
                        val.textcontent = val.content.slice(0, val.content.indexOf('[img]'));
                    } else {
                        val.textcontent = val.content;
                    }
                })
                this.isLoading = true;
            },
            //查询有感笔记类型
            callbackGetNoteType(res) {
                let arr = res.data.typeList;
                let list = this.typeList;
                arr.forEach(val => {
                    list.forEach(item => {
                        item.sort == val ? item.choose = true : '';
                    })
                })
                this.typeList = list;
            },
            //删除
            deleteAll() {
                this.isDelete = !this.isDelete;
            },
            //搜索
            searchs(e) {
                if (e.keyCode) {
                    if (e.keyCode == 13) this.init();
                } else {
                    this.init();
                }
            },

            //跳转添加笔记页面
            addFeelNote() {
                sessionStorage.removeItem('feelNoteItem');
                this.$router.push({
                    name: 'addFeelNote',
                    query: {
                        type: this.activeSort
                    }
                })
            },
            //选择类型
            chooseType(sort) {
                this.activeSort = sort;
                this.init();
            },
            //开启添加类型
            addType() {
                this.isAddType = !this.isAddType;
            },
            //添加删除类型
            changeType(type, sort) {
                let changeType = {
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                    "noteType": sort
                }
                this.changeItem = sort;
                if (!type) {
                    this.$http.post('addNoteType', changeType, this.callbackChangeType);
                } else {
                    this.$http.post('deleteNoteType', changeType, this.callbackChangeType);
                }
            },
            //添加删除类型的回调
            callbackChangeType(res) {
                if (res.code == 1000) {
                    let arr = this.typeList;
                    arr.forEach(val => {
                        val.sort == this.changeItem ? val.choose = !val.choose : '';
                    })
                }
            },
            //返回上一级
            goBack() {
                window.webGoBackTap();
            },
            //进入详情
            goDetail(item) {
                if (!this.isDelete) {
                    sessionStorage.setItem('feelNoteItem', JSON.stringify(item));
                    this.$router.push({
                        name: 'addFeelNote',
                        query: {
                            type: this.activeSort
                        }
                    })
                }
            },
            //获取用户信息
            getUserInfo(userName, token, sourceType) {
                this.$user.userName = userName;
                this.$user.token = token;
                this.$user.sourceType = sourceType;
                this.$http.defaultOption.user.userName = userName;
                this.$http.defaultOption.user.token = token;
                this.$http.defaultOption.user.sourceType = sourceType;
                this.init();
                this.getNoteType();
            }
        },
        created() {
            if (this.$route.query.type) this.activeSort = this.$route.query.type;
            if (this.$user.token) {
                this.init();
                this.getNoteType();
            }
        },
        mounted() {
            if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                window.getUserInfo = this.getUserInfo;
            } else if (/(Android)/i.test(navigator.userAgent)) {
                if (android) {
                    android.getUserInfo();
                    window.getUserInfo = this.getUserInfo;
                }
            }
        }
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/feelNote/feelNoteHome";
</style>