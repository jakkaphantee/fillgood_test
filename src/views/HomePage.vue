<template>
  <div>
    <b-button class="web-theme-button-secondary" @click="changePage('CreateUser')">
      Create
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    changePage (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>
