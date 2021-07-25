// no client or server in name so that we can make requests from both client and server
export default function(context, inject) {
    const appId = "5QS71OCCL0";
    const apiKey = "33ff9a090ed2378cd44ef55bd5a86b6a";
    const headers = {
        "X-Algolia-API-Key": apiKey,
        "X-Algolia-Application-Id": appId,
    };

    inject("dataApi", {
        getHome,
        getReviewsByHomeId,
        getUserByHomeId,
        getHomesByLocation,
    });

    async function getHome(homeId) {
        try {
            return unwrap(
                await fetch(
                    `https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
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
                    `https://${appId}-dsn.algolia.net/1/indexes/reviews/query`,
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
                    `https://${appId}-dsn.algolia.net/1/indexes/users/query`,
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

    async function getHomesByLocation(lat, lng, radiusInMeters = 1500) {
        try {
            return unwrap(
                await fetch(
                    `https://${appId}-dsn.algolia.net/1/indexes/homes/query`,
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
                        }),
                    }
                )
            );
        } catch (error) {
            return getErrorResponse(error);
        }
    }

    async function unwrap(response) {
        const json = await response.json();
        const { ok, status, statusText } = response;
        return { json, ok, status, statusText };
    }

    function getErrorResponse(error) {
        return {
            ok: false,
            status: 500,
            statusText: error.message,
            json: {},
        };
    }
}
