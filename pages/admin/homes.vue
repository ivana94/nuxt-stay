<template>
    <div>
        list of homes
        <h2 class="text-cl bold">add a home</h2>
        <form class="form" @submit.prevent="onSubmit">
            Images <br />
            <input type="text" v-model="home.images[0]" class="w-3/4" /><br />
            <input type="text" v-model="home.images[1]" class="w-3/4" /><br />
            <input type="text" v-model="home.images[2]" class="w-3/4" /><br />
            <input type="text" v-model="home.images[3]" class="w-3/4" /><br />
            <input type="text" v-model="home.images[4]" class="w-3/4" /><br />

            Title <br />
            <input type="text" v-model="home.title" class="w-60" /><br />

            Description <br />
            <textarea
                type="text"
                v-model="home.description"
                class="w-104"
            /><br />

            Note <br />
            <textarea type="text" v-model="home.note" class="w-104" /><br />

            Features <br />
            <input type="text" v-model="home.features[0]" class="w-26" />
            <input type="text" v-model="home.features[1]" class="w-26" />
            <input type="text" v-model="home.features[2]" class="w-26" />
            <input type="text" v-model="home.features[3]" class="w-26" />
            <input type="text" v-model="home.features[4]" class="w-26" /><br />

            Price per night <br />
            <input type="number" v-model="home.pricePerNight" class="w-14" />

            Guests / Rooms / Beds / Baths<br />
            <input type="number" v-model="home.guests" class="w-14" />
            <input type="number" v-model="home.bedrooms" class="w-14" />
            <input type="number" v-model="home.beds" class="w-14" />
            <input type="number" v-model="home.bathrooms" class="w-14" /><br />

            <input
                type="text"
                ref="locationSelector"
                autocomplete="off"
                placeholder="select a location"
                @changed="changed"
            /><br />

            Address:
            <input type="text" v-model="home.location.address" class="w-26" />
            City:
            <input type="text" v-model="home.location.city" class="w-26" />
            State:
            <input type="text" v-model="home.location.state" class="w-26" />
            Postal Code:
            <input type="text" v-model="home.location.state" class="w-26" />
            Country:
            <input type="text" v-model="home.location.country" class="w-26" />

            <button class="border px-4 py-2 border-gray-400">Add</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            home: {
                title: "",
                description: "",
                note: "",
                pricePerNight: "",
                guests: "",
                bedrooms: "",
                beds: "",
                bathrooms: "",
                features: ["", "", "", "", ""],
                location: {
                    address: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    country: "",
                },
                _geoloc: {
                    lat: "",
                    lng: "",
                },
                images: [
                    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=70",
                    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=60",
                    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=50",
                    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=40",
                ],
            },
        };
    },
    mounted() {
        this.$maps.makeAutoComplete(this.$refs.locationSelector, ["address"]);
    },
    methods: {
        changed(event) {
            const addressParts = event.detail.address_components;
            const street =
                this.getAddressParts(addressParts, "street_number")
                    ?.short_name || "";
            const route =
                this.getAddressParts(addressParts, "route")?.short_name || "";
            this.home.location.address = street + " " + route;
            this.home.location.city =
                this.getAddressParts(addressParts, "locality")?.short_name ||
                "";
            this.home.location.state =
                this.getAddressParts(
                    addressParts,
                    "administrative_area_level_1"
                )?.long_name || "";
            this.home.location.postalCode =
                this.getAddressParts(addressParts, "postal_code")?.short_name ||
                "";
            const geo = event.detail.geometry.location;
            this.home._geoloc.lat = geo.lat();
            this.home._geoloc.lng = geo.lng();
        },
        getAddressParts(parts, type) {
            return parts.find((part) => part.types.includes(type));
        },
        async onSubmit() {
            await fetch("/api/homes", {
                method: "POST",
                body: JSON.stringify(this.home),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        },
    },
};
</script>
<style scoped>
.form input,
.form textarea {
    @apply p-1 m-1 bg-gray-200;
}
</style>
