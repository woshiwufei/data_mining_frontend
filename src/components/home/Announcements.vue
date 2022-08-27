<template>
  <div class="announcement_box">
    <!--  <Upload></Upload>-->
    <div style="display: grid; place-items: center;  padding-bottom: 0">
      <!--      <el-tag-->
      <!--          class="mx-1"-->
      <!--          effect="dark"-->
      <!--          round-->
      <!--          style="opacity: 0.8; width: 10vw"-->
      <!--      >-->
      <!--        {{ props.activeTab === 'message' ? '留言板' : '公告栏' }}-->
      <!--      </el-tag>-->
    </div>
    <el-card class="box-card" v-for="(msg, index) in props.dataList"
             :key="index"
             style="">
      <el-link type="default" :underline="false" style="color: #fff; float: left" @click="handleClick(msg)">{{
          msg.msg_content ?
              msg.msg_content.slice(0, 35).length < 35 ?
                  msg.msg_content.slice(0, 35) : msg.msg_content.slice(0, 35) + '...'
              : msg.title.slice(0, 35).length < 35 ?
                  msg.title.slice(0, 35) : msg.title.slice(0, 35) + '...'
        }}
      </el-link>
      <div style="float: right; color: rgba(255, 255, 255, 0.5);" class="card">{{
          msg.create_time
        }}
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['dataList', 'activeTab'])

</script>

<style scoped>
.announcement_box {
  width: 100%;
  height: 45vh;
  /*background-color: #222;*/
  /*background-color: #eeeeee;*/
}

@media (max-width: 1200px) {
  .el-link {
    /*font-size: smaller;*/
    float: left;
    /*width: 75%;*/
  }

  .el-card {
    min-height: 15%;
    background-color: transparent;
    border: none;
    display: block;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
    margin: 8px;
  }

  .card {
    font-size: 10px;
    /*width: 25%;*/
  }
}

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  .el-link {
    /*font-size: smaller;*/
  }

  .el-card {
    min-height: 15%;
    background-color: transparent;
    border: none;
    display: block;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
    margin: 8px;
  }

  .card {
    font-size: 10px;
  }
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 1200px) {
  a {
    font-size: 12px !important;
  }

  .el-card {
    margin: 0;
    padding: 0
  }

  .card {
    font-size: 10px;
  }
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
  a {
    font-size: 12px !important;
  }

  .el-card {
    margin: 0;
    padding: 0
  }

  .card {
    font-size: 10px;
  }
}


</style>
