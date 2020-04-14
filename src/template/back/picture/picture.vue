<template>
    <div>
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>图片管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
            
        <el-row class="query_box">
            <el-col :span="2" class="query_box_tit">
                图片名称：
            </el-col>
            <el-col :span="4" class="query_box_search">
                <el-input
                size="small"
                placeholder="请输入图片名称"
                v-model="auditTit"
                clearable>
                </el-input>
            </el-col>
              <el-col :span="1" style="height:10px">
               
            </el-col>
             <el-col :span="1">
                <el-button type="success" size="small">搜索</el-button>
            </el-col>
            <el-col :span="1">
                <router-link to="/Back/addArt">
                    <el-button type="primary" size="small">新增文章</el-button>
                </router-link>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" v-for="i in 12" :key="i" class="pd_10 height_fixed" >
                <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>图片测试</span>
                    <div class="bottom clearfix">
                    <time class="time">2020-04-01</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="pagi_bot">
            <div class="pagi_bot_l">
                共{{total}}条
            </div>
            <el-pagination
                class="pagi_bot_r"
                :page-size="12"
                background
                layout="prev, pager, next"
                :total="total">
            </el-pagination>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "Picture",
        data(){
            return {
                total:100,

            }
        },
        methods: {

        }
    }
</script>

<style>
    .height_fixed img{ width: 100%; height: 265px; }
</style>
