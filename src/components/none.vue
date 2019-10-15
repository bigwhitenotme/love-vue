<template>
    <div id="none">
        <img src="../assets/img/common/none.png" alt="">
        <p>{{text}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: ['text'],
    }
</script>
<style lang="scss">
    @import "../assets/sass/common";
    @import "../assets/sass/components/none";
</style>