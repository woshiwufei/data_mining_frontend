<script setup>
import Search from "./Search.vue";

const goHome = () => {
  window.location.href = "/";
}
</script>

<template>
<!--  <div class="nav">-->
    <el-row class="nav">
      <el-col :span="12">
        <div class="grid-content ep-bg-purple"/>
        <div class="logo">
<!--          <img src="src/assets/images/logo.png" alt="logo">-->
          <h1 @click="goHome">Data Mining</h1>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content ep-bg-purple-light"/>
        <div class="search" style="padding: 10px">
          <Search></Search>
        </div>
      </el-col>
    </el-row>
</template>


<style scoped>
* {
  /*margin: 0;*/
  /*padding: 0;*/
}

/*.el-row{*/
/*  padding: 0 9%;*/
/*}*/

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  .el-row{
    padding: 0 9%;
  }
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
  .el-row{
    padding: 0 3%;
  }
}

h1{
  /*font-size: 40px;*/
  font-size: 2.5rem;
  color: #fff;
  text-align: left;
  line-height: 70px;
  cursor: pointer;
  /*padding: 0 20%;*/
  /*margin-bottom: 20px;*/
}

.nav {
  /*background-color: #409eff;*/
}

.logo {
  /*width: 50%;*/
  /*float: left;*/
}

.search {
  /*width: 50%;*/
  float: right;
}
</style>
