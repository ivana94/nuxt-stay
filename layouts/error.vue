<template>
    <div style="text-align:center;">
        <h1>Error!</h1>
        <div>{{ error.message }} {{ error.statusCode }}</div>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: "BIG PROBLEM",
        };
    },
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
};
</script>
