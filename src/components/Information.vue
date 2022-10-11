<script setup lang="ts"></script>

<template>
  <div class="information-container">
    <h1>Zerio-Chat</h1>
    <div class="profile-info">
      <img
        src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        alt="Profile picture"
      />
      <h2>Zerio</h2>
    </div>
    <!-- <div class="profile-actions">
      <button>Logout</button>
    </div> -->
  </div>
</template>

<style scoped>
h1 {
  color: #fff;
  font-family: "Lato", sans-serif;
  font-size: 2rem;

  margin: 0;
}

.information-container {
  padding: 20px 25px;

  background: #262544;

  display: flex;
}

.profile-info {
  margin-left: auto;

  padding: 0 15px;

  display: flex;
  align-items: center;
}

.profile-info:hover {
  cursor: pointer;
}

.profile-info img {
  width: 36px;
  height: 36px;

  border-radius: 100%;
}

.profile-info h2 {
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;

  margin: 0;
  margin-left: 15px;
}
</style>
