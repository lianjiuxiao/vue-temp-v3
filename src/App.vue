<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>


    export default {
        name: 'app',
        components: {}
    }
</script>

<style lang="less">
    .size {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 1rem;
    }

    html, body {
        .size;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }

    #app {
        .size;
    }
</style>
