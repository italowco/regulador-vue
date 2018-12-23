<template>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">{{report.title}}</p>
            </header>
            <section class="modal-card-body">
                <p class="title is-6">Description</p>
                <div class="card-content">
                    <div class="content">
                        <p>{{report.desease}}</p>
                    </div>
                </div>
            <b-field label="Online Doctors">
                <b-select placeholder="Select a doctor" icon="account">
                    <optgroup :label="key" v-for="(doctors, key, index) in doctorsByService()" :key="index">
                        <option v-for="(doctor, index) in doctors" :value="doctor.name" :key="index"> {{doctor.name}} | Location: {{doctor.hospital}}</option>
                    </optgroup>
                </b-select>
            </b-field>
            <b-field label="Observations">
                <b-input type="textarea"></b-input>
            </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary" type="button" @click="signTo(report)">Sign To</button>
            </footer>
        </div>
    </form>
</template>
<script>
export default {
    name: 'reportModal',
    props: ['report'],
    methods: {
        doctors() {
            return this.$store.state.doctors
        },
        doctorsByService() {
            return this.$store.state.doctors.reduce(function(rv, x) {
                (rv[x['service']] = rv[x['service']] || []).push(x)
                return rv
            }, {})
        },
        signTo(e) {
            this.$store.dispatch('removeReport', e)
            this.$parent.close()
        }
    }
}
</script>

