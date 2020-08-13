<template>
  <div class="pt-5 pb-5" align="left">
    <b-container>
      <h2>
        <strong>Create User</strong>
      </h2>
      <div v-if="isLoading" class="mt-5 mb-5" align="center">
        <b-spinner variant="warning" />
      </div>
      <b-row v-else>
        <b-col class="mt-5" md="6">
          <b-row>
            <b-col md="12">
              <h5>
                <strong>Account Detail</strong>
              </h5>
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="email">
                <strong>Email</strong>
              </label>
              <b-input id="email" type="email" class="web-theme-input-box" disabled autocomplete="off" v-model="email" />
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
              <b-input id="firstName" class="web-theme-input-box" :class="$v.firstName.$anyError && $v.firstName.$dirty ? 'error' : ''" autocomplete="off" v-model="$v.firstName.$model" />
              <div class="error-message" v-if="!$v.firstName.required && $v.firstName.$dirty">
                This field is required
              </div>
            </b-col>
            <b-col class="mt-4" md="6">
              <label for="lastName">
                <strong>Last Name</strong>
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
              <b-input id="phoneNumber" type="number" class="web-theme-input-box" autocomplete="off" v-model="$v.phoneNumber.$model" />
            </b-col>
            <b-col class="mt-4" md="6">
              <label for="age">
                <strong>Age</strong>
              </label>
              <b-input id="age" type="number" class="web-theme-input-box" autocomplete="off" v-model="$v.age.$model" />
            </b-col>
            <b-col class="mt-4" md="12">
              <label for="address">
                <strong>Address</strong>
              </label>
              <b-input id="age" class="web-theme-input-box" autocomplete="off" v-model="$v.address.$model" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div v-if="!isLoading" class="mt-5">
        <b-row align-h="center">
          <b-col md="6">
            <b-button class="web-theme-button-primary pt-3 pb-3" block :disabled="isUpdating || !$v.$anyDirty" @click="submitUpdate()">
              <strong>Update</strong>
              <div v-if="isUpdating" class="is-loading">
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
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      id: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: '',
      address: ''
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    phoneNumber: {},
    age: {},
    address: {}
  },
  mounted () {
    this.id = this.$route.params.id
    this.getUserDetail({ id: this.id })
  },
  methods: {
    ...mapActions('userManagement', {
      getUserDetail: 'getUserDetail',
      updateUserProfile: 'updateUserProfile'
    }),
    setData () {
      this.firstName = this.detail.first_name
      this.lastName = this.detail.last_name
      this.phoneNumber = this.detail.phone_number
      this.age = this.detail.age
      this.address = this.detail.address
    },
    submitUpdate () {
      if (this.$v.$anyDirty) {
        if (this.$v.$invalid) {
          alert('Please re-check your form.')
        } else {
          this.updateUserProfile({ id: this.id, firstName: this.firstName, lastName: this.lastName, age: this.age, phoneNumber: this.phoneNumber, address: this.address })
          this.$v.$reset()
        }
      } else {
        alert('Please fill the form.')
      }
    }
  },
  computed: {
    ...mapState('userManagement', {
      isLoading: (state) => state.detail.isLoading,
      isSuccess: (state) => state.detail.isSuccess,
      detail: (state) => state.detail.data,
      getError: (state) => state.detail.errorMessage,
      isUpdating: (state) => state.update.isLoading,
      isUpdateSuccess: (state) => state.update.isSuccess,
      updateError: (state) => state.update.errorMessage
    }),
    email () {
      return this.detail.email || 'dd'
    }
  },
  watch: {
    isLoading () {
      if (!this.isLoading && !this.isSuccess) {
        alert(this.getError)
      } else {
        this.setData()
      }
    },
    isUpdating () {
      if (!this.isUpdating && !this.isUpdateSuccess) {
        alert(this.updateError)
      } else if (!this.isUpdating && this.isUpdateSuccess) {
        this.getUserDetail({ id: this.id })
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
