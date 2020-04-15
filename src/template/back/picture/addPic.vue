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
        <el-row class="mt_15">
            <el-col :span="2" class="line_32">
                图片描述：
            </el-col>
            <el-col :span="5">
                <el-input
                    placeholder="请输入图片描述"
                    size="small"
                    v-model="artTit"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "Picture",
        data() {
            return {
                imageUrl: '',
                artTit:''
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
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
