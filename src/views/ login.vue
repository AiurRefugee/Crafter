<script setup lang="ts"> 
import { ref } from 'vue'
let imageList = ref([
  "car",
  "gundam",
  "girl",
  "trans", 
  "gang"
])
let offSets = ref(['40%','40%','45%','50%','40%'])
</script>

<template>
  <div class="app-container">
    <div v-for="(value, index) in imageList" class="imageItem"
      :key="`image${index}`"
      :style="{ 
        'background-position': `${offSets[index]}`,
        'background-image': `url('/src/assets/images/${value}.JPG')`
        
    }"
      >
    </div>
  </div>
</template>

<style scoped>
div {
  /*border: 1px solid white;*/
  display: flex;
}
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: black;
}
.imageItem { 
  flex: 1;
  height: 100%; 
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
