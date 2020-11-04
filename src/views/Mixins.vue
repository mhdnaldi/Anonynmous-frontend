<template>
  <div class="container-main">
    <div class="main one"><AsideOne /></div>
    <div class="main two">a</div>
    <div class="main three">a</div>
    <div class="main four">a</div>
  </div>
</template>

<script>
import AsideOne from '../components/LeftAsideOne'
import { mapActions } from 'vuex'
export default {
  components: {
    AsideOne
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
  grid-template-columns: 1fr 3fr 5fr 3fr;
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
