<template>
  <div class="container">
    <info-cards></info-cards>
  </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'isAuthenticated'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
/* @import url('@/assets/libs/font-awesome/css/font-awesome.min.css');
@import url('@/assets/libs/fontello/css/fontello.css');
@import url('@/assets/libs/animate-css/animate.min.css');
@import url('@/assets/libs/nifty-modal/css/component.css');
@import url('@/assets/libs/magnific-popup/magnific-popup.css');
@import url('@/assets/libs/ios7-switch/ios7-switch.css');
@import url('@/assets/libs/pace/pace.css');
@import url('@/assets/libs/sortable/sortable-theme-bootstrap.css');
@import url('@/assets/libs/bootstrap-datepicker/css/datepicker.css');
/* @import url('@/assets/libs/jquery-icheck/skins/all.css'); */
/* @import url('assets/libs/prettify/github.css');
@import url('assets/libs/rickshaw/rickshaw.min.css');
@import url('assets/libs/morrischart/morris.css');
@import url('assets/libs/jquery-jvectormap/css/jquery-jvectormap-1.2.2.css');
@import url('assets/libs/jquery-clock/clock.css');
@import url('assets/libs/bootstrap-calendar/css/bic_calendar.css');
/* @import url('assets/libs/jquery-weather/simpleweather.css'); */
/* @import url('assets/libs/bootstrap-xeditable/css/bootstrap-editable.css');
@import url('assets/css/style.css');
@import url('assets/css/style-responsive.css'); */
</style>


               