import fetch from "node-fetch";
import { unwrap, getErrorResponse } from "../../../utils/fetchUtils";
import { getHeaders } from "../helpers";

export default (algoliaConfig) => {
    const headers = getHeaders(algoliaConfig);
    return {
        create: async (homeId, payload) => {
            try {
                const availability = [];
                payload.availabilityRanges.forEach((range) => {
                    const start = new Date(range.start).getTime() / 1000;
                    const end = new Date(range.end).getTime() / 1000;
                    // 86400s = 1 day
                    for (var day = start; day <= end; day += 86400) {
                        // loop converts our range into array of individual days between start and end
                        // ie range might be aug 1 - aug 10, this loop creates array that contains aug 1, aug 2, all the way through aug 10
                        availability.push(day);
                    }
                });
                delete payload.availabilityRanges;
                payload.availability = availability;
                console.log(payload);
                return unwrap(
                    await fetch(
                        `https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
                        {
                            headers,
                            method: "PUT",
                            body: JSON.stringify(payload),
                        }
                    )
                );
            } catch (error) {
                return getErrorResponse(error);
            }
        },
        delete: async (homeId, payload) => {
            try {
                return unwrap(
                    await fetch(
                        `https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
                        {
                            headers,
                            method: "DELETE",
                        }
                    )
                );
            } catch (error) {
                return getErrorResponse(error);
            }
        },
        getByUserId: async (userId) => {
            try {
                return unwrap(
                    await fetch(
                        `https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/query`,
                        {
                            headers,
                            method: "POST",
                            body: JSON.stringify({
                                filters: `userId:${userId}`,
                                attributesToRetrieve: ["objectID", "title"],
                                attributesToHighlight: [],
                            }),
                        }
                    )
                );
            } catch (error) {
                return getErrorResponse(error);
            }
        },
    };
};
