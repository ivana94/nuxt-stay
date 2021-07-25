export default function(context, inject) {
    let isLoaded = false;
    let waiting = [];

    addScript();
    inject("maps", {
        showMap,
        makeAutoComplete,
    });

    function addScript() {
        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDvE1kkImXeOnVX8xEybtfAm37HtakzBK8&libraries=places&callback=initGoogleMaps";
        script.async = true;
        window.initGoogleMaps = initGoogleMaps;
        document.head.appendChild(script);
    }

    function initGoogleMaps() {
        isLoaded = true;
        waiting.forEach((elem) => {
            if (typeof elem.fn === "function") {
                elem.fn(...elem.arguments);
            }
        });
        waiting = [];
    }

    function makeAutoComplete(input) {
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
        const autoComplete = new window.google.maps.places.Autocomplete(
            input,
            options
        );
        // this event fires whenever the user selects a place from the autocomplete
        autoComplete.addListener("place_changed", () => {
            // gives us the place the user selected
            const place = autoComplete.getPlace();
            // dispatchEvent takes an event object as an argument
            input.dispatchEvent(new CustomEvent("changed", { detail: place }));
        });
    }

    function showMap(canvas, lat, lng) {
        if (!isLoaded) {
            waiting.push({ fn: showMap, arguments });
            return;
        }
        const mapOptions = {
            zoom: 18,
            center: new window.google.maps.LatLng(lat, lng),
            disableDefaultUI: true,
            zoomControl: true,
        };
        const map = new window.google.maps.Map(canvas, mapOptions);
        const position = new window.google.maps.LatLng(lat, lng);
        const marker = new window.google.maps.Marker({ position });
        marker.setMap(map);
    }
}
