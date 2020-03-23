<template>
    <div>
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>配置管理</el-breadcrumb-item>
                <el-breadcrumb-item>页面管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row>
            <el-col :span="3">
                页面名称：
            </el-col>
            <el-col :span="5">
                <el-input
                size="small"
                placeholder="请输入内容"
                v-model="pageTit"
                clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row class="pd_50">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "page",
        data(){
            return {
                pageTit:'',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

<style>

</style>