<template>
    <div class="loginWapper">
        <div class="loginArea"> 
          <var-space direction="column" :size="[20, 20]" justify="space-around">
                <var-row >
                    <var-col :span="24" class="inputTitle">账号/邮箱/用户名</var-col>
                </var-row>
                <var-row >
                    <var-col :span="24" class="inputTitle">
                        <var-input variant="outlined" placeholder="请输入账号/邮箱/用户名" size="large"></var-input>
                    </var-col>
                </var-row>
                <var-row>
                    <var-col :span="24" class="inputTitle">密码</var-col>
                </var-row>  
                <var-row >
                    <var-col :span="24" class="inputTitle" >
                        <var-input  variant="outlined" placeholder="请输入密码"  size="large"></var-input>
                    </var-col>
                </var-row> 
                <var-row>
                    <var-col :span="8" :offset="21">
                        <a style="color: #1f75cb">忘记密码？</a>
                    </var-col>
                </var-row>
                <var-row class="loginButton">
                    <var-col :span="24" class="inputTitle">
                        <var-button type="primary" size="large">
                            <text>登录</text>
                        </var-button>
                    </var-col>
                </var-row>
                <var-divider content-position="center">更多方式</var-divider>
                <var-row justify="center">
                    <var-col :span="4" v-for="i in iconList" :key="`span${i}`">
                        <var-avatar :src="`${iconBaseUrl}${i}.svg`" :size="50" fit="fit" @click="message"></var-avatar>
                    </var-col>
                </var-row>
                <var-row>
                    <var-col :span="3" :offset="10">
                        <span>还没有账户？</span>
                        
                    </var-col>
                    <var-col :span="3">
                      <a href="www.bilibili.com" style="color: #1f75cb">立即注册</a>
                    </var-col>
                </var-row>
                <var-row>
                    <var-col :span="24" style="margin-top: -1%;">
                        登入即代表您同意并接受极狐Crafter服务条款和账号规范。如使用企业邮箱订阅本服务，则您同意Crafter将该账户数据提供给对应企业而无需另行对您进行通知或承担责任。
                    </var-col>
                </var-row> 
            </var-space> 
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
let iconBaseUrl = ref('/src/assets/images/')
let iconList = ref(['unity','apple', 'github', 'google'])
function message() {
    ElMessage({
        message: 'to be continued.',
        type: 'warning',
    })
}
</script>

<style lang="scss">
:deep(.var-divider__text ){
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
        height: 75%;
        border-radius: 30px;  
        position: absolute;
        z-index: 99;
        background-color: white;
        background-size: cover;
        background-color: white;
        box-shadow: 0px 0px 24px rgb(186 185 185), -24px -24px 24px rgba(0, 0, 0, 0.3);
        // filter: blur(3px);
        @media(max-width: 1000px) {
            width: 80%;
            height: 50%;
        }
        .inputTitle {
            width: 80%;
            height: 40px;
            flex: 1;
            // margin-top: 5%;
            // border: 1px solid black;
            justify-content: flex-start;
            font-size: 24px;
            color: black;
        }
        .loginButton {
            margin-top: 1%;
            letter-spacing: 10px;
        }
    }
}
</style>