<template>
  <el-upload
      class="upload-demo"
      drag
      action="/api/upload/file"
      multiple
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :data="data"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
<!--    <template #tip>-->
<!--      <div class="el-upload__tip">-->
<!--        jpg/png files with a size less than 500kb-->
<!--      </div>-->
<!--    </template>-->
  </el-upload>
<!--    <el-upload-->
<!--        class="avatar-uploader"-->
<!--        action="/api/upload/file"-->
<!--        :show-file-list="false"-->
<!--        :on-success="handleAvatarSuccess"-->
<!--        :before-upload="beforeAvatarUpload"-->
<!--        :data="data"-->
<!--    >-->
<!--      <img v-if="imageUrl" :src="imageUrl" class="avatar"  alt=""/>-->
<!--      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>-->
<!--    </el-upload>-->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// import { ElMessage } from 'element-plus'
// import {Plus} from '@element-plus/icons-vue/dist/index.min.js'
import { UploadFilled } from '@element-plus/icons-vue'
import { UploadProps } from 'element-plus'

const imageUrl = ref('')
let data = reactive({})

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  console.log(rawFile)
  data.name = rawFile.name
  const reg = /\.([0-9a-z]+)(?:[?#]|$)/i
  const file_extension = rawFile.name.match(reg)[0];
  data.upload_time = new Date().toLocaleString()
  data.filename = rawFile.name
  data.modified_name = 'woshiwufei'+file_extension
  // const newFile = new File([file], filename+file_extension);
  // const newFile = new File([file], 'woshiwufei'+file_extension);
  // rawFile.name = 'woshiwufei'+file_extension
  //文件需要命好名加上后缀扩展名再上传
  // let reader = new FileReader()
  // data.filename = "woshiwufei"
  // data.file_type = rawFile.mimeType
  // data = {...data, ...rawFile}
  // console.log(data);
  // reader.onload = function () {
  //   const content = reader.result;
  //   console.log(content, '8888');
  // }
  // reader.readAsText(rawFile);
  // console.log("1234", ...rawFile);
  // if (rawFile.type !== 'image/jpeg') {
  //   ElMessage.error('Avatar picture must be JPG format!')
  //   return false
  // } else if (rawFile.size / 1024 / 1024 > 2) {
  //   ElMessage.error('Avatar picture size can not exceed 2MB!')
  //   return false
  // }
  return true
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

</style>
