<template>
  <div class="app">
    <!-- HEADER -->
    <AppHeader fixed>
      <SidebarToggleCustom class="d-lg-none" display="md" mobile />
      <SidebarMinimizer class="logo-mark-container"/>
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full word-mark" src="img/brand/wordmark.png" alt="V1 Voip Logo">
      </b-link>
      <SidebarToggleCustom class="sidebar-toggle-custom" display="lg" :defaultOpen=true />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-4" to="/support">
          <img src="img/icons/support_icon.png" alt="Support Icon" />
          <span class="nav-text-header-left" >Support</span>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <img src="img/icons/bell_icon.png" alt="Support Icon" />
          <b-badge pill variant="danger"> {{ alertCount }} </b-badge>
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
    </AppHeader>
    <!-- BODY -->
    <div class="app-body">
      <!-- SIDEBAR -->
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
      </AppSidebar>
      <!-- MAIN CONTENT -->
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <!-- FOOTER -->
    <TheFooter>
      <div>
        <a href="">V1 VOIP</a>
        <span class="ml-1">&copy; 2019</span>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import SidebarToggleCustom from "../components/sidebarToggleCustom"

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggleCustom,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items,
      alertCount: 7
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>

<style>
body {
  background-color: #f6efdd !important;
}

input, textarea, select, a { 
  outline: none !important; 
}

.form-control {
  border: 1px solid #eadcb7;
}

a {
  color: #ff7b31;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #e86419;
}

.btn-primary {
  background-color: #ff7b31 !important;
  border-color: #ff7b31 !important;
  min-width: 100px;
  min-height: 40px;
  margin: 0 10px;
}

.btn-danger {
  background-color: #ff005e !important;
  border-color: #ff005e !important;
  min-width: 100px;
  min-height: 40px;
  margin: 0 10px;
}

.card-header {
  background-color: #fff;
}

button:focus { 
  outline: none; 
}

.navbar-nav .nav-link {
  color: #59564f;
  font-weight: 700;
}

.sidebar, .sidebar .nav-link.active  {
  background-color: #fef9eb;
}

.sidebar .nav-title,
.sidebar .nav-link,  
.sidebar .nav-link.active, 
.sidebar .nav-link:hover,
.sidebar .nav-dropdown.open .nav-link {
  color: #59564f;
}

.sidebar .nav-link:hover {
  background: #fbf0d2;
}

.sidebar .nav {
    width: 245px;
}

.sidebar {
  padding-top: 20px;
}

.sidebar .nav-dropdown.open {
  background: #f5eacb;
}

.sidebar .nav-dropdown-toggle::before {
  background-image: url('../../public/img/icons/chevron_right_icon.png') !important;
  width: 12px;
  height: 12px;
}

.sidebar .sidebar-nav {
  width: 245px;
}

.sidebar .nav-dropdown.open > .nav-dropdown-toggle::before {
  transform: rotate(90deg);
}

.sidebar-toggle-custom {
  border: 0;
  height: 20px;
  width: 20px;
  background: transparent url('../../public/img/icons/hamburger_icon.png') no-repeat !important;
  margin: 0 40px 0 100px;
}

.app-header {
  border-bottom: 1px solid #eadcb7;
  height: unset;
}

.app-header .navbar-toggler {
  min-width: unset;
  margin-left: 90px;
}

.app-header .toggle-icon {
  height: 16px;
  width: 20px;
  text-decoration: none;
}

.app-header .toggle-wrapper {
  margin: 0 30px 0 100px;
}

.app-footer {
  background-color: #fff !important;
  border-top: 1px solid #eadcb7;
  margin-top: 10px;
}

.nav-text-header-left {
  margin-left: 15px;
}

.app-header .navbar-brand {
  width: 102px;
}

.main .container-fluid {
  padding: 0 8px;
}

.logo-mark-container {
  text-align: center;
  width: 55px;
  height: 55px;
  background: #f6efdd url('../../public/img/brand/mark.png') no-repeat center center;
  padding-top: 15px;
  border: none;
}

.logo-mark {
  width: 38px;
}

.word-mark {
  width: 80px;
}

.badge-danger {
    color: #fff;
    background-color: #464646;
}

.icon-speedometer:before {
  content: url('../../public/img/icons/dashboard_icon.png');
}

.icon-drop:before {
  content: url('../../public/img/icons/phone_icon.png');
}

.icon-screen-tablet:before {
  content: url('../../public/img/icons/reports_icon.png');
}

.breadcrumb {
    border-radius: 2px;
    border-bottom: none;
    margin: 10px 10px 0 12px;
}

.card {
  margin: 12px 0 0 4px;
  border: none;
  border-radius: 2px;
}

.card-header {
  border-bottom: solid 1px #f6efdd;
  border-top-left-radius: 2px !important;
  border-top-right-radius: 2px !important;
}

.bg-primary {
  background-color: #b01b5d !important;
}

.sidebar .nav-link .nav-icon {
  width: unset;
  vertical-align: bottom;
}

.app-footer {
  background-color: #fef9eb;
}

html:not([dir="rtl"]) .sidebar {
    margin-left: -245px;
}

@media (min-width: 992px) {
  .sidebar-fixed .sidebar {
    width: 245px;
  }
  html:not([dir="rtl"]) .sidebar-lg-show.sidebar-fixed .main, 
  html:not([dir="rtl"]) .sidebar-lg-show.sidebar-fixed .app-footer, 
  html:not([dir="rtl"]) .sidebar-show.sidebar-fixed .main, 
  html:not([dir="rtl"]) .sidebar-show.sidebar-fixed .app-footer {
    margin-left: 245px;
  }
  .sidebar-minimized.sidebar-fixed .sidebar {
    width: 55px;
  }
} 

</style>