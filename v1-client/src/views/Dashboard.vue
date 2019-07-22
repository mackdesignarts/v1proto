<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Customer Admin</strong> - Profile Manager
          </div>
          <b-form>
          <b-form-group
            label="Users full name"
            label-for="fullName"
            :label-cols="3"
            >
            <b-form-input id="fullName" type="text" autocomplete="name"></b-form-input>
          </b-form-group>

          <b-form-group
            label="User ID"
            label-for="userID"
            :label-cols="3"
            >
            <b-form-input id="userID" type="text" autocomplete="userID"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Password"
            label-for="password"
            :label-cols="3"
            >
            <b-form-input id="password" type="text" autocomplete="password"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Role"
            label-for="role"
            :label-cols="3"
            >
            <b-form-input id="role" type="text" autocomplete="role"></b-form-input>
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
              value="Please select">
            </b-form-select>
          </b-form-group>

          <b-form-group
            label="Phone Number"
            label-for="phoneNumber"
            :label-cols="3"
            >
            <b-form-input id="phoneNumber" type="text" autocomplete="phoneNumber"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email"
            label-for="email"
            :label-cols="3"
            >
            <b-form-input id="email" type="text" autocomplete="email"></b-form-input>
          </b-form-group>
          
          <br />
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
          </b-form>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Horizontal</strong> Form
          </div>
          <b-form>
            <b-form-group
              label="Email"
              label-for="horizEmail"
              description="Please enter your email."
              :label-cols="3"
              >
              <b-form-input id="horizEmail" type="email" placeholder="Enter Email.." autocomplete="username email"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Password"
              label-for="horizPass"
              description="Please enter your password."
              :label-cols="3"
              >
              <b-form-input id="horizPass" type="password" placeholder="Enter Password.." autocomplete="current-password"></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>
          </b-form>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Normal</strong> Form
          </div>
          <b-form>
            <b-form-group validated
              label="Email"
              label-for="normalEmail"
              description="Please enter your email.">
              <b-form-input id="normalEmail" type="email" placeholder="Enter Email.." required autocomplete="email"></b-form-input>
            </b-form-group>
            <b-form-group validated
              label="Password"
              label-for="normalPass"
              description="Please enter your password.">
              <b-form-input id="normalPass" type="password" placeholder="Enter Password.." required autocomplete="current-password"></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>


    
  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample
  },
  data: function () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
