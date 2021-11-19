export default {
    // enables auto imports, which removes need for component boilerplate
    components: true,

    // global metas
    head: {
        titleTemplate: "Nuxt Stay: %s",
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
        "~/plugins/vCalendar.client",
        "~/plugins/stripe.client",
    ],
    modules: [
        "~/modules/auth",
        "~/modules/algolia",
        "~/modules/cloudinary",
        "@nuxtjs/cloudinary",
        "~/modules/stripe",
    ],
    buildModules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
    cloudinary: {
        cloudName: "dehkvp5v2",
    },
    image: {
        cloudinary: {
            baseURL: "https://res.cloudinary.com/dehkvp5v2/image/upload/",
        },
    },
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
                "48276842679-lh2ne8pqrsvsq4sljt796pjo99gfiv2l.apps.googleusercontent.com",
        },
        algolia: {
            appId: "5QS71OCCL0",
            key: "33ff9a090ed2378cd44ef55bd5a86b6a",
        },
        cloudinary: {
            apiKey: "441312267793484",
        },
        stripe: {
            key:
                "pk_test_51JKBqvIIAvOA9caivwdSTSJLIe6yxN431hSUC8lVEwSxtkgAm3h6vpsEQh5TEO5KCOwm7Bmj48D8n7lae0dXQv0K00JqptUoBD",
        },
        rootUrl:
            process.env.NODE_ENV === "production"
                ? "https://stbnb.vercel.app"
                : "http://localhost:3000",
    },
    privateRuntimeConfig: {
        algolia: {
            appId: "5QS71OCCL0",
            key: process.env.ALGOLIA_SECRET_KEY,
        },
        cloudinary: {
            apiSecret: process.env.CLOUDINARY_SECRET_KEY,
        },
        stripe: {
            secretKey: process.env.STRIPE_SECRET_KEY,
        },
    },
};
