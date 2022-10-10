<script setup lang="ts"></script>

<template>
  <div class="search-container">
    <input type="text" placeholder="Search for contact" />
  </div>
</template>

<style scoped>
input {
  width: calc(100% - 35px);

  margin: 0 auto;
  padding: 20px 17.5px;

  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;

  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(200, 200, 200);

  color: #fff;
}

input::placholder {
  color: #fff;
}
</style>
