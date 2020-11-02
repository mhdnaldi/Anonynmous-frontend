<template>
  <b-container fluid class="hmm">
    <b-col cols="12">
      <div class="login">
        <h1 class="title">Register</h1>
        <form>
          <label for="email">EMAIL</label>
          <input
            v-focus
            type="text"
            class="form"
            v-model="form.user_email"
            id="email"
            placeholder="Enter email"
          />
          <label for="username">USERNAME</label>
          <input
            type="text"
            v-model="form.user_name"
            class="form"
            id="username"
            placeholder="Enter name"
          />
          <label for="phone">PHONE</label>
          <input
            type="text"
            class="form"
            v-model="form.user_phone"
            id="phone"
            placeholder="Enter phone (optional)"
          />
          <label for="password">PASSWORD</label>
          <input
            type="password"
            class="form"
            v-model="form.user_password"
            id="password"
            placeholder="Enter Password"
          />
          <label for="password-confirm">CONFIRM PASSWORD</label>
          <input
            type="password"
            class="form"
            v-model="form.confirm_password"
            id="password-confirm"
            placeholder="Confirm Password"
          />
        </form>
        <button class="btn-login" @click.prevent="submit">SIGN UP</button>
        <li>
          <router-link tag="li" to="/login">
            <p class="create">Already have an account?</p>
          </router-link>
        </li>
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
        user_name: '',
        user_email: '',
        user_phone: '',
        user_password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    submit() {
      this.registerUser(this.form)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Noicee',
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

.hmm {
  background-image: url(../../assets/background2.png);
  width: 100%;
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;
}

.title {
  text-align: center;
  color: #eee;
  font-weight: bold;
  font-size: 26px;
}

.login {
  padding: 70px;
  margin: auto;
  width: 40%;
}

label {
  margin-top: 30px;
  color: rgb(109, 109, 109);
  letter-spacing: 1.2px;
  font-size: 15px;
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

.form:focus {
  outline: none;
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
  .login {
    padding-top: 100px;
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
