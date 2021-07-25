<template>
    <div>
        <div style="height:800px;width:800px;float:right;" ref="map"></div>
        <div v-if="homes.length > 0">
            <p>Results for {{ label }}</p>
            <div>
                <nuxt-link
                    v-for="home in homes"
                    :key="home.objectID"
                    :to="`/home/${home.objectID}`"
                >
                    <HomeRow
                        :home="home"
                        @mouseover.native="highlightMarker(home.objectID, true)"
                        @mouseout.native="highlightMarker(home.objectID, false)"
                    />
                </nuxt-link>
            </div>
        </div>
        <div else>No results found</div>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: `Homes Around ${this.label}`,
        };
    },
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
        this.updateMap();
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
    mounted() {
        this.updateMap();
    },
    methods: {
        updateMap() {
            this.$maps.showMap(
                this.$refs.map,
                this.lat,
                this.lng,
                this.getHomeMarkers()
            );
        },
        getHomeMarkers() {
            return this.homes.map((home) => {
                return {
                    ...home._geoloc,
                    pricePerNight: home.pricePerNight,
                    id: home.objectID,
                };
            });
        },
        highlightMarker(homeId, isHighlighted) {
            document
                .getElementsByClassName(`home-${homeId}`)[0]
                ?.classList?.toggle("marker-highlight", isHighlighted);
        },
    },
};
</script>
<style>
.marker {
    background: white;
    border: 1px solid lightgray;
    font-weight: bold;
    border-radius: 20px;
    padding: 5px 8px;
}

.marker-highlight {
    color: white !important;
    background: black;
    border: black;
}
</style>
