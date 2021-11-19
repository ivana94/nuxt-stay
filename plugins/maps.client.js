export default function(context, inject) {
    let isLoaded = false;
    let waiting = [];
    window.initGoogleMaps = init;

    addScript();
    inject("maps", {
        showMap,
        makeAutoComplete,
    });

    function addScript() {
        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNm2hhNdANZwNDE9tkrWYDUjnfCJz8Tw&libraries=places&callback=initGoogleMaps";
        script.async = true;
        document.head.appendChild(script);
    }

    function init() {
        isLoaded = true;
        waiting.forEach((elem) => {
            if (typeof elem.fn === "function") {
                elem.fn(...elem.arguments);
            }
        });
        waiting = [];
    }

    function makeAutoComplete(input, types = ["(cities)"]) {
        if (!isLoaded) {
            waiting.push({
                fn: makeAutoComplete,
                arguments,
            });
            return;
        }
        // https://developers.google.com/maps/documentation/javascript/places-autocomplete
        const options = {
            types: ["(cities)"],
        };
        const autoComplete = new window.google.maps.places.Autocomplete(input, {
            types,
        });
        // this event fires whenever the user selects a place from the autocomplete
        autoComplete.addListener("place_changed", () => {
            // gives us the place the user selected
            const place = autoComplete.getPlace();
            // dispatchEvent takes an event object as an argument
            input.dispatchEvent(new CustomEvent("changed", { detail: place }));
        });
    }

    function showMap(canvas, lat, lng, markers) {
        if (!isLoaded) {
            waiting.push({ fn: showMap, arguments });
            return;
        }
        const mapOptions = {
            zoom: 18,
            center: new window.google.maps.LatLng(lat, lng),
            disableDefaultUI: true,
            zoomControl: true,
            styles: [
                {
                    featureType: "poi.business",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
            ],
        };
        const map = new window.google.maps.Map(canvas, mapOptions);
        if (!markers) {
            const position = new window.google.maps.LatLng(lat, lng);
            const marker = new window.google.maps.Marker({
                position,
                clickable: false,
            });
            marker.setMap(map);
            return;
        }
        const bounds = new window.google.maps.LatLngBounds();
        markers.forEach((home) => {
            const position = new window.google.maps.LatLng(home.lat, home.lng);
            const marker = new window.google.maps.Marker({
                position,
                label: {
                    text: `$${home.pricePerNight}`,
                    className: `marker home-${home.id}`,
                },
                icon: "https://maps.gstatic.com/mapfiles/transparent.png",
                clickable: false,
            });
            marker.setMap(map);
            bounds.extend(position);
        });

        map.fitBounds(bounds);
    }
}
