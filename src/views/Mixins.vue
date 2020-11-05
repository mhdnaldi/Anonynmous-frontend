<template>
  <div class="container-main">
    <div class="main one"><AsideOne /></div>
    <div class="main two">a</div>
    <div class="main three"><AsideThree /></div>
    <div class="main four">a</div>
  </div>
</template>

<script>
import AsideOne from '../components/LeftAsideOne'
import AsideThree from '../components/RightAsideOne'
import { mapActions } from 'vuex'
export default {
  components: {
    AsideOne,
    AsideThree
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
</style>
