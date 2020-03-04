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
        name: "Index",
        mounted(){
          this.tanchu()
        },
        methods:{
            tanchu:function () {
                window.console.log(1)
            }
        }
    }
</script>

<style scoped>
    .top{
        position: fixed;
        background: #fff;
        z-index: 99;
        height: 70px;
        line-height: 70px;
        left: 0;
        top:0;
        width: 100%;
        box-shadow: 0 0 12px #ccc;

    }
    .top a{ color: #666; margin: 0 10px; font-size:14px ; text-decoration: none;}
    .top a.router-link-exact-active{color: #409eff}
    .top a.router-link-active{color: #409eff;}
    .main{ width: 1200px; margin: 100px auto ;}

</style>