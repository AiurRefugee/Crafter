<template>
    <div class="loginWapper">
        <div class="loginArea"></div>
    </div>
</template>
<script setup>

</script>

<style lang="scss">
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
        padding: 2%;
        width: 50%;
        height: 70%;
        border-radius: 30px;  
        position: absolute;
        z-index: 99;
        background-color: white;
        background-size: cover;
        background-color: rgb(255, 248, 248);
        box-shadow: 0px 0px 20px rgb(186 185 185), -20px -20px 20px rgba(0, 0, 0, 0.3);
        // filter: blur(3px);
        @media(max-width: 1000px) {
            width: 80%;
            height: 65%;
        }
    }
}
</style>