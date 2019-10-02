<template>
   <div>
       <h1>我是todos</h1>
       <p v-for="(item,index) in t" :key="index">用户id:{{item.id}}, 标题：{{item.title}}</p>
   </div>
</template>

<script>
    
    import {mapGetters} from 'vuex'
    export default {
        name: "Todos",
        computed: mapGetters({
            t: "getAllTodos"
        })
    }
</script>

<style>
    
</style>