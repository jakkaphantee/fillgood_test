import {
  firebaseAuth
} from '@/services/firebase'

import {
  login,
  logout
} from '@/services/authService'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../types'

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email)
    state.isLoggedIn = true
    state.userProfile = user
    if (state.isFirebaseInit) {
      state.isAdmin = user.email === 'admin@admin.com'
    }
  }
  state.isFirebaseInit = false
})

const state = {
  isFirebaseInit: true,
  userProfile: {},
  isLoggedIn: false,
  isLoading: false,
  isAdmin: false,
  isSuccess: false,
  errorCode: '',
  errorMessage: ''
}

const getters = {
  isAdmin: (state) => state.isAdmin
}

const mutations = {
  [LOGIN_REQUEST] (state) {
    state.isLoading = true
    state.isSuccess = false
  },
  [LOGIN_SUCCESS] (state) {
    state.isLoading = false
    state.isSuccess = true
    state.isLoggedIn = true
  },
  [LOGIN_FAILURE] (state, error) {
    state.isLoading = false
    state.isSuccess = false
    state.errorCode = error.code
    state.errorMessage = error.message
  },
  [LOGOUT] (state) {
    state.isLoggedIn = false
    state.isAdmin = false
    state.isFirebaseInit = true
    state.userProfile = {}
  }
}

const actions = {
  async login ({ commit }, { email, password }) {
    try {
      commit(LOGIN_REQUEST)
      await login({ email: email, password: password })
      commit(LOGIN_SUCCESS)
    } catch (error) {
      commit(LOGIN_FAILURE, error)
    }
  },
  async logout ({ commit }) {
    commit(LOGOUT)
    logout()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
