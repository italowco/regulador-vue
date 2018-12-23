<template>
  <div>
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <h1>Mediator</h1> 
        </a>
      </div>
    </nav>    
    <div class="columns">
      <div class="column is-3">
        <aside class="menu is-dark">
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
              <a >Manage Your Team</a>
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
export default {
  name: 'app',
  methods: {
    activeLink(el) {
      // eslint-disable-next-line
      console.log(el)
      el.classList.add('is-active')
    }
  }
}

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
