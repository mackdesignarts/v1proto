<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <div class="logo-mark-container">
        <img class="navbar-brand-full logo-mark" src="img/brand/mark.png" alt="V1 Voip Logo">
      </div>
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full word-mark" src="img/brand/wordmark.png" alt="V1 Voip Logo">
        <img class="navbar-brand-minimized" src="img/brand/mark.png" alt="V1 Voip Logo Mark">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-4" to="/support">
          <img src="img/icons/support_icon.png" alt="Support Icon" />
          <span class="nav-text-header-left" >Support</span>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger"> {{ alertCount }} </b-badge>
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="">V1 VOIP</a>
        <span class="ml-1">&copy; 2019 creativeLabs.</span>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

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
    SidebarToggler,
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
a {
  color: #ff7b31;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #e86419;
}

.navbar-nav .nav-link {
  color: #666;
  font-weight: 700;
}

.sidebar, .sidebar .nav-link.active  {
  background-color: #fef6e1;
}

.sidebar .nav-link, .sidebar .nav-title {
  color: #535353;
}

.app-header {
  border-bottom: 1px solid #eadcb7;
  height: unset;
}

.app-header .navbar-toggler {
  margin-left: 90px;
}

.app-header .navbar-toggler-icon {
  height: 16px;
  width: 20px;
  background-image: url('../../public/img/icons/hamburger_icon.png') !important;
  text-decoration: none;
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
  background: #f6efdd;
  padding-top: 15px;
}

.logo-mark {
  width: 40px;
}

.word-mark {
  width: 82px;
}

.badge-danger {
    color: #fff;
    background-color: #ff7b31;
}

@media (min-width: 992px) {
  .sidebar-fixed .sidebar {
    width: 245px;
  }
}

@media (min-width: 992px) {
  html:not([dir="rtl"]) .sidebar-lg-show.sidebar-fixed .main, 
  html:not([dir="rtl"]) .sidebar-lg-show.sidebar-fixed .app-footer, 
  html:not([dir="rtl"]) .sidebar-show.sidebar-fixed .main, 
  html:not([dir="rtl"]) .sidebar-show.sidebar-fixed .app-footer {
      margin-left: 245px;
  }
} 
</style>