// no client or server in name so that we can make requests from both client and server
export default function(context, inject) {
    const appId = "5QS71OCCL0";
    const apiKey = "33ff9a090ed2378cd44ef55bd5a86b6a";

    inject("dataApi", {
        getHome,
    });

    async function getHome(homeId) {
        const response = await fetch(
            `https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
            {
                headers: {
                    "X-Algolia-API-Key": apiKey,
                    "X-Algolia-Application-Id": appId,
                },
            }
        );
        const json = await response.json();
        return json;
    }
}
