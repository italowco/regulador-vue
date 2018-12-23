<template>
<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a href="#">Bulma</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
    </ul>
  </nav>
  <div class="container">
    <div class="dashboard-content columns is-multiline">
      <div v-for="(report, index) in reports()" :key="index" class="column is-4">
        <reportItem :report='report'></reportItem>
      </div>
    </div>
  </div>
  
</div>
</template>
<script>
import ReportItem from '@/components/ReportItem'

export default {
  components: { ReportItem },
  methods: {
    reports () {
      return this.$store.state.reports
    },
    resolveReport(e) {
        this.$store.dispatch('removeReport', e)
    }
  }

}
</script>
<style scoped>
 
</style>
