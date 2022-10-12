<script setup lang="ts">
import { getChat, getAuth } from "@/firebase";

const { user, isLoggedIn } = getAuth();
const { messages } = getChat();
</script>

<template>
  <div class="messages-container">
    <div class="message" v-for="(chat, index) in messages" :key="index">
      <img :src="chat.profilepicture" alt="" />
      <div class="message-content">
        <div class="info">
          <p class="username">
            {{ chat.username }}
          </p>
          <p class="timestamp" v-if="chat.createdAt">
            {{ chat.createdAt.toLocaleDateString() }}
            {{ chat.createdAt.getHours() }}:{{ chat.createdAt.getMinutes() }}
          </p>
        </div>

        <h2>{{ chat.text }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.messages-container {
  margin: 30px 0;

  height: calc(100% - 2rem - 1.3rem - 150px);
  overflow: scroll;

  display: flex;
  flex-direction: column-reverse;
}

.message {
  padding: 0 30px;

  display: flex;
  align-items: center;
  column-gap: 20px;
}

.message:not(:last-child) {
  margin-top: 20px;
}

.message h2 {
  margin: 0;
  margin-top: 7.5px;

  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
}

.username {
  margin: 0;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 1.4rem;
}
.timestamp {
  margin: 0;
  color: rgb(200, 200, 200);
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -0.3px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
