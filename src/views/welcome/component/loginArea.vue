<template>
  <div class="loginWapper">
    <div class="loginArea">
      <el-space direction="vertical" :size="2">
        <el-row>
          <el-col :span="24" class="inputTitle">账号/邮箱/用户名</el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="inputTitle">
            <el-input size="large" v-model="form.username"> </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="inputTitle">密码</el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-input show-password type="password" size="large" v-model="form.password"> </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="21">
            <a style="color: #1f75cb">忘记密码？</a>
          </el-col>
        </el-row>
        <el-row class="loginButton">
          <el-col :span="24" class="inputTitle">
            <el-button type="primary" size="large" @click="login">
              <text>登录</text>
            </el-button>
          </el-col>
        </el-row>
        <el-divider content-position="center">更多方式</el-divider>
        <el-row>
          <el-col :span="4" v-for="i in iconList" :key="`span${i}`">
            <el-avatar :src="`${iconBaseUrl}${i}.svg`" :size="50" fit="fit" @click="message"></el-avatar>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <span>还没有账户？</span> 
          </el-col >
          <el-col :span="2">
            <a href="www.bilibili.com" style="color: #1f75cb">立即注册</a>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="margin-top: -1%">
            登入即代表您同意并接受极狐Crafter服务条款和账号规范。如使用企业邮箱订阅本服务，则您同意Crafter将该账户数据提供给对应企业而无需另行对您进行通知或承担责任。
          </el-col>
        </el-row>
      </el-space>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter(); // 路由
let iconBaseUrl = ref('/src/assets/images/');
let iconList = ref(['unity', 'apple', 'github', 'google']);
var form = ref({
  username: '',
  password: ''
});
function message() {
  ElMessage({
    message: 'to be continued.',
    type: 'warning'
  });
}

function login() { 
  router.push({ name: 'Home' });
}
</script>

<style lang="scss">
:deep(.el-divider__text) {
  color: gray;
}
.loginWapper {
  z-index: 99;
  position: absolute;
  backdrop-filter: brightness(0.7);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  .loginArea {
    flex-direction: column;
    align-items: center;
    padding: 5%;
    width: 60%;
    height: 76vh;
    border-radius: 30px;
    position: absolute;
    z-index: 99;
    background-color: white;
    background-size: cover;
    background-color: white;
    box-shadow: 0px 0px 24px rgb(186 185 185), -24px -24px 24px rgba(0, 0, 0, 0.3);
    // filter: blur(3px);
    @media (max-width: 1000px) {
      width: 80%;
      height: 50%;
    }
    .inputTitle {
      width: 80%;
      height: 50px;
      flex: 1;
      // border: 1px solid black;
      justify-content: flex-start;
      font-size: 24px;
      color: gray;
    }
    .loginButton {
      margin-top: 1%;
      letter-spacing: 10px;
    }
  }
}
</style>
