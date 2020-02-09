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
                    <el-button type="primary"><router-link to="/person/add">新增</router-link></el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="code"
                            label="ID"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="power"
                            label="权限"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址">
                    </el-table-column>
                </el-table>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Temp",
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
    .line-height-1{line-height: 40px;}
    .el-row {
        margin-bottom: 20px;
    }
</style>