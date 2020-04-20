<template>
    <div>
        <el-row>
            <el-col :span="24">
                {{tips}}
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h1>{{title}}</h1>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "info",
        data(){
            return{
                tips:'No.1',
                title:'你的名字'
            }
        },
        mounted(){
          this.getData()
        },
        methods: {
            getData:function () {
                this.$http.get("http://202.85.223.75:8090/zpark/CyIndexController/queryHomeCompanyData",{
                    params:{
                    }
                }).then(res=>{
                    window.console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
