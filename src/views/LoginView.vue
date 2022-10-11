<script setup lang="ts"></script>

<template>
  <div class="login-container">
    <h1>Zerio-Chat</h1>
    <h2>Login</h2>
    <form>
      <input placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />

      <button>Sign in</button>
    </form>

    <p>Dont have an account? <a href="./">Register here</a></p>
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
  padding: 10vh 5vh;

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

  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  color: #4e4e4e;
  letter-spacing: 1.5px;

  width: 100%;
}

p {
  margin: 0;
  margin-top: 25px;

  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  color: #4e4e4e;

  width: 100%;
}

p a {
  color: #5059cb;
  font-weight: bold;
  text-decoration: none;
}

form {
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

input,
label {
  width: 80%;

  margin: 0 auto;
  padding: 15px 17.5px;

  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;

  border: none;
  border-bottom: 1px solid #5059cb;
}

label {
  color: rgb(200, 200, 200);
}

label:hover {
  cursor: pointer;
}

.mdi-arrow-collapse-down {
  font-size: 1.5rem;
  color: color(175, 175, 175);

  margin-right: 10px;
}

input::placeholder {
  color: rgb(200, 200, 200);
}

button {
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
