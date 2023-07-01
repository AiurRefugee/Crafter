<template>
  <div class="app-container">
   <div class="titleArea">
    <div class="iconTitle">
      <text>Crafter</text>
    </div>
    <div class="subTitle">
      Create your crafts on every sites
    </div>
   </div>
    <div class="imageContainer">
      <div
        v-for="(value, index) in imageList"
        class="imageItem"
        :ref="`image${index}`"
        :style="{
          'background-position': `${offSets[index]}`,
          'background-image': `url('/src/assets/images/${value}.JPG')`,
          // 'background-size': `${scales[index].value}%`
        }"
      ></div>
    </div>
    <div class="loginArea">
      <div class="loginTitle">

      </div>
      <div class="textArea">
        <text> Username or email address</text>
      </div>
      <div class="inputArea">
        <el-input v-model="userName"></el-input>
      </div>
      <div class="textArea">
        <text> Password</text>
      </div>
      <div class="inputArea">
        <el-input v-model="passWord"></el-input>
      </div>
      <div class="loginIcons">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-icon></el-icon>
          </el-col>
        </el-row>
      </div>
      <div class="buttonArea">
        <el-button type="primary" size="large">Sign in</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import { ref, onMounted } from 'vue';
let imageList = ref(['Car3','gundam', 'girl', 'trans', 'gang']);
let offSets = ref(['45%', '35%', '43%', '45%', '50%', '40%']);
var scales = ref([{ value: 260 }, { value: 310 }, { value: 330 }, { value: 160 }]);
var scalesTo = ref([{ value: 280 }, { value: 330 }, { value: 350 }, { value: 180 }]);
var userName = ref(null);
var passWord = ref(null);
var image0 = ref(null);
var image1 = ref(null);
var image2 = ref(null);
var image3 = ref(null);
function playAnimation() {
  for (let index = 0; index < scales.value.length; index++) {
    gsap.to(scales.value[index], {
      duration: 2,
      value: scalesTo.value[index].value,
      delay: 4 * index,
      ease: 'strong.inOut'
    });

  }
}
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

  .titleArea {
    z-index: 99;
    position: absolute;
    color: white;
    width: 50%;
    height: 50%;
    top: 20%;
    pointer-events: none;
    text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    @media (max-width: 700px) {
      width: 100%;
      height: 30%;
      top: 0;
    }
    .iconTitle {
      width: 90%;
      height: 60%;
      font-size: 120px;
      justify-content: flex-start;
      top: 20%;
      padding: 1%;
      font-weight: 800;
      font-family: Apple SD Gothic Neo;
      font-style: oblique;
      letter-spacing: 5px;
      align-content: flex-start;
      line-height: normal;
      pointer-events: none;
      //box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    }
  .subTitle {
    position: absolute;
    width: 80%;
    margin-left: 15%;
    top: 35%;
    padding: 3%;
    font-size: 25px;
    font-family: Apple SD Gothic Neo;
    letter-spacing: 5px;
    pointer-events: none;
  }
  }
  .imageContainer {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.9;
    // filter: blur(1px);

    .imageItem {
      flex: 1;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(2px);
    }
    :hover {
      transform: scale(1.1);
      filter: none;
    }

  }
  .loginArea {
    flex-direction: column;
    pointer-events: none;
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
    background-size: cover;
    background-color: rgba(200, 200, 200, 0.8);
    // border: 10px solid black;
    // backdrop-filter: blur(10px);
    box-shadow: 10px 10px 20px rgb(186 185 185), -20px -20px 20px rgba(0, 0, 0, 0.3);
    // filter: blur(3px);

    @media (max-width: 700px) {
      width: 60%;
      height: 50%;
      top: 40%;
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
