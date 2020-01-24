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
            <el-col :span="12" class="line-height-1">
                <div class="shadow-card">
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Information",
        methods:{

        },
        data() {
            return {
                input: '',
                tableData: [{
                    date: '2016-05-02',
                    code:'ID00011',
                    name: '王小虎',
                    power: '1',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    code:'ID00011',
                    power: '1',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    code:'ID00011',
                    power: '1',
                    address: '上海市普陀区金沙江路 1519 弄'
                }]
            }
        }


    }
</script>

<style scoped>
.shadow-card{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
