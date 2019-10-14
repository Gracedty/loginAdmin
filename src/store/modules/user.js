import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token:getToken(),
  name:'',
  avatar:''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  login({commit}, userInfo) {
    const {username, password} = userInfo
    return new Promise((resolve,reject) => {
      login({username: username.trim(),password: password}).then(response => {
        console.log(response)
        commit('SET_TOKEN',response.token)
        setToken(response.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo({commit}, state) {
    return new Promise ((resolve,reject) => {
      getInfo().then(response => {
        if(!response) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_NAME', response.username)
        commit('SET_AVATAR', response.avatar)
        resolve(response)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },

  logout({commit}, state) {
    return new Promise((resolve, reject) => {
      commit('SET_NAME','')
      commit('SET_AVATAR','')
      removeToken()
      resolve()
    })
  },

  resetToken({commit}) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}