<template>
    <div>
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>新增图片</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row class="mt_15">
            <el-col :span="2" class="line_32">
                图片名称：
            </el-col>
            <el-col :span="5">
                <el-input
                    placeholder="请输入内容"
                    size="small"
                    v-model="artTit"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row class="mt_15">
            <el-col :span="2" class="line_32">
                选择图片：
            </el-col>
            <el-col :span="5">
               <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "Picture",
        data() {
            return {
                imageUrl: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style>
    .height_fixed img{ width: 100%; height: 265px; }
</style>
