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
            label="Users full name"
            label-for="fullName"
            :label-cols="3"
          >
            <b-form-input id="fullName" type="text" autocomplete="name" v-model="name"></b-form-input>
          </b-form-group>

          <b-form-group
            label="User ID"
            label-for="userID"
            :label-cols="3"
          >
            <b-form-input id="userID" type="text" autocomplete="userID" v-model="userID"></b-form-input>
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
      name: null,
      userID: null,
      password: null,
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
      this.name = null
      this.userID = null
      this.password = null
      this.userRole = 'Please select'
      this.phoneNumber = null
      this.email = null
    },
    createUser(userData) {
      const userModel = {
        "id": 0,
        "nodeScope": true,
        "operatorId": 0,
        "partitionScope": true,
        "privileges": [
          {
            "id": 0,
            "operatorId": 0,
            "privilege": {
              "description": "string",
              "id": 0,
              "name": "string",
              "operatorId": 0,
              "partitionScope": true,
              "screenId": 0
            },
            "privilegeId": 0
          }
        ],
        "roleName": "string",
        "roleType": "string"
      }
      HTTP.post(userModel)
        .then(response => {
          this.response = response.data
        })
        .catch(e => {
          this.errors.push(e)
          console.log('An error has occurred:' + e)
        })
    },
    submit() {
      const userData = {
        name: this.name,
        userID: this.userID,
        password: this.password,
        userRole: this.userRole,
        phoneNumber: this.phoneNumber,
        email: this.email
      }
      if(this.validateForm(userData)) 
        this.createUser(userData)
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
