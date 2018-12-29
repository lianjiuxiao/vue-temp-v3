<template>
  <div class="page">
    <div>
      <router-link to="/ui/element"> <h3>element</h3></router-link>
      <router-link to="/ui/iview"><h3>iview</h3></router-link>
      <router-link to="/ui/vuetify"><h3>vuetify</h3></router-link>
    </div>
    <div>
      <router-view/>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
