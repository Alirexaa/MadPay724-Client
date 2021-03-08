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
</style>


               