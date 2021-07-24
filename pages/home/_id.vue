<template>
    <div>
        <div style="display:flex;">
            <img
                v-for="image in home.images"
                :key="image"
                :src="image"
                alt="something descriptive..."
                style="width:200px;"
            />
        </div>
        <div>{{ home.title }}</div>
        <p>${{ home.pricePerNight }} / night</p>
        <img src="/images/marker.svg" style="width:20px;height:20px" />
        <p>
            {{ home.location.address }} {{ home.location.city }}
            {{ home.location.state }} {{ home.location.country }}
        </p>
        <img src="/images/star.svg" style="width:20px;height:20px" />
        <p>{{ home.reviewValue }} stars</p>
        <p>
            {{ home.guests }} guests, {{ home.bedrooms }} rooms,
            {{ home.bathrooms }} bath
        </p>
        <div style="height:800px;width:800px;" ref="map"></div>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: this.home.title,
        };
    },
    mounted() {
        this.$maps.showMap(
            this.$refs.map,
            this.home._geoloc.lat,
            this.home._geoloc.lng
        );
    },
    async asyncData({ params, $dataApi, error }) {
        const response = await $dataApi.getHome(params.id);
        if (!response.ok) {
            return error({
                statusCode: response.status,
                message: response.statusText,
            });
        }
        return { home: response.json };
    },
};
</script>
