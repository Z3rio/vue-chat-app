<script setup lang="ts">
import { getAuth } from "@/firebase";
import LoginView from "./views/LoginView.vue";
import HomeView from "./views/HomeView.vue";
const { signIn, isLoggedIn, user } = getAuth();
</script>

<template>
  <LoginView v-if="isLoggedIn == false" />
  <HomeView v-if="isLoggedIn == true" />
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto&display=swap");
</style>
