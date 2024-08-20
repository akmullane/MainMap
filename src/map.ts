import Mappedin from '@mappedin/mappedin-js';

export function initMap(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const mapView = new Mappedin.MapView({
        apiKey: 'YOUR_MAPPEDIN_API_KEY',
        clientId: 'YOUR_CLIENT_ID',
        mapStyles: 'YOUR_MAP_STYLES',
        mapContainer: container,
    });

    mapView.on('ready', () => {
        console.log('Mappedin Map is ready!');
    });
}