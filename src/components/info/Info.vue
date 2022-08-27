<template>
  <el-row>
    <el-col :span='6' class="info-menu">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#854cb1"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          :collapse="collapse"
          @select="handleSelect"
      >
        <el-menu-item v-for="item in menuList" :index="item.path" :key="item.path" style="border-bottom: 1px solid rgba(0,0,0,0.1)">
          <el-icon v-if="!collapse">
            <CaretRight/>
          </el-icon>
          <p>{{ item.name }}</p>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span='18'>
      <router-view></router-view>
<!--      <el-card class="box-card" v-for="(activity, index) in activities"-->
<!--               :key="index"-->
<!--               style="margin: 10px; min-height: 5%; background-color: transparent; border: none">-->
<!--        <el-link type="default" :underline="false" style="color: #fff" :href="activity.id + '/detail'">{{ activity.content }}</el-link>-->
<!--        <div style="float: right; font-size: smaller; color: rgba(255, 255, 255, 0.5);">发布时间：{{ activity.timestamp }}</div>-->
<!--      </el-card>-->
<!--      <el-pagination layout="prev, pager, next" :total="50" :small="collapse" background-->
<!--      style="display: flex; justify-content: center; margin-bottom: 10px;"/>-->
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import {CaretRight} from '@element-plus/icons-vue/dist/index.min.js'
import {ref, onMounted, reactive, onBeforeMount, onBeforeUnmount} from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const collapse = ref(false)
const menuList = reactive([
  {
    path: '/info/notice',
    name: '通知公告',
  },
  {
    path: '/info/weekly',
    name: '每周安排',
  },
  {
    path: '/info/study',
    name: '学术科研',
  },
  // {
  //   path: '/',
  //   name: 'Navigator Four',
  // },
])
const activities = reactive([
  {
    id: 1,
    timestamp: '2020-01-01',
    content: '<p>欢迎来到学术科研平台</p>',
  },
  {
    id: 2,
    timestamp: '2020-01-02',
    content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台</p>',
  },
  {
    id: 3,
    timestamp: '2020-01-03',
    content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
  },
  {
    id: 4,
    timestamp: '2020-01-04',
    content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
  },
  {
    id: 5,
    timestamp: '2020-01-05',
    content: '<p>欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台欢迎来到学术科研平台</p>',
  },
  {
    id: 6,
    timestamp: '2020-01-06',
    content: '<p>欢迎来到学术科研平台</p>',
  },
  {
    id: 7,
    timestamp: '2020-01-07',
    content: '<p>欢迎来到学术科研平台</p>',
  },
  {
    id: 8,
    timestamp: '2020-01-08',
    content: '<p>欢迎来到学术科研平台</p>',
  },
  {
    id: 9,
    timestamp: '2020-01-09',
    content: '<p>欢迎来到学术科研平台</p>',
  }
])


onBeforeMount(() => {
//  获取浏览器窗口宽度
  const width = document.body.clientWidth
  if (width < 480) {
    // console.log(width)
    collapse.value = true
  }
  // document.querySelectorAll('.box-card').forEach(item => {
  //   item.addEventListener('click', function (id) {
  //     console.log(id)
  //   })
  // } )
})

onMounted(() => {
  // window.addEventListener('scroll', () => {
  //   setTimeout(() => {
  //     handleScroll()
  //   }, 100)
  // })
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount( () => {
    window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  let menu = document.querySelector('.el-menu-vertical-demo')
  // let init_top = menu.style.top - 0
  menu.style.top = scrollTop + 'px'
}


const handleClick = (id) => {
//  TODO 动态路由跳转到info/:id
  console.log(id);
}

const handleSelect = function (key) {
  router.push(key)

  if (window.pageYOffset){
    window.pageYOffset = 0
  }
  if(document.documentElement.scrollTop){
    document.documentElement.scrollTop = 0
  }
  if(document.body.scrollTop){
    document.body.scrollTop = 0
  }

  // console.log(key, keyPath);
  // console.log(router);
  // console.log({...route});
}

// window.onload = () => {
// //  获取浏览器窗口宽度
//   const width = document.body.clientWidth
//   if (width < 480) {
//     console.log(width)
//     collapse.value = true
//   }
//   menuList.append({
//     a: 1
//   })
//   console.log(menuList)
// }

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
/*.box-card:hover {*/
/*  color: #ffff00;*/
/*}*/

.info-menu {
  /*position: fixed;*/
  /*bottom: 0;*/
  /*top: 15%;*/
  box-sizing: border-box;
  background-color: transparent;
  border-right: 1px solid #fff;

  /*padding: 0 9%;*/
}

.el-menu {
  width: 25%;
  /*height: 70vh;*/
  background-color: transparent;
  border: none ;
  position: absolute;
  top: 0;
}

.el-row {
  min-height: 70vh;
}

</style>
