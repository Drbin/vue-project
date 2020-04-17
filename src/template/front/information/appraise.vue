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
                        <img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=606020398,4176255487&fm=179&app=42&f=JPEG?w=121&h=140">
                    </div>
                    <div class="text-card">
                        <h4>谁的名字 <span>(2019-1-29上映)</span></h4>
                        <p>导演：新海诚</p>
                        <p>主演：新海诚 宫水三叶 立花泷 奥寺美纪</p>
                        <p>简介：《你的名字。》是由新海诚执导，由神木隆之介、上白石萌音担任主要配音的一部原创日本动画电影  。作品于2016年8月26日在日本上映。中国内地于2016年12月2日上映。作品讲述了男女高中生在梦中相遇，并寻找彼此的故事。是由新海诚执导，由神木隆之介、上白石萌音担任主要配音的一部原创日本动画电影  。作品于2016年8月26日在日本上映。中国内地于2016年12月2日上映。作品讲述了男女高中生在梦中相遇，并寻找彼此的故事。</p>
                        <div class="appraise">
                            <ul>
                                <li><a>赞</a>(<span>100</span>)</li>
                                <li><a>踩</a>(<span>100</span>)</li>
                                <li><a><router-link to="/information/info">评价</router-link></a>(<span>100</span>)</li>
                                <li><router-link to="information/msg">详情</router-link></li>
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
    }
</script>

<style scoped>
    .line-height-1{line-height: 40px;}
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
