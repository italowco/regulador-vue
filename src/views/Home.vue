<template>
  <div class="home">
    <h1 class="title">Online Doctors</h1>
    <table class="table is-hoverable  is-fullwidth">
      <thead>
        <th>Nome</th>
        <th>Service</th>
        <th>Location</th>
      </thead>
      <tbody>
        <tr v-for="(doctor, index) in doctors()" :key="index">
          <td><a href="#">{{doctor.name}}</a></td>
          <td>{{doctor.service}}</td>
          <td>{{doctor.hospital}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    doctors() {
      return this.$store.state.doctors
    }
  }
}
</script>
