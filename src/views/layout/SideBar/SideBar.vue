<template>
  <div class="sidebar-wrapper">
    <div 
      :class="[`sideBarItem${index + 1}`, currentSelect == index ? 'activated' : '']"   
      v-for="(value, index) in sideBars" 
      :key="`sideBar${index}`"
      @click="activate(index)"
      >
      <router-link :to="`/${value.iconName}`">
        <div class="iconArea">
          <el-image 
          :src="`${iconBaseUrl}${value.iconName}.svg`" 
          ></el-image>
        </div>
        <div>{{ value.name }}</div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let iconBaseUrl = ref('/src/assets/icons/');
let sideBars = ref([
  { name: '工作台', iconName: 'workbench' },
  { name: '动态', iconName: 'messages' },
  { name: '商城', iconName: 'market' },
  { name: '设备', iconName: 'machine' },
  { name: '我的', iconName: 'profile' }
]);
var currentSelect = ref(0);
function activate(index) {
  currentSelect.value = index 
}
</script>
<style lang="scss">
$iconSize: 30px;
@import '@/style/el-variables.scss';
.activated {
    color: blue;
  }
.sidebar-wrapper {
  width: 10vw;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(242, 243, 245);
  @media (max-width: 1000px) {
    flex-direction: row;
    width: 100vw;
    height: 8vh;
    background-color: white;
  }

  

  @for $i from 1 through 5 {
    .sideBarItem#{$i} {
      width: 100%;
      height: 15%;
      font-size: 25px;
      color: black;
      // flex-direction: column;
      font-family: Apple SD Gothic Neo;
      padding: 2%;
      @media (max-width: 1000px) {
        height: 100%;
        flex-direction: column;
        flex: 1;
      }
      
      
      
      .iconArea { 
        margin: 1%;
        width: $iconSize;
        height: $iconSize;
        color: black;
      }
    }

    :hover {
      background-color: rgb(173, 172, 172);
      //color: $--color-primary;
    } 
  }
}
</style>
