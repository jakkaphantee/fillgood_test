import {
  getUser,
  getUserDetail,
  createUserProfile,
  updateUserProfile,
  deleteUserProfile
} from '@/services/userManagementService'

import {
  createAccount
} from '@/services/authService'

import {
  USER_MANAGEMENT_GET_REQUEST,
  USER_MANAGEMENT_GET_SUCCESS,
  USER_MANAGEMENT_GET_FAILURE,
  USER_MANAGEMENT_GET_DETAIL_REQUEST,
  USER_MANAGEMENT_GET_DETAIL_SUCCESS,
  USER_MANAGEMENT_GET_DETAIL_FAILURE,
  USER_MANAGEMENT_CREATE_REQUEST,
  USER_MANAGEMENT_CREATE_SUCCESS,
  USER_MANAGEMENT_CREATE_FAILURE,
  USER_MANAGEMENT_UPDATE_REQUEST,
  USER_MANAGEMENT_UPDATE_SUCCESS,
  USER_MANAGEMENT_UPDATE_FAILURE,
  USER_MANAGEMENT_DELETE_REQUEST,
  USER_MANAGEMENT_DELETE_SUCCESS,
  USER_MANAGEMENT_DELETE_FAILURE
} from '../types'

const state = {
  list: {
    isLoading: false,
    isSuccess: false,
    data: [],
    errorCode: '',
    errorMessage: ''
  },
  detail: {
    isLoading: false,
    isSuccess: false,
    data: {},
    errorCode: '',
    errorMessage: ''
  },
  create: {
    isLoading: false,
    isSuccess: false,
    errorCode: '',
    errorMessage: ''
  },
  update: {
    isLoading: false,
    isSuccess: false,
    errorCode: '',
    errorMessage: ''
  },
  delete: {
    isLoading: false,
    isSuccess: false,
    errorCode: '',
    errorMessage: ''
  }
}

const mutations = {
  [USER_MANAGEMENT_GET_REQUEST] (state) {
    state.list = {
      ...state.list,
      isLoading: true
    }
  },
  [USER_MANAGEMENT_GET_SUCCESS] (state, response) {
    const data = []
    response.forEach((user) => {
      const object = {
        id: user.id,
        ...user.data()
      }
      data.push(object)
    })

    state.list = {
      ...state.list,
      isLoading: false,
      isSuccess: true,
      data: data
    }
  },
  [USER_MANAGEMENT_GET_FAILURE] (state, error) {
    state.list = {
      isLoading: false,
      isSuccess: false,
      data: [],
      errorCode: error.code,
      errorMessage: error.message
    }
  },
  [USER_MANAGEMENT_GET_DETAIL_REQUEST] (state) {
    state.detail = {
      ...state.detail,
      isLoading: true,
      isSuccess: false
    }
  },
  [USER_MANAGEMENT_GET_DETAIL_SUCCESS] (state, response) {
    state.detail = {
      ...state.detail,
      isLoading: false,
      isSuccess: true,
      data: response.data()
    }
  },
  [USER_MANAGEMENT_GET_DETAIL_FAILURE] (state, error) {
    state.detail = {
      isLoading: false,
      isSuccess: false,
      data: {},
      errorCode: error.code,
      errorMessage: error.message
    }
  },
  [USER_MANAGEMENT_CREATE_REQUEST] (state) {
    state.create = {
      ...state.create,
      isLoading: true,
      isSuccess: false
    }
  },
  [USER_MANAGEMENT_CREATE_SUCCESS] (state) {
    state.create = {
      ...state.create,
      isLoading: false,
      isSuccess: true
    }
  },
  [USER_MANAGEMENT_CREATE_FAILURE] (state, error) {
    state.create = {
      isLoading: false,
      isSuccess: false,
      data: {},
      errorCode: error.code,
      errorMessage: error.message
    }
  },
  [USER_MANAGEMENT_UPDATE_REQUEST] (state) {
    state.update = {
      ...state.update,
      isLoading: true,
      isSuccess: false
    }
  },
  [USER_MANAGEMENT_UPDATE_SUCCESS] (state) {
    state.update = {
      ...state.update,
      isLoading: false,
      isSuccess: true
    }
  },
  [USER_MANAGEMENT_UPDATE_FAILURE] (state, error) {
    state.update = {
      ...state.update,
      isLoading: false,
      isSuccess: false,
      errorCode: error.code,
      errorMessage: error.message
    }
  },
  [USER_MANAGEMENT_DELETE_REQUEST] (state) {
    state.delete = {
      ...state.delete,
      isLoading: true,
      isSuccess: false
    }
  },
  [USER_MANAGEMENT_DELETE_SUCCESS] (state) {
    state.delete = {
      ...state.delete,
      isLoading: false,
      isSuccess: true
    }
  },
  [USER_MANAGEMENT_DELETE_FAILURE] (state, error) {
    state.delete = {
      isLoading: false,
      isSuccess: false,
      errorCode: error.code,
      errorMessage: error.message
    }
  }
}

const actions = {
  async getUser ({ commit }) {
    try {
      commit(USER_MANAGEMENT_GET_REQUEST)
      const response = await getUser()
      commit(USER_MANAGEMENT_GET_SUCCESS, response)
    } catch (error) {
      commit(USER_MANAGEMENT_GET_FAILURE, error)
    }
  },
  async getUserDetail ({ commit }, { id }) {
    try {
      commit(USER_MANAGEMENT_GET_DETAIL_REQUEST)
      const response = await getUserDetail({ id: id })
      commit(USER_MANAGEMENT_GET_DETAIL_SUCCESS, response)
    } catch (error) {
      commit(USER_MANAGEMENT_GET_DETAIL_FAILURE, error)
    }
  },
  async createUserProfile ({ commit }, { email, password, firstName, lastName, phoneNumber, age, address }) {
    try {
      commit(USER_MANAGEMENT_CREATE_REQUEST)
      await createAccount({
        email: email,
        password: password
      })
      await createUserProfile({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        age: age,
        address: address
      })
      commit(USER_MANAGEMENT_CREATE_SUCCESS)
    } catch (error) {
      commit(USER_MANAGEMENT_CREATE_FAILURE, error)
    }
  },
  async updateUserProfile ({ commit }, { id, firstName, lastName, phoneNumber, age, address }) {
    try {
      commit(USER_MANAGEMENT_UPDATE_REQUEST)
      await updateUserProfile({ id: id, firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, age: age, address: address })
      commit(USER_MANAGEMENT_UPDATE_SUCCESS)
    } catch (error) {
      commit(USER_MANAGEMENT_UPDATE_FAILURE, error)
    }
  },
  async deleteUser ({ commit }, { id }) {
    try {
      commit(USER_MANAGEMENT_DELETE_REQUEST)
      await deleteUserProfile({ id: id })
      commit(USER_MANAGEMENT_DELETE_SUCCESS)
    } catch (error) {
      commit(USER_MANAGEMENT_DELETE_FAILURE, error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
