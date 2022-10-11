<script setup lang="ts">
import { getAuth } from "@/firebase";
const { signOut } = getAuth();
</script>

<template>
  <div class="holder">
    <div class="user-dropdown">
      <button @click="signOut">Logout</button>
    </div>
  </div>
</template>

<style scoped>
.holder {
  position: absolute;

  width: 20vw;
  left: 0px;
  top: 6rem;
}

.user-dropdown {
  width: 75%;
  margin: 0 auto;

  border-radius: 7.5px;

  background: #45446c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

button {
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem 2rem;

  color: #fff;
  font-size: 1.3rem;
  font-size: "Roboto", sans-serif;
  font-weight: 400;

  background: transparent;

  transition: 300ms;
}

button:hover {
  background: #3a387a;
  cursor: pointer;

  transition: 300ms;
}
</style>
