<template>
    <div class="sys_index">
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>系统主页</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>

        <el-row>
            <el-col :span="8" class="pd_10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>最新消息</span>
                    </div>
                    <div class="text item">
                        登录名称：{{admin}}
                    
                    </div>
                    <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                     <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                    <div class="text item">
                        
                    </div>
                </el-card>
            </el-col>
              <el-col :span="16" class="pd_10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>最新留言</span>
                    </div>
                    <div class="text item">
                        登录名称：{{admin}}
                    
                    </div>
                    <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                     <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                    <div class="text item">
                        
                    </div>
                </el-card>
            </el-col>


        </el-row>
        <el-row>
            <el-col :span='8' class="pd_10">
                 <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>最新留言</span>
                    </div>
                    <div class="text item">
                        登录名称：{{admin}}
                    
                    </div>
                    <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                     <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                    <div class="text item">
                        
                    </div>
                </el-card>
            </el-col>
               <el-col :span='8' class="pd_10">
                 <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>最新留言</span>
                    </div>
                    <div class="text item">
                        登录名称：{{admin}}
                    
                    </div>
                    <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                     <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div> <div class="text item">
                        登录时间：{{admin}}
                    
                    </div>
                    <div class="text item">
                        
                    </div>
                </el-card>
            </el-col>
               <el-col :span='8' class="pd_10">
                 <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>最新留言</span>
                    </div>
                    <addData :addDatas='keyData'/>
                </el-card>
            </el-col>
            <el-col :span="24" class="pd_10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>最新留言</span>
                    </div>
                    <div class="text item" >
                        <audio src="https://www.w3school.com.cn/i/song.ogg" preload="auto" controls loop hidden="true">
                        </audio>
                    
                    </div>
                 
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import addData from '@/template/back/assembly/addData'
    export default {
        name: "index",
        data(){
            return {
                keyData:'dsasda',
                admin:window.localStorage.getItem('username')
            }
           
        },
        components: {
            addData
        },
    }
</script>

<style>
.sys_index{ text-align: left;}
.pd_10 { box-sizing: border-box; padding: 10px;}

</style>