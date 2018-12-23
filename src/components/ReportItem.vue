<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
               {{report.title}}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <p>{{report.desease}}</p>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" @click="isModalActive = true">See More</a>
        </footer>
        <b-modal :active.sync="isModalActive">
            <ReportModal :report="report"></ReportModal>
        </b-modal>
    </div>
</template>
<script>
import ReportModal from '@/components/ReportModal'

export default {
    name: "reportItem",
    components: { ReportModal },
    props: ['report'],
    data() {
        return {
            isModalActive: false
        }
    },
    methods: {
        resolveReport(e) {
            this.$store.dispatch('removeReport', e)
        }
    }    
}
</script>

