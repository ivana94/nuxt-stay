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
    watchQuery: ["lat"],
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
