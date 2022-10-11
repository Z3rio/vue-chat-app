<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  chat: Object;
  user: Object;
}>();

const currentUser = ref({
  username: "Test123123",
  profilepicture:
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
});
</script>

<template>
  <div class="message">
    <img
      :src="chat.isYou ? user.profilepicture : currentUser.profilepicture"
      alt=""
    />
    <div class="message-content">
      <div class="info">
        <p class="username">
          {{ chat.isYou ? currentUser.username : user.username }}
        </p>
        <p class="timestamp">
          {{ chat.dateSent.toLocaleDateString() }}
          {{ chat.dateSent.getHours() }}:{{ chat.dateSent.getMinutes() }}
        </p>
      </div>

      <h2>{{ chat.message }}</h2>
    </div>
  </div>
</template>

<style scoped>
.message {
  padding: 0 30px;

  display: flex;
  align-items: center;
  column-gap: 20px;
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
