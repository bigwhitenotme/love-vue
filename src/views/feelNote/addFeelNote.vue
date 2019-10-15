<template>
    <div id="addFeelNote">
        <header>
            <div @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
            </div>
            <span class="head-title">有感笔记</span>
            <span class="head-right" @touchstart="notePreserved">保存</span>
        </header>
        <div class="top-text">
            <div class="top-conten">
                <div class="top-time fl">{{topTime}}</div>
                <div class="top-icon fr">
                    <img src="../../assets/img/feelnote/star.png" alt="" v-if='isRemind == 0' @click='isRemind = 1'>
                    <img src="../../assets/img/feelnote/star_active.png" alt="" v-if='isRemind == 1'
                        @click='isRemind = 0'>
                    <img src="../../assets/img/feelnote/bell.png" alt="" v-if='isSign == 0'
                        @click='goOther("/managingTime/managingTimeHome")'>
                    <img src="../../assets/img/feelnote/bell_active.png" alt="" v-if='isSign == 1'
                        @click='goOther("/managingTime/managingTimeHome")'>
                    <img src="../../assets/img/feelnote/share.png" alt="" @click='share'>
                </div>
            </div>
            <div class="top-input-text">
                <input type="text" placeholder="输入标题" v-model='topTitle'>
            </div>
        </div>
        <!-- 添加内容 -->
        <div class="add-text">
            <van-cell-group class="input-text">
                <van-field v-model="topContent" type="textarea" placeholder="输入内容" rows="10" autosize />
            </van-cell-group>
        </div>
        <!-- 添加图片 -->
        <div class="add-pic">
            <img v-for='(item,index) in picList' :key='index' :src="item.pic" alt="">
        </div>
        <!-- 底部 -->
        <div class="icon-item">
            <img src="../../assets/img/feelnote/delete.png" alt="" @click='deleteItem'>
            <div>
                <img src="../../assets/img/feelnote/pic.png" alt="">
                <input type="file" @change='uploadFile($event)'>
            </div>
            <img src="../../assets/img/feelnote/menu.png" alt="" @click='goOther("/managingTime/managingTimeHome")'>
        </div>
        <sureDelete @cancelDelete='cancelDelete' @sureDelete='sureDelete' v-if='isAll'></sureDelete>
    </div>
</template>
<script>
    import sureDelete from '../../components/sureDelete.vue';//声明组件变量
    import { Field } from 'vant';
    export default {
        data() {
            return {
                topTime: '',//时间
                topContent: '',//内容
                topTitle: '',//标题
                timing: '',//当前时间时间戳
                noteType: 1,//当前笔记类型
                picList: [],//图片列表
                isRemind: 0,//是否提醒
                isSign: 0,//是否标记
                id: 0,//用户笔记
                isAll: false,//删除弹框
            }
        },
        methods: {
            //有感笔记保存
            notePreserved() {
                if (!this.topTitle) {
                    this.$toast({ message: '请先输入笔记标题', duration: 3000 });
                    return;
                }
                if (!this.topContent) {
                    this.$toast({ message: '请先输入笔记内容', duration: 3000 });
                    return;
                }
                let arr = [];
                this.picList.forEach(val => {
                    arr.push(val.pic);
                });
                arr = arr.join(',');
                let content = this.topContent + '[img]' + arr + '[img]';
                if (this.id) {
                    let data = {
                        "id": this.id,
                        "content": content,
                        "createTime": this.timing,
                        "isRemind": this.isRemind,
                        "isSign": this.isSign,
                        "title": this.topTitle,
                        "noteType": this.noteType,
                        "sourceType": this.$user.sourceType,
                        "userName": this.$user.userName,
                    }
                    this.$http.post('editNote', data, this.callBackaddNote)
                } else {
                    let data = {
                        "content": content,
                        "createTime": this.timing,
                        "isRemind": this.isRemind,
                        "isSign": this.isSign,
                        "title": this.topTitle,
                        "noteType": this.noteType,
                        "sourceType": this.$user.sourceType,
                        "userName": this.$user.userName,
                    }
                    this.$http.post('addNote', data, this.callBackaddNote)
                }
            },
            //有感笔记保存回调
            callBackaddNote(res) {
                if (res.code == 1000) {
                    this.$router.push({
                        path: '/feelNote/feelNoteHome',
                        query: {
                            type: this.noteType
                        }
                    })
                }
            },
            //返回上一级
            goBack() {
                this.$router.push({
                    path: '/feelNote/feelNoteHome',
                    query: {
                        type: this.noteType
                    }
                })
            },
            //删除有感笔记
            deleteItem() {
                if (this.id) {
                    this.isAll = true;
                } else {
                    this.$router.push({
                        path: '/feelNote/feelNoteHome',
                        query: {
                            type: this.noteType
                        }
                    })
                }
            },
            //确定删除
            sureDeleteItem() {
                let deleteNote = {
                    "id": this.id,
                    "sourceType": this.$user.sourceType,
                    "userName": this.$user.userName,
                }
                this.$http.post('deleteNoteItem', deleteNote, this.callBackDeleteNote)
            },
            //删除有感笔记的回调
            callBackDeleteNote(res) {
                this.isAll = false;
                this.$router.push({
                    path: '/feelNote/feelNoteHome',
                    query: {
                        type: this.noteType
                    }
                })
            },
            //取消删除
            cancelDelete(bool) {
                if (bool) this.isAll = false;
            },
            //弹框确定删除
            sureDelete(bool) {
                if (bool) this.sureDeleteItem();
            },
            //上传照片
            uploadFile(e) {
                let file = e.target.files[0];
                var reader = new FileReader()
                reader.onload = (e) => {
                    let data;
                    data = e.target.result
                    this.$http.upload('base', { "imageString": data }, this.callBackUpload)
                }
                reader.readAsDataURL(file)
            },
            //上传图片的回调
            callBackUpload(res) {
                this.picList.push({ pic: res.data.url });
            },
            //去事项提醒页面
            goOther(link) {
                this.$router.push(link);
            },
            //分享
            share() {
                window.toShare();
            }
        },
        created() {
            let time = this.$fun.getNowDate();//获取当前时间
            this.topTime = time.str;
            this.timing = time.timing;
            this.noteType = this.$route.query.type;
            let detail = JSON.parse(sessionStorage.getItem('feelNoteItem'));
            if (detail) {
                this.id = detail.id;
                this.topTitle = detail.title;
                let str = detail.content;
                if (str.indexOf('[img]') != -1) {
                    this.topContent = str.slice(0, str.indexOf('[img]'));
                    str = str.slice(str.indexOf('[img]') + 5);
                    str = str.slice(0, str.indexOf('[img]'));
                    let arr = str.split(',');
                    arr.forEach(val => {
                        this.picList.push({ pic: val })
                    })
                } else {
                    this.topContent = detail.content;
                }
                this.isSign = detail.isSign;
                this.isRemind = detail.isRemind;
            }
        },
        components: {
            sureDelete,
            Field
        }
    }
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/feelNote/addFeelNote";
</style>