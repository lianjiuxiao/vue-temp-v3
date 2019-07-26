<template>
    <div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <router-view/>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: "index",
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>

</style>
