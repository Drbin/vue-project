<template>
  <div id="app">
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
  name: 'app',
  components: {

  }
}
</script>

<style>
*{padding: 0; margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.top{
  height: 70px;
  line-height: 70px;
  float: left;
  width: 100%;

}
.top a{ color: #666; margin: 0 10px; font-size:14px ; text-decoration: none;}
.top a.router-link-exact-active{color: #409eff}
.top a.router-link-active{color: #409eff;}

.main{ width: 100%; float: left;}
</style>
