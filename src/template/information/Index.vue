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
                        <h4>谁的名字 <span>2019-1-29上映</span></h4>

                        <p>导演：新海诚</p>
                        <p>主演：新海诚 宫水三叶 立花泷 奥寺美纪</p>
                        <p>简介：</p>
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
    .el-row{    margin-bottom: 20px;}
    .shadow-card{
        width:100%;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        height: 160px;

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
    .text-card h4 span{font-size: 14px;font-weight: 200;}
    .text-card p{ height: 24px; line-height: 24px; font-size: 14px; text-align: left;}
</style>
