<script setup lang="ts">
import { ref } from "vue";

const chats = ref([
  {
    username: "Test",
    profilepicture:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    chats: [
      {
        message: "hi1asdfasdffasdfasdfasfadsfdasadsfafdsafds",
        time: 1,
      },
      {
        message: "hi2",
        time: 2,
      },
    ],
  },
  {
    username: "Test2",
    profilepicture:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    chats: [
      {
        message: "hi3",
        time: 3,
      },
      {
        message: "hi4",
        time: 4,
      },
    ],
  },
]);
</script>

<template>
  <div class="chathistory-container">
    <div class="userchat" v-for="(user, index) in chats" :key="index">
      <img :src="user.profilepicture" alt="Profile picture" />
      <div class="userdata">
        <h1>{{ user.username }}</h1>
        <h2>{{ user.chats[0].message }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chathistory-container {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  margin-top: 25px;
}

.userchat {
  padding: 10px 20px;

  display: flex;
  column-gap: 25px;
}

.userchat img {
  border-radius: 100%;
  width: 64px;
  height: 64px;
}

.userdata {
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: 300ms;

  width: 100%;
}

.userchat:hover {
  cursor: pointer;
  background: #3c3b6c;
  transition: 300ms;
}

.userchat h1 {
  margin: 0;

  color: #fff;
  font-family: "Lato", sans-serif;
  font-size: 1.75rem;

  width: 90%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userchat h2 {
  margin: 0;

  color: #ddd;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;

  width: 90%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
