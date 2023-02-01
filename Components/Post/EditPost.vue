<template>

    <div>
        <h1> id {{ this.$route.params.id }}</h1>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$route.params);
        }
    }
</script>