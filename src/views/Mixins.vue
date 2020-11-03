<template>
  <div>
    <h1>HOME PAGE</h1>
    <b-button @click="logoutBtn" variant="danger">LOGOUT</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['logout']),
    logoutBtn() {
      this.logout()
    }
  }
}
</script>
