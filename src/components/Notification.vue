<template>
    <div id="notification">
        <b-notification auto-close type="is-warning" :active.sync="isActive" has-icon>
            New report
        </b-notification>
    </div>

</template>
<script>
export default {
    props: [ 'isActive', 'report' ]
}
</script>
<style lang="scss" scoped>
#notification {
    width: 200px;
    height: 100%;
    position: absolute;
    top: 10;
    right: 0;
    z-index: 10;
}
</style>



