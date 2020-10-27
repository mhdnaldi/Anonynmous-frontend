import axios from 'axios'
export default {
  state: {},
  mutations: {},
  actions: {
    registerUser(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:6000/auth/register', payload)
          .then(res => {
            console.log(res.data)
            resolve(res.data)
          })
          .catch(err => {
            console.log(err.response)
            reject(err.response.status)
          })
      })
    }
  },
  getters: {}
}
