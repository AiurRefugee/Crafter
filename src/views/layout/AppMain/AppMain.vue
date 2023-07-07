<template>
  <div class="main-wrapper">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped></style>
