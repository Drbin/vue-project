<template>
    <div>
  
        <el-row class="top_query">
            <span class="txt_w_60">分类：</span>
            <el-radio v-model="radio" label="1">全部</el-radio>
            <el-radio v-model="radio" label="2">前端</el-radio>
            <el-radio v-model="radio" label="3">后端</el-radio>
            <el-radio v-model="radio" label="4">数据库</el-radio>
            <el-radio v-model="radio" label="5">图像处理</el-radio>
            <el-radio v-model="radio" label="6">机器学习</el-radio>
            <div class="top_search">
                <input v-model="searchContent" placeholder="请输入搜索内容" />
                <button><i class="el-icon-search"></i></button>
            </div>
        </el-row>
        <el-row>
            <el-col :span="24" class="line-height-1">
                <div class="shadow-card">
                    <div class="img-box">
                        <img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=606020398,4176255487&fm=179&app=42&f=JPEG?w=121&h=140">
                    </div>
                    <div class="text-card">
                        <h4>谁的名字</h4>
                        <p>时间：2019-1-29</p>
                        <p>作者：admin</p>
                        <p>简介：《你的名字。》是由新海诚执导，由神木隆之介、上白石萌音担任主要配音的一部原创日本动画电影  。作品于2016年8月26日在日本上映。中国内地于2016年12月2日上映。作品讲述了男女高中生在梦中相遇，并寻找彼此的故事。是由新海诚执导，由神木隆之介、上白石萌音担任主要配音的一部原创日本动画电影  。作品于2016年8月26日在日本上映。中国内地于2016年12月2日上映。作品讲述了男女高中生在梦中相遇，并寻找彼此的故事。</p>
                        <div class="appraise">
                            <ul>
                                <li><a>赞</a>(<span>100</span>)</li>
                                <li><a>踩</a>(<span>100</span>)</li>
                                <li><a><router-link to="/information/info">评价</router-link></a>(<span>100</span>)</li>
                                <li><router-link :to="{ path: '/information/msg', query: { userId: 1111}}">详情</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Information",
        data(){
            return{
                radio:"1",
                searchContent:''
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .line-height-1{line-height: 40px;}
    .el-tag{ margin-right: 10px; cursor: pointer;}
    .el-row{    margin-bottom: 20px;}
    .txt_w_60{ width: 60px; display: inline-block; text-align: center; font-size: 14px;}
    .top_query{ position: relative;  height: 30px; line-height: 30px;}
    .top_search{ width: 200px; height: 30px; position: absolute;right: 0; top: 0;}
    .top_search input{ width: 170px; height: 30px; border: 1px solid  #ccc; box-sizing: border-box; float: left; border-radius: 3px 0 0 3px; outline: none; padding: 0 10px; }
    .top_search button{ width: 30px; cursor: pointer; height: 30px; border: none; float: left; background: #409EFF; border: 1px solid  #409EFF; box-sizing: border-box;  color: #fff; border-radius: 0 3px 3px 0; outline: none; font-size: 18px;font-weight: 600;}
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
    .img-box img{ width: 100%; height: 100%;}
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
    .text-card p{ line-height: 24px; font-size: 14px; text-align: left;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .appraise{ position: absolute;right: 5px; height: 20px; width: 700px;
        bottom:10px;}
    .appraise ul{ list-style: none; width: 100%; height: 20px; float: left; text-align: right}
    .appraise ul li{display: inline-block; height: 20px; line-height: 20px; text-align: left; margin-left: 20px; font-size: 12px;}
    .appraise ul li a{ text-decoration :underline #409EFF; color: #409Eff; cursor: pointer; }
</style>
