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
  <div
    class="message"
    :style="{
      'flex-direction': chat.isYou ? 'row-reverse' : 'row',
    }"
  >
    <div
      class="info"
      :style="{
        'align-items': chat.isYou ? 'flex-end' : 'flex-start',
      }"
    >
      <img
        :src="chat.isYou ? user.profilepicture : currentUser.profilepicture"
        alt=""
      />
      <p>
        {{ chat.dateSent.toLocaleDateString() }}
        {{ chat.dateSent.getHours() }}:{{ chat.dateSent.getMinutes() }}
      </p>
    </div>
    <div class="message-content">
      <h2>{{ chat.message }}</h2>
    </div>
  </div>
</template>

<style scoped>
.message {
  padding: 10px 30px;

  display: flex;
}

.info {
  display: flex;
  flex-direction: column;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
