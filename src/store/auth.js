import axios from 'axios'
import router from '../router/index'
export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null // GET TOKEN
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    delUser(state) {
      state.token = null
      state.user = {}
    }
  },
  actions: {
    registerUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}auth/register`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    loginUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}auth/login`, payload)
          .then(res => {
            context.commit('setUser', res.data.data)
            localStorage.setItem('token', res.data.data.token) // SET TOKEN
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    logout(context, payload) {
      localStorage.removeItem('token') // REMOVE TOKEN
      context.commit('delUser')
      window.sessionStorage.clear() // CLEAR SESSION STORAGE
      router.push('/login')
    },
    inteceptorRequest(context) {
      console.log('Inteceptor works')
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (error.response.status === 403) {
            if (
              error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature'
            ) {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('INVALID TOKEN')
            } else if (error.response.data.msg === 'jwt expired') {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('JWT EXPIRED')
            }
          }
          return Promise.reject(error)
        }
      )
    },
    forgot(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}auth/forgot-password`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    },
    reset(content, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}auth/reset-password`, payload)
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response.data.msg)
          })
      })
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    user(state) {
      return state.user
    }
  }
}
