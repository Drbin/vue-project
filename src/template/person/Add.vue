<template>
    <div class="">
        <el-row>
            <el-col :span="3" class="line-height-1">
                <div class="grid-content">
                    影片名称：
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content ">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content">
                    <el-button type="primary">搜索</el-button>
                </div>

            </el-col>
            <el-col :span="2">

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Add"
    }
</script>

<style scoped>

</style>