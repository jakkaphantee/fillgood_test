<template>
  <div id="app">
    <router-view v-if="!isFirebaseInit" />
    <b-spinner v-else class="spinner-position" variant="warning" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted () {
    this.$router.afterEach(() => {
      if (!this.isLoggedIn) {
        this.$router.replace({ name: 'Login' })
      }
    })
  },
  computed: {
    ...mapState('auth', {
      isFirebaseInit: (state) => state.isFirebaseInit,
      isLoggedIn: (state) => state.isLoggedIn
    })
  },
  watch: {
    isLoggedIn (newValue) {
      if (!newValue) {
        this.$router.push({ name: 'Login' })
      }
    },
    isFirebaseInit () {
      if (!this.isLoggedIn) {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Prompt', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.spinner-position {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
