declare module '@mappedin/mappedin-js' {
    export class MapView {
        constructor(options: {
            apiKey: string;
            clientId: string;
            mapStyles: string;
            mapContainer: HTMLElement;
        });
        on(event: string, callback: () => void): void;
    }
}