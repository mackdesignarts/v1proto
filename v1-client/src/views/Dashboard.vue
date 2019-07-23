<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Customer Admin</strong> - Create User
          </div>

          <b-form>
          <b-form-group
            label="ID"
            label-for="Id"
            :label-cols="3"
          >
            <b-form-input id="id" type="text" autocomplete="id" v-model="id"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Username"
            label-for="Username"
            :label-cols="3"
          >
            <b-form-input id="Username" type="text" autocomplete="Username" v-model="userName"></b-form-input>
          </b-form-group>

          <b-form-group
            label="User Id"
            label-for="userId"
            :label-cols="3"
          >
            <b-form-input id="userId" type="text" autocomplete="userId" v-model="userId"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Password"
            label-for="password"
            :label-cols="3"
          >
            <b-form-input id="password" type="text" autocomplete="password" v-model="password"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Role"
            label-for="role"
            :label-cols="3"
          >
            <b-form-select id="userRole"
              :plain="true"
              :options="['Please select', 
              'Partition User', 
              'Partition Admin', 
              'Super User', 
              'Super Admin']"
              value="Please select"
              v-model="userRole"
            >
            </b-form-select>
          </b-form-group>

          <b-form-group
            label="Phone Number"
            label-for="phoneNumber"
            :label-cols="3"            
          >
            <b-form-input id="phoneNumber" type="text" autocomplete="phoneNumber" v-model="phoneNumber"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email"
            label-for="email"
            :label-cols="3"
          >
            <b-form-input id="email" type="text" autocomplete="email" v-model="email"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Address"
            label-for="Address"
            :label-cols="3"
          >
            <b-form-input id="address" type="text" autocomplete="address" v-model="address"></b-form-input>
          </b-form-group>
          
          <br />
          <div slot="footer" class="card-alt-footer">
            <b-button 
              type="reset" 
              size="sm" 
              variant="danger"
              v-on:click="reset"
            >
              <i class="fa fa-ban"></i> 
              Reset
            </b-button>
            <b-button 
              type="submit" 
              size="sm" 
              variant="primary"
              v-on:click="submit"
              >
              <i class="fa fa-dot-circle-o"></i> 
              Create
            </b-button>
          </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>


    
  </div>
</template>

<script>

import { Callout } from '@coreui/vue'
import { HTTP } from '../mixins/http-mixin'

export default {
  name: 'dashboard',
  components: {
  },
  data: function () {
    return {
      id: null,
      userName: null,
      userId: null,
      password: null,
      address: null,
      userRole: 'Please select',
      phoneNumber: null,
      email: null,
      response: null
    }
  },
  methods: {
    validateForm(formData) {
      console.log(formData);
      return true
    },
    reset() {
      this.id = null
      this.userName = null
      this.userId = null
      this.password = null
      this.address = null
      this.userRole = 'Please select'
      this.phoneNumber = null
      this.email = null
    },
    createUser(customer) {
      console.log(customer)
      HTTP.post('/users/create', customer)
        .then(response => {
          this.response = response.data
        })
        .catch(e => {
          this.errors.push(e)
          console.log('An error has occurred:' + e)
        })
    },
    submit() {
      const customer = {
        address: this.address,
        email: this.email,
        id: this.id,
        password: this.password,
        phoneNumber: this.phoneNumber,
        role: this.role,
        userId: this.userId,
        userName: this.userName
      }
      if(this.validateForm(customer)) 
        this.createUser(customer)
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }

  .card-alt-footer {
    text-align: right;
  }
</style>
