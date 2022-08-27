<template>
  <div style="display: flex; flex-direction: column">
    <div class="container">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="card">
        <el-tab-pane label="留言区" name="message"></el-tab-pane>
        <el-tab-pane label="公告栏" name="announcement"></el-tab-pane>
      </el-tabs>
      <el-button type="primary" size="small" round style="float: right" @click="handleButtonClick">MORE+</el-button>
    </div>
    <!--  <MessageBox v-if="activeName=== 'message'"></MessageBox>-->
    <!--  <Announcements v-else></Announcements>-->
    <Announcements :dataList="showing_data" :activeTab="activeName"></Announcements>
  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import axios from "axios";
import type { TabsPaneContext } from 'element-plus'
// import MessageBox from "@/components/home/MessageBox.vue";
import Announcements from "@/components/home/Announcements.vue";

const activeName = ref('message')
const showing_data = ref([])
let msgList = reactive([])
let infoList = reactive([])

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  let temp = event.target.innerText === '留言区' ? msgList : infoList
  showing_data.value = []
  showing_data.value.push(...temp)
}

const handleButtonClick = () => {
  return
}

const postData = reactive({
  pageNum: 1,
  pageSize: 5,
  total: 0
})

axios.post('api/message/queryAll', postData).then(res => {
  res = res.data
  console.log(res);
  postData.total = res.total
  showing_data.value.push(...res.data)
  msgList.push(...res.data)
})

axios.post('api/info/queryAll', postData).then(res => {
  res = res.data
  postData.total = res.total
  infoList.push(...res.data)
})


</script>

<style scoped>
.content-box {
  /*height: 70vh;*/
  /*background-color: #fff;*/
}

.container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}


@media screen and (max-width: 480px){
  .el-button{
    margin-bottom: 10px;
  }

  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
    padding: 0;
  }
}
/*.card-box{*/
/*  display: flex;*/
/*  !*display: grid;*!*/
/*  !*place-items: center;*!*/
/*  !*flex-direction: row;*!*/
/*  flex-direction: column;*/
/*  width: 100%;*/
/*  !*justify-content: space-around;*!*/
/*}*/
</style>

