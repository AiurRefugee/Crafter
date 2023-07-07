<template>
    <div class="header-wrapper"> 
        <el-select filterable placeholder="Search"> 
        </el-select>
        <Search class="searchIcon"/> 
        <div> 图例大小 </div> 
        <el-slider v-model="folderSize" class="silderArea"></el-slider>
        <div class="textArea">选择</div>
    </div>
</template>
<script setup >
import { ref } from 'vue'
var folderSize = ref(0)
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
    flex: 1;
    background-color: white; 
    justify-content: flex-end;
    // padding-right: 3%;
    font-size: 25px;
    color: $--color-primary; 
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
</style>
