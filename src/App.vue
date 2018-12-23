<template>
  <div>
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-item">
          <router-link to="/">Home</router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>    
    <div class="columns">
      <div class="column is-3">
        <aside class="menu is-secondary">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/report">Report</router-link>
            </li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li><router-link to="/add-report">Add Report</router-link></li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column is-9">
          <router-view/>
      </div>
    </div> 
  </div>
</template>
<script>

</script>

<style>
.menu {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
}
.dashboard-content {
  width: 75%;
}

</style>
