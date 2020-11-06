<template>
  <div class="container-main">
    <div class="main one">
      <div class="aside">
        <img class="profile" src="../assets/icons/3.jpg" alt="" />
        <p>Muhammad Naldi</p>
        <div class="icon">
          <img src="../assets/icons/user-3.png" alt="" />
        </div>
        <div class="icon">
          <img src="../assets/icons/speech-bubble.png" alt="" />
        </div>
        <div class="icon"><img src="../assets/icons/group.png" alt="" /></div>
        <div class="icon settings">
          <img src="../assets/icons/settings.png" alt="" />
        </div>
      </div>
    </div>
    <div class="main two"><Friends /></div>
    <div class="main three"><ChatRoom /></div>
    <div class="main four"></div>
  </div>
</template>

<script>
import Friends from '../components/Friends'
import ChatRoom from '../components/ChatRoom'
import { mapActions } from 'vuex'
export default {
  components: {
    Friends,
    ChatRoom
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
.container-main {
  display: grid;
  grid-template-columns: 0.5fr 3fr 6fr 2.5fr;
  align-items: center;
}

.one,
.four {
  background-color: rgb(5, 2, 22);

  height: 100%;
}

.two,
.three {
  background-color: rgb(17, 17, 36);
  height: 100%;
}

/* ASIDE */
.aside {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
}

.profile {
  margin: 20px 0 10px;
  border-radius: 50%;
  width: 60%;
  height: 70px;
  background-color: red;
}

p {
  margin-bottom: 50px;
  padding: 0 20px;
  color: #eee;
  font-weight: 300;
  text-align: center;
  font-size: 14px;
}

.icon {
  transition: 0.3s;
  width: 100%;
  height: 70px;
  position: relative;
}

.icon:hover {
  background-color: rgb(17, 17, 36);
}

.icon img {
  width: 45px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}

.icon img:hover {
  background: linear-gradient(
    90deg,
    rgba(133, 14, 153, 1) 0%,
    rgba(255, 149, 0, 1) 100%
  );
  transform: scale(0.9);
}

.settings {
  margin-top: 175px;
  margin-bottom: 20px;
}
</style>
