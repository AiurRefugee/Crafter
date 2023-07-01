<template>
  <div class="app-container">
   <div class="titleArea">
    <div class="iconTitle">
      <text>Crafter</text>
    </div>
    <div class="subTitle">
      Create your crafts on every sites
    </div>
    <div class="loginButtom">
      <text>Get into Crafter </text>
    </div>
    <div class="iconsArea">
      <div
        v-for="i in platforms"
        class="platfrom">
      </div>
    </div>
   </div>
    <div class="imageContainer">
      <div
      v-for="(value, index) in imageList"
      class="imageWapper"
      >
        <div
        :class="`imageItem${index + 1}`"
        :style="{
          'background-image': `url('/src/assets/images/${value}.JPG')`,
          // 'background-size': `${scales[index].value}%`
        }"></div>
      </div>
    </div>
    <!-- <div class="loginArea">
      <div class="loginTitle">

      </div>
      <div class="textArea">
        <text> Username or email address</text>
      </div>
      <div class="inputArea">

      </div>
      <div class="textArea">
        <text> Password</text>
      </div>
      <div class="inputArea">

      </div>
      <div class="loginIcons">
        <el-row :gutter="20">

        </el-row>
      </div>
      <div class="buttonArea">
        <el-button type="primary" size="large">Sign in</el-button>
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import { ref, onMounted } from 'vue';
let imageList = ref(['Car3','gundam', 'girl', 'trans', 'gang']);
let platforms = ref(['PC','Mac', 'Android', 'iOS']);
var userName = ref(null);
var passWord = ref(null);
var image0 = ref(null);
var image1 = ref(null);
var image2 = ref(null);
var image3 = ref(null);

onMounted(() => {

});
</script>
<style lang="scss" scoped>
:deep(.el-button--large) {
  width: 100%;
  height: 100%;
  font-size: 25px;
}

div {
  // border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none; /* IE 和 Edge */
  scrollbar-width: none; /* Firefox */
  /* WebKit (Chrome 和 Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

}
.app-container {
  width: 100vw;
  height: 100vh;
  position: relative;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
  .titleArea {
    z-index: 99;
    position: absolute;
    flex-direction: column;
    color: white;
    width: 90%;
    height: 60%;
    pointer-events: none;
    filter: brightness(1.05);
    @media (max-width: 1000px) {
      position: absolute;
      top: 18%;
    }
    .iconTitle {
      width: 90%;
      height: 25%;
      z-index: 99;
      font-size: 130px;
      padding: 1%;
      font-weight: 800;
      font-family: Apple SD Gothic Neo;
      font-style: oblique;
      letter-spacing: 25px;
      align-content: center;
      line-height: 1;
      pointer-events: none;
      text-shadow: 0px 0px 25px rgba(0, 0, 0, 1);

      @media (max-width: 1000px) {
        height: 15%;
      }
    }

    .subTitle {
      width: 90%;
      height: 15%;
      padding: 1%;
      font-size: 50px;
      z-index: 99;
      font-weight: 800;
      font-family: Apple SD Gothic Neo;
      text-shadow: 0px 0px 25px rgba(0, 0, 0, 1);
      letter-spacing: 5px;
      pointer-events: none;
      @media (max-width: 1000px) {
        font-size: 40px;
        height: 20%;
      }

    }
    .loginButtom {
      margin-top: 6%;
      width: 500px;
      height: 15%;
      background-color: #409eff;
      border-radius: 90px;
      font-size: 45px;
      transition: transform 1.5s ease;
      font-family: Apple SD Gothic Neo;
      text-shadow: 10px 0px 25px rgba(0, 0, 0, 1);
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 1);
      @media (max-width: 1000px) {
        width: 550px;
        height: 120px;
      }
    }
  }
  .imageContainer {
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: black;
    opacity: 0.9;
    // filter: blur(1px);
    $scales: 450%, 310%, 400%, 420%, 200%;
    $hoverScale: 500%, 320%, 510%, 60%, 400%;
    $offset: 45%, 35%, 43%, 45%, 50%;
    $offset-y: 60%, 20%, 20%, 15%, 60%;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    .imageWapper {
      @for $i from 1 through 5 {
        flex: 1;
        height: 100%;
        overflow: hidden;
        @media (max-width: 1000px) {
          width: 100%;
        }
        .imageItem#{$i} {
          width: 100%;
          height: 100%;
          background-position: nth($list: $offset, $n: $i);
          background-repeat: no-repeat;
          transition: transform 1.5s ease;
          background-size: cover;
          padding-left: 1px;
          padding-right: 1px;
          opacity: 0.8;
          filter: blur(2px);
          @media (max-width: 1000px) {
            background-position-y: nth($list: $offset-y, $n: $i);
          }
        }
        :hover {
          transform: scale(1.05);
          filter: brightness(1.05);
          opacity: 1;
        }

      }
    }


  }
  .loginArea {
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    padding: 2%;
    width: 35%;
    height: 70%;
    border-radius: 2%;
    right: 6%;
    top: 15%;
    position: absolute;
    z-index: 99;
    color: white;
    background-size: cover;
    background-color: rgba(200, 200, 200, 0.8);
    box-shadow: 0px 0px 20px rgb(186 185 185), -20px -20px 20px rgba(0, 0, 0, 0.3);
    // filter: blur(3px);

    @media (max-width: 1000px) {
      width: 60%;
      height: 50%;
      top: 30%;
      left: 20%;
    }
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
    .buttonArea {
      width: 90%;
      margin-top: 5%;
      height: 9%;
    }
  }
}
</style>
