<template>
    <div>
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>配置管理</el-breadcrumb-item>
                <el-breadcrumb-item>图片管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row>
            <el-col :span="4" v-for="(o) in 12" :key="o" class="pd_10 height_fixed" >
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
                page-size=12
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
