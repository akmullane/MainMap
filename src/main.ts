import { getVenue, showVenue, E_SDK_EVENT } from '@mappedin/mappedin-js';
import '@mappedin/mappedin-js/lib/index.css';

async function init() {
    const venueData = await getVenue({
        clientId: '<clientId>',
        clientSecret: '<clientSecret>',
        venue: '<venue>',
    });

    const mapView = await showVenue(document.getElementById('mappedin-map'), venueData);
    mapView.FloatingLabels.labelAllLocations();
    mapView.addInteractivePolygonsForAllLocations();
    mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
        console.log(`Polygon with id ${polygons[0].id} clicked!`);
    });
}
document.addEventListener('DOMContentLoaded', init);