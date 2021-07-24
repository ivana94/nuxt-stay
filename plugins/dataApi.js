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
