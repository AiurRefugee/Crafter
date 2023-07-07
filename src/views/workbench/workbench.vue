<template>
    <div class="main-wrapper">
        <div class="header-wrapper" > 
            <Plus class="newFile" />
            <el-select filterable placeholder="Search"> 
            </el-select>
            <Search class="searchIcon"/> 
            <div> 图例大小 </div> 
            <el-slider v-model="folderSize" class="silderArea"></el-slider>
            <div class="textArea">选择</div>
        </div>
        <div class="mainArea">
            <div class="scroll-wrapper">
                <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                    <div v-for="i in count" 
                        :key="i" class="infinite-list-item" 
                        :style="{width: 240 + folderSize + 'px'}"
                        @click="toEditor"> 
                        <div class="iconArea"></div>
                        <div class="title">
                            {{  'item' + i }}
                        </div>
                    </div>
                    <el-backtop :right="100" :bottom="100" />
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter(); // 路由

var folderSize = ref(50)
const count = ref(0)
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
        background-color: rgb(234, 234, 234);
        border-radius: 5px;
        width: 30px;
        left: 2%;
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
    padding: 1%;
    .scroll-wrapper {
        width: 99%;
        flex: 1;
        overflow: hidden;
        .infinite-list {
            width: 100%;
            height: 800px; 
            list-style: none;
            display: flex; 
            align-content: center;
            flex-wrap: wrap;
            .infinite-list-item {
                display: flex; 
                align-items: center;
                justify-content: center; 
                flex-direction: column;
                aspect-ratio: 1.5;
                position: relative;
                width: 200px;
                margin: 10px;
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
