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
            </div>
            <div class="mt-5" align="left">
              <label for="username">
                <strong>Username</strong>
              </label>
              <b-input id="username" class="web-theme-input-box" type="text" autocomplete="off" />
            </div>
            <div class="mt-4" align="left">
              <label for="password">
                <strong>Password</strong>
              </label>
              <b-input id="password" class="web-theme-input-box" type="password" autocomplete="off" />
            </div>
            <div class="mt-4">
              <b-button class="web-theme-button-primary" block>
                Login
                <div v-if="false" class="is-loading">
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
export default {
  data () {
    return {
      //
    }
  }
}
</script>
