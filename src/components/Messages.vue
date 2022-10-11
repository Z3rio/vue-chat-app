<script setup lang="ts">
import { ref } from "vue";
import Message from "./Message.vue";

const chats = ref({
  username: "Test",
  profilepicture:
    "https://i.pinimg.com/736x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
  chats: [
    {
      message: "hi1asdfasdffasdfasdfasfadsfdasadsfafdsafds",
      dateSent: new Date(1665503950999),
      isYou: false,
    },
    {
      message: "hi2",
      dateSent: new Date(1665503970999),
      isYou: true,
    },
  ],
});
</script>

<template>
  <div class="messages-container">
    <Message
      v-for="(chat, index) in chats.chats"
      :key="index"
      :chat="chat"
      :user="{ username: chats.username, profilepicture: chats.profilepicture }"
    />
  </div>
</template>

<style scoped>
.messages-container {
  flex: 1;
}
</style>
