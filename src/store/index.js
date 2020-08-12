import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import userManagement from './modules/userManagement'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    userManagement
  }
})
