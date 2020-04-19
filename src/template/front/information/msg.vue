<template>
    <div class="block">
        <h1 class="content_tit">{{contentTit}}</h1>
        <div class="content_txt">
           {{uId}}

        </div>
        <div class="content_author">{{contentAuthor}}</div>
        <div class="content_time">2018-04-13</div>
    </div>

</template>


<script>
    export default {
        name:'msg',
        data() {
            return {
                contentTit:'新增文章',
                contentAuthor:'admin',
                uId:this.$route.query.userId,
                contentTime:'2020-04-19',
                content:''
            };
        }
    };
</script>
<style scoped>
.content_tit{ padding-bottom: 10px; border-bottom: 1px solid #ccc; line-height: 20px; font-size: 18px; width: 100%; text-align: center;}
.content_txt{ font-size: 12px; width: 100%; margin-top: 10px;  color: #666; border-bottom: 1px solid #ccc; }
.content_time{ width: 50%; float: left; height: 20px; text-align: right;;}
.content_author{  width: 50%; float: left; height: 20px;}

</style>
