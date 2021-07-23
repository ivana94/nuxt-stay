export default {
    // enables auto imports, which removes need for component boilerplate
    components: true,

    // global metas
    head: {
        titleTemplate: "STBnB: %s",
        htmlAttrs: {
            lang: "en",
        },
        bodyAttrs: {
            class: ["my-style"],
        },
        meta: [
            {
                charset: "utf-8",
            },
        ],
    },
    router: {
        prefetchLinks: false,
    },
    plugins: ["~/plugins/maps.client", "~/plugins/dataApi"],
};
