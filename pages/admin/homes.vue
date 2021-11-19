<template>
    <div>
        <span v-for="home in homeList" :key="home.objectID">
            {{ home.title }}
            <button class="text-red-800" @click="deleteHome(home.objectID)">
                delete</button
            ><br />
        </span>
        <h2 class="text-cl bold">add a home</h2>
        <form class="form" @submit.prevent="onSubmit">
            Images <br />
            <ImageUploader @file-uploaded="imageUpdated($event, 0)" />
            <ImageUploader @file-uploaded="imageUpdated($event, 1)" />
            <ImageUploader @file-uploaded="imageUpdated($event, 2)" />
            <ImageUploader @file-uploaded="imageUpdated($event, 3)" />
            <ImageUploader @file-uploaded="imageUpdated($event, 4)" />

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
            <input
                type="text"
                v-model="home.location.postalCode"
                class="w-26"
            />
            Country:
            <input type="text" v-model="home.location.country" class="w-26" />

            <date-picker
                v-for="(range, index) in home.availabilityRanges"
                :key="index"
                v-model="home.availabilityRanges[index]"
                is-range
                timezone="UTC"
                :modelConfig="{ timeAdjust: '00:00:00' }"
            >
                <template v-slot="{ inputValue, inputEvents }">
                    <input :value="inputValue.start" v-on="inputEvents.start" />
                    to
                    <input :value="inputValue.end" v-on="inputEvents.end" />
                </template>
            </date-picker>

            <button class="border px-4 py-2 border-gray-400">Add</button>
        </form>
    </div>
</template>
<script>
import { unwrap } from "~/utils/fetchUtils";
import ImageUploader from "../../components/ImageUploader.vue";
export default {
    components: { ImageUploader },
    data() {
        return {
            homeList: [],
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
                images: [],
                availabilityRanges: [
                    { start: "", end: "" },
                    { start: "", end: "" },
                ],
            },
        };
    },
    mounted() {
        this.$maps.makeAutoComplete(this.$refs.locationSelector, ["address"]);
        this.setHomesList();
    },
    methods: {
        async deleteHome(homeId) {
            await fetch(`/api/homes/${homeId}`, { method: "DELETE" });
            const index = this.homeList.findIndex(
                (obj) => obj.objectID === homeId
            );
            this.homeList.splice(index, 1);
        },
        async setHomesList() {
            this.homeList = (await unwrap(await fetch("/api/homes/user"))).json;
        },
        imageUpdated(imageUrl, index) {
            console.log("imageulr", imageUrl);
            this.home.images[index] = imageUrl;
        },
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
            this.home.location.country =
                this.getAddressParts(addressParts, "country")?.short_name || "";
            const geo = event.detail.geometry.location;
            this.home._geoloc.lat = geo.lat();
            this.home._geoloc.lng = geo.lng();
        },
        getAddressParts(parts, type) {
            return parts.find((part) => part.types.includes(type));
        },
        async onSubmit() {
            console.log("this.home: ", this.home);
            const response = await unwrap(
                await fetch("/api/homes", {
                    method: "POST",
                    body: JSON.stringify(this.home),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            );
            this.homeList.push({
                title: this.home.title,
                objectId: response.json.homeId,
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
