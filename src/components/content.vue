<template>
  <div class="app-main-container">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
  .app-main-container {
    position: absolute;
    width: 100%;
    height: calc(100% - 70px);
    margin: 10px;
    padding: 20px;
    background-color: #fff;
  }
</style>
