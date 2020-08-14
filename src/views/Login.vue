<template>
  <div>
    <b-container class="mt-5 pt-5 pb-5">
      <b-row align-h="center">
        <b-col md="7">
          <div class="card-container p-3">
            <div align="center">
              <h4>
                <strong>Sign In</strong>
              </h4>
              User: admin@admin.com
              Password: admin442
            </div>
            <div class="mt-5" align="left">
              <label for="username">
                <strong>Email</strong>
              </label>
              <b-input id="username" class="web-theme-input-box" type="text" autocomplete="off" v-model="username" />
            </div>
            <div class="mt-4" align="left">
              <label for="password">
                <strong>Password</strong>
              </label>
              <b-input id="password" class="web-theme-input-box" type="password" autocomplete="off" v-model="password" />
            </div>
            <div class="mt-5">
              <b-button class="web-theme-button-primary pt-3 pb-3" block @click="login({ email: username, password: password })" :disabled="isLoading">
                <strong>Login</strong>
                <div v-if="isLoading" class="is-loading">
                  <div class="loader" />
                </div>
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    if (this.isLoggedIn) {
      this.$router.push({ name: 'HomePage' })
    }
  },
  methods: {
    ...mapActions('auth', {
      login: 'login'
    })
  },
  computed: {
    ...mapState('auth', {
      isLoggedIn: (state) => state.isLoggedIn,
      isLoading: (state) => state.isLoading,
      isSuccess: (state) => state.isSuccess,
      errorMessage: (state) => state.errorMessage
    })
  },
  watch: {
    isLoading () {
      if (!this.isLoading && !this.isSuccess) {
        alert(this.errorMessage)
      }
    },
    isLoggedIn (newValue) {
      if (newValue) {
        this.$router.push({ name: 'HomePage' })
      }
    }
  }
}
</script>
