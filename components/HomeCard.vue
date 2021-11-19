<template>
    <div class="app-home-card">
        <div>
            <nuxt-img
                :src="home.images[0]"
                width="600"
                height="400"
                provider="cloudinary"
            /><br />
        </div>
        <div class="app-home-text">
            <h3>{{ home.title }}</h3>
            <br />
            {{ home.location.address }}, {{ home.location.city }},
            {{ home.location.state }}<br />
            {{ home.guests }} guests<br />
            <p class="app-home-text-price">${{ home.pricePerNight }} / night</p>
            <br />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        home: {
            type: Object,
            required: true,
        },
    },
};
</script>
