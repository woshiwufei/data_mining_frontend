<template>
  <div class="container">
    <input type="text" class="search_input" v-model="search_word">
    <button @click="handleClick"><i class="iconfont iconsearch"></i></button>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const search_word = ref('')


window.onload = () => {
  const el = document.querySelector('.search_input')
  el.addEventListener('blur', () => {
    console.log(search_word.value);
    search_word.value = ''
    el.value = ''
  })
}

const handleClick = () => {
// TODO 发起网络请求获取所有相关结果
}

</script>

<style scoped>
/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  .container {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 1s;
  }

  .container input {
    display: none;
    width: 0px;
    padding: 0;
    font-size: 17px;
    outline: none;
    border: none;
    background: transparent;
    transition: 1s;
  }

  .container button {
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: #409eff;
  }

  .container button i {
    font: 900 20px '';
    color: #fff;
  }

  .container:hover {
    width: 290px;
    /*border: 2px solid #409eff;*/
    background-color: #fff;
  }

  .container:hover input {
    display: inline-block;
    width: 220px;
  }
}

/*默认*/
@media (min-width: 980px) {
  .container {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 1s;
  }

  .container input {
    display: none;
    width: 0px;
    padding: 0;
    font-size: 17px;
    outline: none;
    border: none;
    background: transparent;
    transition: 1s;
  }

  .container button {
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: #409eff;
  }

  .container button i {
    font: 900 20px '';
    color: #fff;
  }

  .container:hover {
    width: 290px;
    /*border: 2px solid #409eff;*/
    background-color: #fff;
  }

  .container:hover input {
    display: inline-block;
    width: 220px;
  }
}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {
  .container {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 1s;
  }

  .container input {
    display: none;
    width: 0px;
    padding: 0;
    font-size: 17px;
    outline: none;
    border: none;
    background: transparent;
    transition: 1s;
  }

  .container button {
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: #409eff;
  }

  .container button i {
    font: 900 20px '';
    color: #fff;
  }

  .container:hover {
    width: 290px;
    /*border: 2px solid #409eff;*/
    background-color: #fff;
  }

  .container:hover input {
    display: inline-block;
    width: 220px;
  }
}

/* 横向放置的手机和竖向放置的平板之间的分辨率 */
@media (max-width: 767px) {
  .container {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 1s;
  }

  .container input {
    display: none;
    width: 0px;
    padding: 0;
    font-size: 17px;
    outline: none;
    border: none;
    background: transparent;
    transition: 1s;
  }

  .container button {
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: #409eff;
  }

  .container button i {
    font: 900 20px '';
    color: #fff;
  }

  .container:hover {
    width: 290px;
    /*border: 2px solid #409eff;*/
    background-color: #fff;
  }

  .container:hover input {
    display: inline-block;
    width: 220px;
  }
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
  .container {
    margin: 30px auto;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #409eff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 1s;
  }

  .container input {
    display: none;
    width: 0px;
    padding: 0;
    font-size: 17px;
    outline: none;
    border: none;
    background: transparent;
    transition: 1s;
  }

  .container button {
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: #409eff;
  }

  .container button i {
    /*line-height: 1.5rem;*/
    font: 900 20px '';
    color: #fff;
  }

  .container:hover {
    /*margin: 30px auto;*/
    width: 155px;
    /*border: 2px solid #409eff;*/
    background-color: #fff;
  }

  .container:hover input {
    display: inline-block;
    width: 90px;
    transition: 1s;
  }
}

</style>
