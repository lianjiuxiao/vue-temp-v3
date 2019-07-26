<template>
  <div>
    <router-link :to="{ path: '/my'}">MY</router-link>
    <router-link :to="{ path: '/ui'}">ui</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "index",
  }
</script>

<style scoped>

</style>
