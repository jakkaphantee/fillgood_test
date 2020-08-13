<template>
  <div>
    <b-button class="web-theme-button-secondary" @click="changePage('CreateUser')">
      Create
    </b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions('userManagement', {
      getUser: 'getUser'
    }),
    changePage (routeName) {
      this.$router.push({ name: routeName })
    }
  },
  computed: {
    ...mapState('userManagement', {
      list: (state) => state.list.data
    })
  }
}
</script>
