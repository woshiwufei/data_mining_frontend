<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="linear-gradient(270deg,#3498db,#8e44ad)"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <!--    <el-menu-item index="1">首页</el-menu-item>-->
    <el-menu-item index="/courses">课程</el-menu-item>

    <el-menu-item index="/learning-activities" disabled>学习活动</el-menu-item>
    <el-menu-item index="/highlights" disabled>课程成果</el-menu-item>
    <el-menu-item index="/downloads">下载中心</el-menu-item>
    <!--    <router-link to="/register&login">-->
    <div class="flex-grow"/>
    <el-menu-item index="/register&login">后台管理</el-menu-item>
    <el-menu-item index="/editor">编辑器</el-menu-item>
    <el-menu-item index="/info">信息速递</el-menu-item>
    <!--    </router-link>-->
  </el-menu>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeIndex = ref('2')
const handleSelect = function (key) {
  router.push(key)
  // console.log(key, keyPath);
  // console.log(router);
  // console.log({...route});
}
</script>

<style scoped>
.el-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 9%;
}
.flex-grow{
  flex-grow: 0.1;
}
.el-menu-item{
  /*width: 10%;*/
}

</style>
