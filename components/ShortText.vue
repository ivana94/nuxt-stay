<template>
    <span
        >{{ displayText }}
        <button
            v-if="isTooLong && !isExpanded"
            @click="isExpanded = true"
            type="button"
            class="link"
        >
            read more
        </button>
        <button
            v-if="isTooLong && isExpanded"
            @click="isExpanded = false"
            type="button"
            class="link"
        >
            read less
        </button>
    </span>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
            chunks: [],
        };
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        target: {
            type: Number,
            required: true,
        },
    },
    computed: {
        isTooLong() {
            return this.chunks.length === 2;
        },
        displayText() {
            if (!this.isTooLong || this.isExpanded) {
                return this.chunks.join(" ");
            }
            return this.chunks[0] + "...";
        },
    },
    created() {
        // we're doing this in created because we want this to run on the server
        // if we did it in mounted there's a possibility the user would see the long text for a sec before it shortens
        this.chunks = this.getChunks();
    },
    methods: {
        getChunks() {
            const position = this.text.indexOf(" ", this.target);
            if (this.text.length <= this.target || position === -1) {
                return [this.text];
            }
            return [this.text.substr(0, position), this.text.substr(position)];
        },
    },
};
</script>
<style scoped>
.link {
    color: blue;
    background: white;
    border: none;
    text-decoration: underline;
    cursor: pointer;
}
</style>
