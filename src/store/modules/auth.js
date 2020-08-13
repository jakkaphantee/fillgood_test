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
    state.isLoggedIn = true
    state.userProfile = user
  }
  state.isFirebaseInit = false
})

const state = {
  isFirebaseInit: true,
  userProfile: {},
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  errorCode: '',
  errorMessage: ''
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
  mutations,
  actions
}
