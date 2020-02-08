<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "Tickets",
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