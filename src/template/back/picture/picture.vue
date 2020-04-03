<template>
    <div>
        <el-row>
            <el-col :span="4" v-for="(o) in 16" :key="o" class="pd_10 height_fixed" >
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
    </div>

</template>

<script>
    export default {
        name: "picture",
        methods: {

        }
    }
</script>

<style>
    .height_fixed img{ width: 100%; height: 265px; }

</style>
