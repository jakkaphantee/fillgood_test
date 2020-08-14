<template>
  <div class="pt-5 pb-5">
    <b-container align="left">
      <div align="right">
        <b-button class="web-theme-button-primary" size="lg" @click="changePage('MyProfile')">
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
          <b-button v-if="isAdmin" class="web-theme-button-secondary" block @click="changePage('CreateUser')">
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

       <template v-slot:cell(edit)="data">
         <div align="right">
           <b-button v-if="isAdmin" class="web-theme-button-secondary" size="sm" @click="changePage('EditUser', data.item.id)">
             Edit
           </b-button>
           <b-button v-else class="web-theme-button-secondary" size="sm" @click="changePage('UserDetail', data.item.id)">
             View
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
    changePage (routeName, id) {
      this.$router.push({ name: routeName, params: { ...(id && { id: id }) } })
    },
    addressFormat (value) {
      if (value) {
        if (value.length > 30) {
          return value.substring(0, 29) + '...'
        }
        return value
      }
      return ''
    }
  },
  computed: {
    ...mapState({
      isAdmin: (state) => state.auth.isAdmin,
      isLoading: (state) => state.userManagement.list.isLoading,
      isSuccess: (state) => state.userManagement.list.isSuccess,
      list: (state) => state.userManagement.list.data,
      errorMessage: (state) => state.userManagement.list.errorMessage
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
