import { unwrap, getErrorResponse } from "~/utils/fetchUtils";

export default function({ $config }, inject) {
    const headers = {
        "X-Algolia-API-Key": $config.algolia.key,
        "X-Algolia-Application-Id": $config.algolia.appId,
    };

    inject("dataApi", {
        getHome,
        getReviewsByHomeId,
        getUserByHomeId,
        getHomesByLocation,
        getHomes,
    });

    async function getHome(homeId) {
        try {
            return unwrap(
                await fetch(
                    `https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
                    {
                        headers,
                    }
                )
            );
        } catch (error) {
            return getErrorResponse(error);
        }
    }

    async function getReviewsByHomeId(homeId) {
        try {
            return unwrap(
                await fetch(
                    `https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/reviews/query`,
                    {
                        headers,
                        method: "POST",
                        body: JSON.stringify({
                            filters: `homeId:${homeId}`,
                            hitsPerPage: 6,
                            // algolia sends over results to highlight; setting this to [] ensures algolia doesn't send that over. this means algolia sends over less data
                            attributesToHighlight: [],
                        }),
                    }
                )
            );
        } catch (error) {
            return getErrorResponse(error);
        }
    }

    async function getUserByHomeId(homeId) {
        try {
            return unwrap(
                await fetch(
                    `https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/users/query`,
                    {
                        headers,
                        method: "POST",
                        body: JSON.stringify({
                            filters: `homeId:${homeId}`,
                            attributesToHighlight: [],
                        }),
                    }
                )
            );
        } catch (error) {
            return getErrorResponse(error);
        }
    }

    async function getHomesByLocation(
        lat,
        lng,
        start,
        end,
        radiusInMeters = 1500 * 15
    ) {
        // 1500 * 15 is about 15 miles
        try {
            const days = [];
            for (let day = start; day <= end; day += 86400) {
                days.push(`availability:${day}`);
            }
            return unwrap(
                await fetch(
                    `https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`,
                    {
                        headers,
                        method: "POST",
                        body: JSON.stringify({
                            aroundLatLng: `${lat},${lng}`,
                            // aroundRadius limits results to radius passed in
                            // so if radiusInMeters = 1500 we will only see results 1500m from the search
                            aroundRadius: radiusInMeters,
                            hitsPerPage: 10,
                            attributesToHighlight: [],
                            filters: days.join(" AND "),
                        }),
                    }
                )
            );
        } catch (error) {
            return getErrorResponse(error);
        }
    }

    async function getHomes() {
        try {
            return unwrap(
                await fetch(
                    `https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`,
                    {
                        headers,
                        method: "POST",
                        body: JSON.stringify({
                            hitsPerPage: 8,
                            attributesToHighlight: [],
                        }),
                    }
                )
            );
        } catch (error) {
            return getErrorResponse(error);
        }
    }
}
