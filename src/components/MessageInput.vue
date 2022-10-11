<script setup lang="ts">
function resizeTextarea() {
  let textarea = document.querySelector("textarea");
  textarea.style.height = 0;
  let height = textarea.scrollHeight;
  textarea.style.height = height > 150 ? "150px" : height + "px";
}
</script>

<template>
  <div class="message-input-container">
    <textarea
      type="text"
      placeholder="Your message"
      @input="resizeTextarea()"
    />
    <div class="message-actions">
      <span class="mdi mdi-paperclip"></span>
      <span class="mdi mdi-image-size-select-actual"></span>
      <button>Send</button>
    </div>
  </div>
</template>

<style scoped>
.message-input-container {
  width: 100%;

  margin-top: auto;

  background: #65649d;

  display: flex;
}

textarea {
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
