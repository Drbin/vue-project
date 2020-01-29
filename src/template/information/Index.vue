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
                    <el-input placeholder="请输入内容"></el-input>
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
            <el-col :span="24" class="line-height-1">
                <div class="shadow-card">
                    <div class="img-box">

                    </div>
                    <div class="text-card">
                        <h4>影片名称</h4>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Information",
    }
</script>

<style scoped>

    .shadow-card{
        width:100%;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        height: 160px;
        margin-bottom: 20px;
        position: relative;
    }
    .img-box{
        width: 200px; height: 140px;
        float: left;
        margin: 10px; box-sizing: border-box;
        border: 1px solid #ccc;
    }
    .text-card{
        width: 100%; padding-left:240px ;
        position: absolute;
        right: 10px;
        height: 150px;
        top: 5px;
        box-sizing: border-box;
    }
    .text-card h4{ height: 30px; line-height: 30px; font-size: 16px; text-align: left; font-weight: 600;}
</style>
