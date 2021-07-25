<template>
    <div>
        <p>{{ lat }} / {{ lng }} / {{ label }}</p>
        <div v-for="home in homes" :key="home.objectID">
            {{ home.title }}
        </div>
    </div>
</template>
<script>
export default {
    async beforeRouteUpdate(to, from, next) {
        // beforeRouteUpdate runs when user navigates to search page from search page
        const data = await this.$dataApi.getHomesByLocation(
            to.query.lat,
            to.query.lng
        );
        this.homes = data.json.hits;
        this.label = to.query.label;
        this.lat = to.query.lat;
        this.lng = to.query.lng;
        next();
    },
    async asyncData({ query, $dataApi }) {
        const data = await $dataApi.getHomesByLocation(query.lat, query.lng);
        return {
            label: query.label,
            lat: query.lat,
            lng: query.lng,
            homes: data.json.hits,
        };
    },
};
</script>
