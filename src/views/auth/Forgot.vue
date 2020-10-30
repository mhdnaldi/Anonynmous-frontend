/* eslint-disable comma-dangle */
<template>
  <b-container fluid class="hmm">
    <b-col cols="12">
      <div class="login">
        <h1 class="title">Forgot Password</h1>
        <form>
          <label for="username">EMAIL</label>
          <input
            v-focus
            type="text"
            v-model="form.user_email"
            class="form"
            id="username"
            placeholder="Enter email"
          />
        </form>
        <button class="btn-login" @click="forgotPassword">SUBMIT</button>
      </div>
    </b-col>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        user_email: ''
      }
    }
  },
  methods: {
    ...mapActions(['forgot']),
    forgotPassword() {
      this.forgot(this.form)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cool',
            text: res,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops..',
            text: err,
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@sweetalert2/theme-dark/dark.css';

.title {
  text-align: left;
  color: #eee;
  font-weight: bold;
  font-size: 26px;
}

.hmm {
  background-image: url(../../assets/background2.png);
  width: 100%;
  height: 654px;
  background-size: cover;
  background-repeat: no-repeat;
}
.login {
  padding: 100px;
  margin: auto;
  width: 45%;
}

label {
  font-size: 15px;
  margin-top: 50px;
  color: rgb(109, 109, 109);
  letter-spacing: 1.2px;
}

.form {
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid rgb(109, 109, 109);
  color: #eee;
  font-size: 14px;
  padding-bottom: 5px;
}

.form::placeholder {
  color: #eee;
  opacity: 1;
}

.forgot {
  text-align: right;
  color: rgb(109, 109, 109);
  margin-top: 10px;
  font-size: 14px;
}

.btn-login {
  margin-top: 50px;
  width: 100%;
  height: 40px;
  background-color: #5d9dff;
  border-radius: 5px;
  border-color: #5d9dff;
  color: #eee;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 15px;
  box-shadow: 0 15px 14px -3px rgba(0, 0, 0, 0.4);
}

.btn-login:focus {
  outline: none;
}

.create {
  text-align: center;
  color: rgb(109, 109, 109);
  margin-top: 25px;
  font-size: 16px;
}

@media (max-width: 700px) {
  .hmm {
    height: 740px;
  }
  .login {
    padding-top: 350px;
    margin: auto;
    width: 100%;
  }

  .title {
    text-align: left;
    font-size: 18px;
  }

  label {
    margin-top: 30px;
    font-size: 14px;
    letter-spacing: 0px;
  }

  .form {
    font-size: 12px;
  }

  .form:focus {
    outline: none;
  }

  .btn-login {
    margin-top: 20px;
    font-size: 14px;
    height: 30px;
  }

  .create,
  .forgot {
    font-size: 12px;
  }
}
</style>
