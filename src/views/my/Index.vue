<template>
  <div class="page">
    <router-link :to="{path:'bankinfo'}">BankInfo</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
