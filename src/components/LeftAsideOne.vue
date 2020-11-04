<template>
  <div class="main">
    <div class="profile"></div>
    <p>Muhammad Naldi</p>
    <div class="icon"><img src="../assets/png/avatar.png" alt="" /></div>
    <div class="icon"><img src="../assets/png/avatar.png" alt="" /></div>
    <div class="icon"><img src="../assets/png/avatar.png" alt="" /></div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
}

.profile {
  margin: 10px 0;
  border-radius: 50%;
  width: 60%;
  height: 70px;
  background-color: red;
}

p {
  margin-bottom: 50px;
  padding: 0 20px;
  color: #eee;
  text-align: center;
}

.icon {
  margin: 10px 0;
}

.icon img {
  width: 60px;
}
</style>
