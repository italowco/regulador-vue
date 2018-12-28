<template>
  <div>
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <h1>Mediator</h1> 
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <b-icon pack="fas" icon="alert"></b-icon>
          </div>
        </div>
      </div>
    </nav>
    <notification :isActive='isActive'></notification>
    <div class="columns main-content">
      <div class="column is-3 sidemenu">
        <aside class="menu is-dark">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/report">Report</router-link>
            </li>
            <li>
              <router-link to="/login">Login</router-link>
            </li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li><router-link to="/add-report">Add Report</router-link></li>
          </ul>
        </aside>
      </div>
      <div class="column is-9">
        <div class="section">
          <div class="">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Notification from './components/Notification'

export default {
  name: 'app',
  components: { Notification },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
  },
  computed: {
    reportsCount () {
      return this.$store.state.reports.length
    }
  },
  watch: {
    reportsCount (newValue, oldValue) {
      if(newValue > oldValue){
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  }
}

</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: $turquoise;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$menu-item-color: $light;
$menu-label-color: $white;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.sidemenu {
  background-color: $dark;
  height: auto;
}

.menu {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
}
.dashboard-content {
  width: 75%;
}

.main-content {
  min-height: 100vh;
}

</style>
