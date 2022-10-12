<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getChat } from "@/firebase";

const { addMessage } = getChat();

const messageText = ref("");

function resizeInput() {
  let input = document.querySelector("input");
  input.style.height = 0;
  let height = input.scrollHeight;
  input.style.height = height > 150 ? "150px" : height + "px";
}

function sendMessage() {
  if (messageText.value.trim().length !== 0) {
    addMessage(messageText.value);
  }

  messageText.value = "";
}
</script>

<template>
  <div class="message-input-container">
    <input
      type="text"
      placeholder="Your message"
      @input="resizeInput()"
      v-model="messageText"
      v-on:keyup.enter="sendMessage()"
    />
    <div class="message-actions">
      <span class="mdi mdi-paperclip"></span>
      <span class="mdi mdi-image-size-select-actual"></span>
      <button @click="sendMessage()">Send</button>
    </div>
  </div>
</template>

<style scoped>
.message-input-container {
  width: 100%;
  height: calc(1.3rem + 50px);

  margin-top: auto;

  background: #65649d;

  display: flex;
}

input {
  margin: 25px;
  width: 100%;
  height: 1.3rem;

  outline: none;
  border: none;

  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;

  resize: none;

  background: transparent;
}

::placeholder {
  color: #a0a0c1;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #a0a0c1;
}

::-ms-input-placeholder {
  color: #a0a0c1;
}

.message-actions {
  display: flex;
  align-items: center;
  column-gap: 10px;

  padding-right: 10px;
}

button {
  margin-left: 10px;

  height: fit-content;
  padding: 10px 25px;

  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;

  background: #3c3b81;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #fff;
}

button:hover {
  cursor: pointer;
}

.mdi {
  color: #bfbfcf;
  font-size: 1.3rem;
  transition: 300ms;
}

.mdi:hover {
  color: #fff;
  cursor: pointer;

  transition: 300ms;
}
</style>
