<template>
  <div class="content-box">
    <Swiper class="swiper_box"></Swiper>
    <div class="card-box">
      <MsgAndInfo class="msg_info"></MsgAndInfo>
      <div style="width: 50%"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue'
import type {TabsPaneContext} from 'element-plus'
import Swiper from "./Swiper.vue";
// import MessageBox from "@/components/home/MessageBox.vue";
// import Announcements from "@/components/home/Announcements.vue";
import MsgAndInfo from "@/components/home/MsgAndInfo.vue";

const activeName = ref('message')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  // activeName.value = event.target.innerText
}


</script>

<style scoped>
.content-box {
  /*height: 70vh;*/
  /*background-color: #fff;*/
  /*overflow: hidden;*/
}

.card-box {
  padding: 15px;
  display: flex;
  /*display: grid;*/
  /*place-items: center;*/
  /*flex-direction: row;*/
  flex-direction: row;
  width: 100%;
  /*justify-content: space-around;*/
}

.swiper_box {
  /*position: fixed;*/
}

.msg_info{
  width: 50%;
}
</style>
