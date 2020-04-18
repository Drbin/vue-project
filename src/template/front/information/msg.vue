<template>
    <div class="block">
        <h1 class="content_tit">新增文章</h1>
        <div class="content_txt">
            sad sdad asds asd as asd sdd dd s 
        </div>
        <div class="content_time">2018-04-13</div>
    </div>

</template>


<script>
    export default {
        name:'msg',
        data() {
            return {
                reverse: true,
                activities: [{
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }]
            };
        }
    };
</script>
<style scoped>
.content_tit{ padding-bottom: 10px; border-bottom: 1px solid #ccc; line-height: 20px; font-size: 18px; width: 100%; text-align: center;}
.content_txt{ font-size: 12px; width: 100%; margin-top: 10px;  color: #666; border-bottom: 1px solid #ccc; }
.content_time{ width: 100%; height: 20px; text-align: right;;}


</style>
