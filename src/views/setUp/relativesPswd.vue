<template>
    <div id="relativesPswd">
        <header>
            <div @click='goBack'>
                <img src="../../assets/img/head_arrow.png" alt="" class="head-left fl">
            </div>
            <span class="head-title">设置至亲密码</span>
        </header>
        <div class="relatives-content">
            <div class="relatives-input">
                <div class="am_payPwd pswd-list" :id="`ids_${id}`">
                    <input type="password" maxlength="1" @input="changeInput" @click="changePwd" v-model="pwdList[i]"
                        @keyup="keyUp($event)" @keydown="oldPwdList = pwdList.length" class="shortInput"
                        v-for="(v, i) in 4" :key="i"></input>
                </div>
                <p>为了保护信息安全，至亲至爱密码将用于隐私管理</p>
                <button class="pswd-btn" :class='pwdList.length == 4 ?"active":""' :disabled="pwdList.length != 4" @click="save">完成</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pwdList: [],
                oldPwdList: [],
                isDelete: false,
                ipt: ""
            };
        },
        props: {
            id: String, // 当一个页面有多个密码输入框时，用id来区分
            default: "1"
        },
        mounted() {
            this.init();
            this.ipt = document.querySelectorAll(`#ids_${this.id} .shortInput`);
        },
        methods: {
            //点击完成返回设置页面
            save() {
                this.$router.push({
                    name: 'managmentPswd',
                })
            },
            //返回上一级
            goBack() {
                this.$router.go(-1);
            },
            init() {
                this.pwdList = [];
                this.oldPwdList = [];
                this.isDelete = false;
                this.ipt = "";
            },
            keyUp(ev) {
                let index = this.pwdList.length;
                if (!index) return;
                if (ev.keyCode === 8) {
                    this.isDelete = true;
                    if (this.oldPwdList === this.pwdList.length) {
                        if (index === this.pwdList.length) {
                            this.pwdList.pop();
                        }
                        index--;
                    } else {
                        index > 0 && index--;
                    }
                    this.ipt[index].focus();
                } else if (
                    this.isDelete &&
                    index === this.pwdList.length &&
                    /^\d$/.test(ev.key)
                ) {
                    this.isDelete = false;
                    this.pwdList.pop();
                    this.pwdList.push(ev.key);
                    this.ipt[this.pwdList.length] && this.ipt[this.pwdList.length].focus();
                }
                this.$emit("getPwd", this.pwdList.join(""));
            },
            changePwd() {
                let index = this.pwdList.length;
                index === 4 && index--;
                this.ipt[index].focus();
            },
            changeInput() {
                let index = this.pwdList.length;
                let val = this.pwdList[index - 1];
                if (!/[0-9]/.test(val)) {
                    this.pwdList.pop();
                    return;
                }
                if (!val) {
                    this.pwdList.pop();
                    index--;
                    if (index > 0) this.ipt[index - 1].focus();
                } else {
                    if (index < 4) this.ipt[index].focus();
                }
            }
        }
    };
</script>
<style lang="scss">
    @import "../../assets/sass/common";
    @import "../../assets/sass/setUp/relativesPswd";
</style>