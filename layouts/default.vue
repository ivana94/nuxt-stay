<template>
    <div>
        <header style="background:blue;">
            <nuxt-link to="/">Home</nuxt-link>
            <input type="text" ref="citySearch" />
        </header>
        <nuxt />
    </div>
</template>
<script>
export default {
    mounted() {
        this.$maps.makeAutoComplete(this.$refs.citySearch);
    },
};
</script>
