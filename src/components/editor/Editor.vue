<template>
  <div style="border: 1px solid #ccc; background-color: transparent">
    <div>
      <el-input v-model="title" placeholder="请在此输入标题">
        <!--        <template #prepend>请输入标题 :</template>-->
        <template #append>
          <el-select v-model="select_value" filterable placeholder="选择分类">
            <el-option
                v-for="item in category"
                :key="item.id"
                :label="item.name"
                :value="item.id"
            />
          </el-select>
        </template>
      </el-input>

      <!--      <el-input v-model="category" placeholder="Please input">-->
      <!--        <template #prepend>请选择类别 :</template>-->
      <!--      </el-input>-->
    </div>
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="handleChange"
    />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import {onBeforeUnmount, ref, shallowRef, onMounted} from 'vue'
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')
//信息标题
const title = ref('')
//选择的信息类别
const select_value = ref('')
//TODO 信息类别信息，写个方法从后端获取后赋值给category
const category = reactive([
  {
    id: 1,
    name: '通知公告'
  },
  {
    id: 2,
    name: '每周安排'
  },
  {
    id: 3,
    name: '学术科研'
  }
])

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}
const editorConfig = {placeholder: '请输入内容...'}
const mode = ref('default')

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleChange = (editor) => {
  console.log('change:', editor.children, valueHtml.value)
  console.log(editorRef)
}

// 修改菜单栏背景颜色
// editorRef.toolbarSelector.style.background = '#000'


</script>

<style scoped>

</style>
