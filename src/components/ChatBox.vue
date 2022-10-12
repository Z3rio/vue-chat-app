<script setup lang="ts">
import { ref } from "vue";

import MessageInput from "./MessageInput.vue";
import Messages from "./Messages.vue";

const contact = ref({
  username: "Test123123",
});
</script>

<template>
  <div class="chat-container">
    <div class="contact-info">
      <h1>{{ contact.username }}</h1>

      <div class="contact-actions">
        <span class="mdi mdi-video"></span>
        <span class="mdi mdi-account-multiple-plus"></span>
        <span class="mdi mdi-dots-horizontal"></span>
      </div>
    </div>
    <Messages />
    <MessageInput />
  </div>
</template>

<style scoped>
.chat-container {
  width: 100%;
}

.contact-info {
  display: flex;
  align-items: center;

  height: 2rem;

  padding: 20px 30px;

  background: #393862;
}

.contact-info h1 {
  margin: 0;

  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 400;
}

.contact-actions {
  display: flex;

  margin-left: auto;

  column-gap: 15px;
}

.contact-actions .mdi {
  color: #ddd;
  font-size: 1.5rem;

  transition: 300ms;
}

.contact-actions .mdi:hover {
  cursor: pointer;
  color: #fff;

  transition: 300ms;
}
</style>
