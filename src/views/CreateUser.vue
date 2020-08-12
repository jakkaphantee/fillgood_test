<template>
  <div class="pt-5 pb-5" align="left">
    <b-container>
      <h2>
        <strong>Create User</strong>
      </h2>
      <b-row>
        <b-col class="mt-5" md="6">
          <b-row>
            <b-col md="12">
              <h5>
                <strong>Account Detail</strong>
              </h5>
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="username">
                <strong>Username</strong>
              </label>
              <b-input id="username" class="web-theme-input-box" autocomplete="off" v-model="username" />
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="password">
                <strong>Password</strong>
              </label>
              <b-input id="password" type="password" class="web-theme-input-box" autocomplete="off" v-model="password" />
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="confirmPassword">
                <strong>Confirm Password</strong>
              </label>
              <b-input id="confirmPassword" type="password" class="web-theme-input-box" autocomplete="off" v-model="confirmPassword" />
            </b-col>
          </b-row>
        </b-col>
        <b-col class="mt-5" md="6">
          <b-row>
            <b-col md="12">
              <h5>
                <strong>User Profile</strong>
              </h5>
            </b-col>
            <b-col class="mt-4" md="6">
              <label for="firstName">
                <strong>First Name</strong>
              </label>
              <b-input id="firstName" class="web-theme-input-box" autocomplete="off" v-model="firstName" />
            </b-col>
            <b-col class="mt-4" md="6">
              <label for="lastName">
                <strong>Last Name</strong>
              </label>
              <b-input id="lastName" class="web-theme-input-box" autocomplete="off" v-model="lastName" />
            </b-col>
            <b-col class="mt-4" md="6">
              <label for="phoneNumber">
                <strong>Phone Number</strong>
              </label>
              <b-input id="phoneNumber" type="number" class="web-theme-input-box" autocomplete="off" v-model="phoneNumber" />
            </b-col>
            <b-col class="mt-4" md="6">
              <label for="age">
                <strong>Age</strong>
              </label>
              <b-input id="age" type="number" class="web-theme-input-box" autocomplete="off" v-model="age" />
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="address">
                <strong>Address</strong>
              </label>
              <b-input id="age" class="web-theme-input-box" autocomplete="off" v-model="address" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="mt-4">
        <b-row align-h="center">
          <b-col md="6">
            <b-button class="web-theme-button-primary pt-3 pb-3" block>
              Create
              <div class="is-loading">
                <div class="loader" />
              </div>
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: '',
      address: ''
    }
  }
}
</script>
