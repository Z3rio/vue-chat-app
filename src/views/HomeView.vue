<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import ChatBox from "../components/ChatBox.vue";
</script>

<template>
  <div class="home-container">
    <Sidebar />
    <ChatBox />
  </div>
</template>

<style scoped>
.home-container {
  position: absolute;
  display: flex;

  overflow: hidden;

  width: 80vw;
  height: 80vh;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0 18px 36px -18px;
  background: #45446c;
  border-radius: 10px;
}
</style>
