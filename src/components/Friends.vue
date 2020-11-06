<template>
  <div class="main">
    <div class="search">
      <img src="../assets/icons/magnifying-glass.png" alt="" />
      <div class="lines"></div>
      <input type="text" placeholder="Search friends ..." />
    </div>
    <div class="contact">
      <div class="list">
        <img src="../assets/icons/2.jpg" alt="" />
        <div>
          <p>Rick Sanchez</p>
          <p>Available</p>
        </div>
      </div>
      <div class="list">
        <img src="../assets/icons/2.png" alt="" />
        <div>
          <p>Tommy Shelby</p>
          <p>Available</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  border-right: 1px solid rgb(6, 6, 26);
}

.search {
  height: 80px;
  background-color: rgb(6, 6, 26);
  display: grid;
  grid-template-columns: 70px 2px 80%;
  position: relative;
}

.search img {
  width: 25px;
  filter: grayscale(100%) !important;
  margin: auto;
}

.search .lines {
  border-left: 2px solid black;
  height: 40%;
  margin: auto;
}

.search input {
  width: 93.5%;
  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  color: #eee;
}

.search input:focus {
  outline: none;
}

.contact {
  height: 577px;
  overflow-x: hidden;
  widows: 100%;
}

::-webkit-scrollbar {
  width: 1px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(17, 17, 36);
  border-radius: 1px;
  box-shadow: inset 7px 10px 12px rgb(17, 17, 36);
}

.contact .list {
  width: 85%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  background: rgb(6, 6, 26);
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
}

.list:hover {
  background-color: rgb(5, 2, 22);
}

.list img {
  width: 40px;
  margin: auto;
  padding: 15px 0;
  border-radius: 50%;
}

.list div p {
  margin: 0;
  text-indent: 4px;
  text-align: left;
  color: #eee;
}

div p:nth-child(2) {
  font-size: 13px;
  color: rgb(115, 116, 117);
}
</style>
