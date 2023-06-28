<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
let imageList = ref([
  "gundam",
  "girl",
  "trans", 
  "gang"
])
 
let offSets = ref(['40%','45%','50%','40%'])

</script>

<template>
  <div class="app-container">
    <div class="iconTitle">
      <text>Crafter</text>
    </div>
    <div class="imageContainer">
      <div v-for="(value, index) in imageList" :class="`imageItem${index + 1}`" 
        :style="{ 
          'background-position': `${offSets[index]}`,
          'background-image': `url('/src/assets/images/${value}.JPG')`
      }">
      </div>
    </div>
    <div class="loginArea">
      <div class="loginTitle">

      </div>
      <div class="textArea">
       <text> Username or email address</text>
      </div>
      <div class="inputArea">
        <el-input></el-input>
      </div>
      <div class="textArea">
       <text> Password</text>
      </div>
      <div class="inputArea">
        <el-input></el-input>
      </div>
      <div class="loginIcons">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-icon></el-icon>
          </el-col>
        </el-row>
      </div>
      <div class="buttomArea">
        <el-button type="primary" size="large">Sign in</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  } 
}

.element {
  animation: scaleAnimation 2s;
}

div {
  // border: 1px solid white; 
  display: flex;
}
.app-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  .iconTitle {
    width: 40%;
    height: 20%;
    font-size: 120px;
    position: absolute;
    z-index: 99;
    color: white;
    justify-content: flex-start;
    padding: 1%;
    font-weight: 800;
    font-family: Apple SD Gothic Neo;
    font-style: oblique;
    letter-spacing: 5px;
    align-content: flex-start;
    line-height: normal;
    //box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
    .imageContainer {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.9; 
    // filter: blur(1px);
    $total: 4; 
    @for $i from 0 through 4 {
      .imageItem#{$i} {
        flex: 1;
        height: 100%; 
        background-repeat: no-repeat;
        background-size: cover;
        margin: 1px;
        animation: scaleAnimation 2s ease;
        animation-delay: #{2 * ( $i - 1)}s;
        animation-fill-mode: both;
        animation-direction: alternate;
      }
    }
  }
  .loginArea {
    flex-direction: column; 
    align-items: center;
    padding: 2%;
    width: 35%;
    height: 70%;
    border-radius: 10%;
    right: 5%;
    top: 15%;
    position: absolute;
    z-index: 99;
    color: white;
    background-color: rgba(200, 200, 200, 0.6);
    // border: 10px solid black;
    backdrop-filter: blur(10px);
    // box-shadow: 10px 10px 10px rgb(0, 0, 0), -20px -20px 20px rgba(0, 0, 0, 0.3);
    // filter: blur(3px);
    .loginTitle {
      width: 60%;
      height: 30%;
      align-self: center; 
    }
    .textArea {
      font-size: 20px;
      width: 90%;
      margin: 2%;
    }
    .inputArea {
      width: 90%;
      height: 8%;
      color: black;
    }
    .buttomArea {
      width: 90%;
      margin-top: 5%;
      height: 9%;
      ::v-deep {
        .el-button--large {
          width: 100%;
          height: 100%;
          font-size: 25px;
        }
      }
    }
  }
} 

</style>
