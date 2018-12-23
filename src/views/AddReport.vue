<template>
    <div>
        <h1 class="title">
            Add Report
        </h1>    
        <section>
            <b-field label="Name">
                <b-input v-model="report.title"></b-input>
            </b-field>
            <b-field label="Desease">
                <b-input v-model="report.desease" maxlength="200" type="textarea"></b-input>
            </b-field>
            <a class="button is-primary" @click="addReport(report)">Add</a>
        </section>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            report: {
                title: '',
                desease: ''
            }
        }
    },
    methods: {
        addReport(e) {
            const report = e
            this.$store.dispatch('addReport', {title: report.title , desease: report.desease})
            e.title = ''
            e.desease = ''
        }
    }
}
</script>
<style scoped>
section {
    width:25vw;
}

</style>
