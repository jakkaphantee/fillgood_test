import {
  firebaseFirestore
} from '@/services/firebase'

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
    state.list = {
      ...state.list,
      isLoading: false,
      isSuccess: true,
      data: response
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
      data: response
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

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
