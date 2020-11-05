<template>
  <div class="main">
    <div class="profile">
      <div class="img"><img src="../assets/icons/user-1.png" alt="" /></div>
      <div class="name">
        <p>Rick Sanchez</p>
        <p>Online</p>
      </div>
      <div class="icon"><img src="../assets/icons/user-1.png" alt="" /></div>
    </div>
    <div class="chat-room">
      <div class="friend">
        <img src="../assets/icons/user-3.png" alt="" />
        <p>Hello!</p>
      </div>
      <div class="friend">
        <img src="../assets/icons/user-3.png" alt="" />
        <p>How do you do?</p>
      </div>
      <div class="me"></div>
    </div>
    <div class="message">
      <div class="input">
        <input type="text" placeholder="Type a message ..." />
      </div>
      <div class="send"><img src="../assets/icons/picture.png" alt="" /></div>
      <div class="send-img">
        <img src="../assets/icons/cursor.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
}

/* PROFILE */
.profile {
  height: 80px;
  background-color: rgb(6, 6, 26);
  display: grid;
  grid-template-columns: 90px 4fr 0.5fr;
}

.profile .img {
  position: relative;
}

.img img {
  background-color: #ffffff;
  border-radius: 50%;
  width: 60px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.name {
  position: relative;
}

.name p:nth-child(1) {
  color: #fff;
  position: absolute;
  top: 18px;
  font-weight: bold;
}
.name p:nth-child(2) {
  position: absolute;
  bottom: 2px;
  color: rgb(21, 241, 21);
  font-size: 13px;
}

.icon {
  position: relative;
}

.icon img {
  background-color: #ffffff;
  border-radius: 50%;
  width: 25px;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
/* END PROFILE */

/* CHAT ROOM */
.chat-room {
  width: 100%;
  height: 530px;
  background-color: rgb(17, 17, 36);
  position: relative;
}

.chat-room .friend {
  position: relative;
}

.friend img {
  width: 35px;
  position: absolute;
  top: 7px;
  left: 5px;
}

.friend p {
  display: inline-block;
  margin-left: 50px;
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
  background-color: rgb(70, 102, 207);
  padding: 12px 10px;
  border-radius: 0 20px 10px 20px;
  grid-template-columns: 40px 450px;
  max-width: 450px;
  word-wrap: break-word;
}
/* END CHAT ROOM */

/* MESSAGE */
.message {
  width: 100%;
  height: 47px;
  background-color: rgb(17, 17, 36);
  box-shadow: 0px -6px 10px -2px rgba(0, 0, 0, 0.66);
  display: grid;
  grid-template-columns: 4fr 50px 50px;
}

.input {
  position: relative;
}

.input input {
  width: 97%;
  height: 60%;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  color: #eee;
}

.input input:focus {
  outline: none;
}

.send,
.send-img {
  position: relative;
}

.send img,
.send-img img {
  width: 35px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
}
/* END MESSAGE */
</style>
