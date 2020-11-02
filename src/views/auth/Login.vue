/* eslint-disable comma-dangle */
<template>
  <b-container fluid class="hmm">
    <b-col cols="12">
      <div class="login">
        <h1 class="title">Hello.</h1>
        <h1 class="title">Welcome Back</h1>
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
          <label for="password">PASSWORD</label>
          <input
            type="password"
            v-model="form.user_password"
            class="form"
            id="password"
            placeholder="Enter Password"
          />
        </form>
        <li>
          <router-link tag="li" to="/forgot">
            <p class="forgot">Forgot Password?</p>
          </router-link>
        </li>
        <button class="btn-login" @click="submitLogin">LOGIN</button>

        <li>
          <router-link tag="li" to="/register">
            <p class="create">Create Account</p>
          </router-link>
        </li>
      </div>
    </b-col>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    submitLogin() {
      this.loginUser(this.form)
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
  padding: 70px;
  margin: auto;
  width: 40%;
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

.form:focus {
  outline: none;
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
  text-decoration: none;
  cursor: pointer;
  list-style: none;
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

li {
  list-style: none;
}

.create {
  text-align: center;
  color: rgb(109, 109, 109);
  margin-top: 25px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
}

@media (max-width: 700px) {
  .hmm {
    height: 740px;
  }
  .login {
    padding-top: 200px;
    margin: auto;
    width: 100%;
  }

  .title {
    font-size: 20px;
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
