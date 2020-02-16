<template>
    <div>
        <div class="top">
            <router-link to="/" exact>首页</router-link>
            <router-link to="/Person" >个人信息</router-link>
            <router-link to="/information" >影片信息</router-link>
            <router-link to="/tickets" >购票信息</router-link>
        </div>

        <div class="main">
            <router-view ></router-view>
        </div>
    </div>

</template>

<script>
    export default {
        name: "About",
        methods: {

        }
    }
</script>

<style scoped>

</style>
