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
    plugins: [
        "~/plugins/maps.client",
        "~/plugins/dataApi",
        "~/plugins/auth.client",
    ],
    modules: ["~/modules/auth", "~/modules/algolia", "~/modules/cloudinary"],
    buildModules: ["@nuxtjs/tailwindcss"],
    css: ["~/assets/sass/app.scss"],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        },
    },
    publicRuntimeConfig: {
        auth: {
            cookieName: "idToken",
            clientId:
                "48276842679-qspmmaedh0f4vmdc1vj8lgq6a6ol5i8t.apps.googleusercontent.com",
        },
        algolia: {
            appId: "5QS71OCCL0",
            key: "33ff9a090ed2378cd44ef55bd5a86b6a",
        },
    },
    privateRuntimeConfig: {
        algolia: {
            appId: "5QS71OCCL0",
            key: "f2bacd2ff872cef6cb7456daf130dbf7",
        },
        cloudinary: {
            apiSecret: "DIZ1wB33qjVifgCGWpXkdq2ZN-Y",
        },
    },
};
