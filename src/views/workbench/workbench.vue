<template>
    <div class="main-wrapper">
        <div class="header-wrapper" > 
            <Plus class="newFile" />
            <el-select filterable placeholder="Search"> 
            </el-select>
            <Search class="searchIcon"/> 
            <div> 图例大小 </div> 
            <el-slider v-model="itemSize" :show-tooltip="false" class="silderArea"></el-slider>
            <div class="textArea">选择</div>
        </div>
        <div class="mainArea">
            <div class="scroll-wrapper">
                <div class="infinite-list"
                :style="{'grid-template-columns': `repeat(auto-fill, ${itemSize / 7 + 16 + '%'})`}"
                > 
                    <div v-for="i in count" 
                        :key="i" class="infinite-list-item" 
                          
                        @click="toEditor"> 
                        <div class="iconArea"></div>
                        <div class="title">
                            {{  'item' + i }}
                        </div>
                    </div>
                    <el-backtop :right="100" :bottom="100" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';

import * as THREE from 'three'
const router = useRouter(); // 路由

var itemSize = ref(50)
const count = ref(47)
const load = async () => {
  count.value += 10
}
function toEditor() {
    router.push('/editor')
}
</script>
<style lang="scss" scoped>
@import '@/style/el-variables.scss';
:deep(.el-input__suffix) {
    display: none;
}
:deep(.el-select) {
    width: 20%; 
}
:deep(.el-select .el-input) {
    height: 85%;
}
.header-wrapper {
    width: 100%;
    height: 8vh; 
    position: relative;
    background-color: white; 
    justify-content: flex-end;
    // padding-right: 3%;
    font-size: 25px;
    color: $--color-primary; 
    .newFile {
        position: absolute;
        background-color: rgb(243, 243, 243);
        border-radius: 5px;
        width: 40px;
        left: 3%;
    }
    .searchIcon {
        width: 30px;
        aspect-ratio: 1;
        margin: 2%;
    } 
    .textArea {
        width: 60px;
        margin: 2%;
    }
    .silderArea {
        width: 10%;
        margin-left: 2%;
    }
} 
.mainArea {
    width: 100%;
    flex: 1; 
    flex-direction: column;
    justify-content: flex-start;
    // padding: 1%;
    overflow: hidden; 
    .scroll-wrapper {
        width: 100%;
        flex: 1;
        overflow: hidden; 
        justify-content: center;
        align-content: flex-start;
        
        margin: 0;
        .infinite-list { 
            width: 99%;
            height: 100%;  
            display: grid;
            grid-template-columns: repeat(auto-fill, 40%);
            justify-items: center;
            row-gap: 2%;
            column-gap: 2%; 
            padding: 2%;
            flex-wrap: wrap;
            overflow: auto;
            .infinite-list-item {
                width: 90%;

                aspect-ratio: 1.3;
                align-items: center;
                justify-content: center; 
                flex-direction: column;
                aspect-ratio: 1.5;
                position: relative; 
                margin: 2%;
                
                .iconArea {
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 10px;
                }
                .title { 
                    width: 100%;
                    height: 12%;
                }
            }
             
        }
         
    }
    
}
</style>
