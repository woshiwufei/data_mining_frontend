<template>
  <div class="messagebox">
    <!--  <Upload></Upload>-->
    <div style="display: grid; place-items: center; padding-bottom: 10px">
      <el-tag
          class="mx-1"
          effect="dark"
          round
          style=" display: flex; flex-direction: column; justify-content: center"
      >
        留言板
      </el-tag>
    </div>
    <el-card class="box-card" v-for="(msg, index) in dataList"
             :key="index"
             style="min-height: 5%; background-color: transparent; border: none">
      <el-link type="default" :underline="false" style="color: #fff" @click="handleClick(msg)">{{
          msg.msg_content
        }}
      </el-link>
      <div style="float: right; color: rgba(255, 255, 255, 0.5);" class="card">发布时间：{{
          msg.create_time
        }}
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.messagebox {
  width: 48%;
  height: 40vh;
  /*background-color: #222;*/
  /*background-color: #eeeeee;*/
}

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  .el-link {
    font-size: smaller;
  }

  .el-card {
    margin: 8px
  }

  .card {
    font-size: smaller;
  }
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
  a {
    font-size: 12px !important;
  }
}

.el-card {
  margin: 0px;
}

.card {
  font-size: 10px;
}

.el-tag {
  opacity: 0.8;
  width: 10vw;
}

.el-tabs__nav-scroll{
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
