<template>
  <div class="box">
    <div class="container" id="login-box">
      <div class="form-container sign-up-container">
        <form>
          <h1>注册</h1>
          <div class="txtb">
            <input type="text" v-model="params2.username">
            <span data-placeholder="Username"></span>
          </div>
          <div class="txtb">
            <input type="password" v-model="params2.password">
            <span data-placeholder="Password"></span>
          </div>
          <div class="txtb">
            <input type="password">
            <span data-placeholder="Confirm Pwd"></span>
          </div>
          <button :disabled="submit">注册</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>登录</h1>
          <div class="txtb">
            <input type="text" v-model="params2.username">
            <span data-placeholder="Username"></span>
          </div>
          <div class="txtb">
            <input type="password" v-model="params2.password">
            <span data-placeholder="Password"></span>
          </div>
          <div id="geetest">

          </div>
          <a href="#">忘记密码？</a>
          <button :disabled="submit">登录</button>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>已有账号？</h1>
            <p>请使用您的账号进行登录</p>
            <button class="ghost" id="signIn" @click="()=>{submit = true}">登录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>没有账号?</h1>
            <p>立即注册加入我们，和我们一起开始旅程吧</p>
            <button class="ghost" id="signUp" @click="()=>{submit = true}">注册</button>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted} from "vue";
import '@/assets/gt.js'
import axios from "axios";

const params1 = reactive({
  geetest_challenge: '',
  geetest_validate: '',
  geetest_seccode: ''
})

const params2 = reactive({
  username: '',
  password: ''
})

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

const submit = ref(true)
const prevalidate = async () => {
  return await axios.get('/v2/register')
}

const validate = async(formData) => {
  return axios.post('/v2/validate', formData, {
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
  })
}

const register = async () => {
  return axios.post('/api/user/register',)
}

prevalidate().then(res => {
  let data = res.data
  console.log(data);
  initGeetest({
    // 以下配置参数来自服务端 SDK
    gt: data.gt,
    challenge: data.challenge,
    offline: !data.success,
    new_captcha: true
  }, function (captchaObj) {
    // 这里可以调用验证实例 captchaObj 的实例方法
    captchaObj.appendTo("#geetest"); //将验证按钮插入到宿主页面中geetest元素

    captchaObj.onSuccess(function(captchaObj){
      let index = 6
      let formData = []
      // construct a params formData which meets the need of "application/x-www-form-urlencoded"
      for (let key in params1){
        params1[key] = document.querySelectorAll('input')[index++].value
         formData.push(key + '=' + params1[key])
      }
      validate(formData.join('&')).then(res => {
        if(res.data.result === 'success'){
          console.log(111)
          submit.value = false
        }
        console.log(res);
      })
    })
  })
})

onMounted(() => {
  document.querySelector('#signUp').addEventListener('click', () => {
    document.querySelector('#login-box').classList.add('right-panel-active');
  })

  document.querySelector('#signIn').addEventListener('click', () => {
    document.querySelector('#login-box').classList.remove('right-panel-active');
  })

  document.querySelectorAll('.txtb input').forEach(item =>
      item.addEventListener('focus', () => {
        item.classList.add("focus")
      })
  )

  document.querySelectorAll('.txtb input').forEach(item =>
      item.addEventListener('blur', () => {
        if (item.value === '')
          item.classList.remove("focus")
      })
  )
})
// window.onload = function () {
//   document.querySelector('#signUp').addEventListener('click', () => {
//     document.querySelector('#login-box').classList.add('right-panel-active');
//   })
//
//   document.querySelector('#signIn').addEventListener('click', () => {
//     document.querySelector('#login-box').classList.remove('right-panel-active');
//   })
//
//   document.querySelectorAll('.txtb input').forEach(item =>
//       item.addEventListener('focus', () => {
//         item.classList.add("focus")
//       })
//   )
//
//   document.querySelectorAll('.txtb input').forEach(item =>
//       item.addEventListener('blur', () => {
//         if (item.value === '')
//           item.classList.remove("focus")
//       })
//   )
// }
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  .container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;

  }
  button {
    padding: 12px 45px;
  }
  .sign-in-container form a {
    position: relative;
    left: 100px;
  }
}

/*默认*/
@media (min-width: 980px) {
  .container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;

  }
  button {
    padding: 12px 45px;
  }
  .sign-in-container form a {
    position: relative;
    left: 100px;
  }
}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {
  .container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }
  button {
    padding: 12px 45px;
  }
  .sign-in-container form a {
    position: relative;
    left: 100px;
  }
}

/* 横向放置的手机和竖向放置的平板之间的分辨率 */
@media (max-width: 767px) {
  .container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
    position: relative;
    overflow: hidden;
    width: 90vw;
    max-width: 100%;
    min-height: 480px;
  }
  button {
    padding: 12px 30px;
  }
  /*.sign-in-container form a {*/
  /*  position: relative;*/
  /*  left: 50px;*/
  /*}*/
}

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px) {
  .container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
    position: relative;
    overflow: hidden;
    width: 98vw;
    max-width: 100%;
    min-height: 480px;

  }
  .sign-in-container form a {
    position: relative;
    left: 0;
  }
  button {
    padding: 12px 30px;
  }
}

.box {
  font-family: 'Montserrat', sans-serif;
  /*background-image: linear-gradient(120deg,#3498db,#8e44ad);*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*height: 100vh;*/
  height: 72.5vh;
  /*margin: -20px 0 50px;*/
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: .5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

/*.container {*/
/*  background: #fff;*/
/*  border-radius: 10px;*/
/*  box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);*/
/*  position: relative;*/
/*  overflow: hidden;*/
/*  width: 768px;*/
/*  max-width: 100%;*/
/*  min-height: 480px;*/

/*}*/

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.social-container a:hover {
  background-color: #eee;

}

.txtb {
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 10px 0;
}

.txtb input {
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 3px;
  height: 35px;
}

.txtb span::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  transition: .5s;
}

.txtb span::after {
  content: '';
  position: absolute;
  left: 0%;
  top: 100%;
  width: 0%;
  height: 2px;
  background-image: linear-gradient(270deg, #3498db, #8e44ad);
  transition: .5s;
}

.focus + span::before {
  top: -5px;
}

.focus + span::after {
  width: 100%;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background: #ff4b2b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  /*padding: 12px 45px;*/
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:active {
  transform: scale(.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}
button:disabled{
  cursor: default;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all .6s ease-in-out;
}

.form-container button {
  background: linear-gradient(270deg, #3498db, #8e44ad);
  border: none;
  background-size: 200%;
  color: #fff;
  transition: .5s;
}

.form-container button:hover {
  background-position: right;
}

/*登录框*/
.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

/*.sign-in-container form a {*/
/*  position: relative;*/
/*  left: 100px;*/
/*}*/
/*注册框*/
.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.sign-up-container button {
  margin-top: 20px;
}
/*遮罩层*/
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform .6s ease-in-out;
  z-index: 100;
}

.overlay {
  background-image: linear-gradient(270deg, #3498db, #8e44ad);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);

}

.overlay-left {
  transform: translateY(-20%);
}

.container.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

.container.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

.container.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.container.container.right-panel-active .overlay-left {
  transform: translateY(0);
}

.container.container.right-panel-active .overlay-right {
  transform: translateY(20%);
}

</style>
