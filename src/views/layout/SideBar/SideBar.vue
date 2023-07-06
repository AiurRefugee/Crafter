<template>
  <div class="sidebar-wrapper">
    <div :class="`sideBarItem${index + 1}`" v-for="(value, index) in sideBars">
      <div class="iconArea">
        <el-image :src="`${iconBaseUrl}${value.iconName}.svg`"></el-image>
      </div>
      <div>{{ value.name }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let iconBaseUrl = ref('/src/assets/icons/');
let sideBars = ref([
  { name: '工作台', iconName: 'workBench' },
  { name: '动态', iconName: 'messages' },
  { name: '商城', iconName: 'market' },
  { name: '我的', iconName: 'profile' }
]);
var currentSelect = ref(0);
</script>
<style lang="scss">
$iconSize: 25px;
@import '@/style/el-variables.scss';
.sidebar-wrapper {
  width: 10vw;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(242, 243, 245);
  position: absolute;
  left: 0;
  @media (max-width: 1000px) {
    flex-direction: row;
    width: 100vw;
    height: 8vh;
    background-color: white;
    position: absolute;
    bottom: 0;
  }
  @for $i from 1 through 4 {
    .sideBarItem#{$i} {
      width: 100%;
      height: 15%;
      font-size: 25px;
      flex-direction: column;
      font-family: Apple SD Gothic Neo;
      padding: 2%;
      @media (max-width: 1000px) {
        height: 100%;
        flex: 1;
      }
      .iconArea {
        fill: $--color-primary;
        width: $iconSize;
        height: $iconSize;
      }
    }

    :hover {
      background-color: rgb(173, 172, 172);
    }
  }
}
</style>
