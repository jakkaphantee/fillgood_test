<template>
  <div class="pt-5 pb-5">
    <b-container align="left">
      <div align="right">
        <b-button class="web-theme-button-primary" size="lg">
          <strong>My Profile</strong>
        </b-button>
      </div>
      <b-row class="mt-4">
        <b-col md="8">
          <h2>
            <strong>User Management</strong>
          </h2>
        </b-col>
        <b-col md="4" align="right">
          <b-button class="web-theme-button-secondary" block @click="changePage('CreateUser')">
            Create
          </b-button>
        </b-col>
      </b-row>
      <b-table
        class="text-left text-nowrap mt-5 mb-5"
        responsive
        outlined
        :items="list"
        :fields="fields"
        :busy="isLoading"
        show-empty
      >
        <template v-slot:table-busy>
          <div class="mt-5 mb-5" align="center">
            <b-spinner variant="warning" />
          </div>
        </template>

        <template v-slot:empty>
          <div class="mt-5 mb-5" align="center">
            <strong>ไม่พบผู้ใช้งาน</strong>
          </div>
        </template>

       <template v-slot:cell(edit)>
         <div align="right">
           <b-button class="web-theme-button-secondary" size="sm">
             Edit
           </b-button>
         </div>
       </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      fields: [
        {
          key: 'first_name',
          label: 'First Name'
        },
        {
          key: 'last_name',
          label: 'Last Name'
        },
        {
          key: 'phone_number',
          label: 'Phone Number'
        },
        {
          key: 'age',
          label: 'Age'
        },
        {
          key: 'address',
          label: 'Address',
          formatter: 'addressFormat'
        },
        {
          key: 'edit',
          label: ''
        }
      ]
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions('userManagement', {
      getUser: 'getUser'
    }),
    changePage (routeName) {
      this.$router.push({ name: routeName })
    },
    addressFormat (value) {
      if (value.length > 30) {
        return value.substring(0, 29) + '...'
      }
      return value
    }
  },
  computed: {
    ...mapState('userManagement', {
      isLoading: (state) => state.list.isLoading,
      isSuccess: (state) => state.list.isSuccess,
      list: (state) => state.list.data,
      errorMessage: (state) => state.list.errorMessage
    })
  },
  watch: {
    isLoading () {
      if (!this.isLoading && !this.isSuccess) {
        alert(this.errorMessage)
      }
    }
  }
}
</script>
