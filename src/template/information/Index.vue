<template>
    <div>
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

                <div class="grid-content">
                    <el-button type="primary">新增</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Information",
        methods:{

        }


    }
</script>

<style scoped>
.shadow-card{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
