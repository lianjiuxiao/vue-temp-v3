<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import {getCity, getUserInfo, getTableData} from '@/network/pageNetWork'
    export default {
        name: 'app',
        mounted(){
            this.ajaxGetCity()
        },
        methods:{
            async ajaxGetCity() {
                const params = {
                    p1: '1111111',
                    p2: '1111111'
                };
                let city = await getCity({params});
                console.log("city>>>>>>>>>");
                console.log(city);

                let userInfo = await getUserInfo({params});
                console.log("userInfo>>>>>>>>>");
                console.log(userInfo);

                let tableData = await getTableData({params});
                console.log("tableData>>>>>>>>>");
                console.log(tableData);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
