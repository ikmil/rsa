<template>
    aaaaaaaaaaaS
</template>
<script setup lang="ts">
const route = useRoute()
console.log(route.query);


definePageMeta({
    middleware: [
        function(to,from){
            console.log(to.path);
            
        }
    ],
})

</script>