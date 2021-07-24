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
        <div v-for="review in reviews" :key="review.objectID">
            <img :src="review.reviewer.image" />
            <p>{{ review.reviewer.name }}</p>
            <p>{{ formatDate(review.date) }}</p>
            <short-text :text="review.comment" :target="150" />
        </div>
        <img :src="user.image" />
        {{ user.name }} {{ formatDate(user.joined) }} {{ user.reviewCount }}
        {{ user.description }}
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
        const responses = await Promise.all([
            $dataApi.getHome(params.id),
            $dataApi.getReviewsByHomeId(params.id),
            $dataApi.getUserByHomeId(params.id),
        ]);

        const badResponse = responses.find((response) => !response.ok);
        if (badResponse) {
            return error({
                statusCode: badResponse.status,
                message: badResponse.statusText,
            });
        }

        return {
            home: responses[0].json,
            reviews: responses[1].json.hits,
            user: responses[2].json.hits[0],
        };
    },
    methods: {
        formatDate(dateStr) {
            const date = new Date(dateStr);
            return date.toLocaleString(undefined, {
                month: "long",
                year: "numeric",
                day: "numeric",
            });
        },
    },
};
</script>
