<script setup lang="ts">
import { getAuth } from "@/firebase";
const { signIn } = getAuth();
</script>

<template>
  <div class="login-container">
    <h1>Zerio-Chat</h1>
    <h2>Login</h2>
    <button @click="signIn()">Sign in with google</button>
  </div>
</template>

<style scoped>
.login-container {
  position: absolute;

  background: #fff;
  border-radius: 7.5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0 30px 60px -30px;

  width: 20vw;
  padding: 10vh 0;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  margin: 0;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;

  width: 100%;
}

h2 {
  margin: 0;
  margin-bottom: 100px;

  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  color: #4e4e4e;
  letter-spacing: 1.5px;

  width: 100%;
}

button {
  display: block;

  width: 60%;

  background: #5059cb;
  color: #fff;
  padding: 12px;
  border-radius: 10px;
  border: none;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  margin: 0 auto;
  margin-top: 20px;
}

button:hover {
  cursor: pointer;
}
</style>
