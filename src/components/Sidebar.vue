<script setup lang="ts">
import Information from "./Information.vue";
import Search from "./Search.vue";
import ChatHistory from "./ChatHistory.vue";
</script>

<template>
  <div class="sidebar-container">
    <Information />
    <Search />
    <ChatHistory />
  </div>
</template>

<style scoped>
.sidebar-container {
  width: 20%;
  min-width: 500px;
  max-width: 1000px;

  background-color: #343354;

  display: flex;
  flex-direction: column;
}
</style>
