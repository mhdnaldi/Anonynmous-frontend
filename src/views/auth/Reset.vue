/* eslint-disable comma-dangle */
<template>
  <b-container fluid class="hmm">
    <b-col cols="12">
      <div class="login">
        <h1 class="title">Reset Password</h1>
        <form>
          <label for="password">PASSWORD</label>
          <input
            v-focus
            type="password"
            class="form"
            v-model="form.user_password"
            id="password"
            placeholder="Enter new password"
          />
          <label for="password-confirm">CONFIRM</label>
          <input
            type="password"
            class="form"
            v-model="form.confirm_password"
            id="password-confirm"
            placeholder="Confirm password"
          />
        </form>
        <button class="btn-login" @click="resetPassword">SUBMIT</button>
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
        user_password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['reset']),
    resetPassword() {
      const key = this.$route.query.user_key
      const setData = {
        user_key: key,
        user_password: this.form.user_password,
        confirm_password: this.form.confirm_password
      }
      this.reset(setData)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cool',
            text: res,
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/')
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

.form:focus {
  outline: none;
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
    padding-top: 280px;
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
