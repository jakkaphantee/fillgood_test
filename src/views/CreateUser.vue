<template>
  <div class="pt-5 pb-5" align="left">
    <b-container>
      <h2>
        <strong>Create User</strong>
      </h2>
      <div class="error-message" style="font-weight: 400;">
        * = required
      </div>
      <b-row>
        <b-col class="mt-5" md="6">
          <b-row>
            <b-col md="12">
              <h5>
                <strong>Account Detail</strong>
              </h5>
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="email">
                <strong>Email*</strong>
              </label>
              <b-input id="email" type="email" class="web-theme-input-box" :class="$v.email.$anyError && $v.email.$dirty ? 'error' : ''" autocomplete="off" v-model="$v.email.$model" />
              <div class="error-message">
                <div v-if="!$v.email.required && $v.email.$dirty">
                  This field is required
                </div>
                <div v-else-if="!$v.email.email && $v.email.$dirty">
                  Must use valid email address
                </div>
              </div>
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="password">
                <strong>Password*</strong>
              </label>
              <b-input id="password" type="password" class="web-theme-input-box" :class="$v.password.$anyError || !$v.confirmPassword.sameAsPassword && $v.password.$dirty ? 'error' : ''" autocomplete="off" v-model="$v.password.$model" />
              <div class="error-message" v-if="$v.password.$dirty">
                <div class="error-message" v-if="!$v.password.required">
                  This field is required
                </div>
                <div class="error-message" v-if="!$v.confirmPassword.sameAsPassword">
                  Password doesn't match
                </div>
              </div>
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="confirmPassword">
                <strong>Confirm Password*</strong>
              </label>
              <b-input id="confirmPassword" type="password" class="web-theme-input-box" :class="$v.confirmPassword.$anyError && $v.confirmPassword.$dirty ? 'error' : ''" autocomplete="off" v-model="$v.confirmPassword.$model" />
              <div class="error-message" v-if="$v.confirmPassword.$dirty">
                <div class="error-message" v-if="!$v.confirmPassword.required">
                  This field is required
                </div>
                <div class="error-message" v-if="!$v.confirmPassword.sameAsPassword">
                  Password doesn't match
                </div>
              </div>
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
                <strong>First Name*</strong>
              </label>
              <b-input id="firstName" class="web-theme-input-box" :class="$v.firstName.$anyError && $v.firstName.$dirty ? 'error' : ''" autocomplete="off" v-model="$v.firstName.$model" />
              <div class="error-message" v-if="!$v.firstName.required && $v.firstName.$dirty">
                This field is required
              </div>
            </b-col>
            <b-col class="mt-4" md="6">
              <label for="lastName">
                <strong>Last Name*</strong>
              </label>
              <b-input id="lastName" class="web-theme-input-box" :class="$v.lastName.$anyError && $v.lastName.$dirty ? 'error' : ''" autocomplete="off" v-model="$v.lastName.$model" />
              <div class="error-message" v-if="!$v.lastName.required && $v.lastName.$dirty">
                This field is required
              </div>
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
      <div class="mt-5">
        <b-row align-h="center">
          <b-col md="6">
            <b-button class="web-theme-button-primary pt-3 pb-3" block :disabled="isLoading" @click="submitCreate()">
              <strong>Create</strong>
              <div v-if="isLoading" class="is-loading">
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
import { mapState, mapActions } from 'vuex'
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: '',
      address: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    firstName: {
      required
    },
    lastName: {
      required
    }
  },
  mounted () {
    if (!this.isAdmin) {
      this.$router.replace({ name: 'HomePage' })
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      createUserProfile: 'userManagement/createUserProfile'
    }),
    submitCreate () {
      if (this.$v.$anyDirty) {
        if (!this.$v.confirmPassword.sameAsPassword) {
          alert('Password doen`t match')
        } else if (this.$v.$invalid) {
          alert('Please re-check your form.')
        } else {
          this.createUserProfile({ email: this.email, password: this.password, firstName: this.firstName, lastName: this.lastName, age: this.age, phoneNumber: this.phoneNumber, address: this.address })
        }
      } else {
        alert('Please fill the form.')
      }
    }
  },
  computed: {
    ...mapState({
      isAdmin: (state) => state.auth.isAdmin,
      isLoading: (state) => state.userManagement.create.isLoading,
      isSuccess: (state) => state.userManagement.create.isSuccess,
      errorMessage: (state) => state.userManagement.create.errorMessage
    })
  },
  watch: {
    async isLoading () {
      if (!this.isLoading && !this.isSuccess) {
        alert(this.errorMessage)
      } else if (!this.isLoading && this.isSuccess) {
        await this.login({ email: 'admin@admin.com', password: 'admin442' })
        this.$router.push({ name: 'HomePage' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.error-message {
  font-weight: 200;
  font-size: 10pt;
  color: red;
}
</style>
