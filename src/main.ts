import { getMapData, show3dMap } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/index.css";

// See Demo API key Terms and Conditions
// https://developer.mappedin.com/v6/demo-keys-and-maps/
const options = {
    key: '65ca6d27d53f21f234ae6395',
    secret: '0b25fc24d564c644443663d0b4d083605090d349975d0983fc96e06a5b1934dd',
    mapId: '65c0ff7430b94e3fabd5bb8c'
};

const colors = ['blue', 'pink', 'green', 'orange', 'tomato', 'gray'];
// SVG image for the label's icon.
const icon = `<svg width="92" height="92" viewBox="-17 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M53.99 28.0973H44.3274C41.8873 28.0973 40.7161 29.1789 40.7161 31.5387V61.1837L21.0491 30.7029C19.6827 28.5889 18.8042 28.1956 16.0714 28.0973H6.5551C4.01742 28.0973 2.84619 29.1789 2.84619 31.5387V87.8299C2.84619 90.1897 4.01742 91.2712 6.5551 91.2712H16.2178C18.7554 91.2712 19.9267 90.1897 19.9267 87.8299V58.3323L39.6912 88.6656C41.1553 90.878 41.9361 91.2712 44.669 91.2712H54.0388C56.5765 91.2712 57.7477 90.1897 57.7477 87.8299V31.5387C57.6501 29.1789 56.4789 28.0973 53.99 28.0973Z" fill="white"/>
<path d="M11.3863 21.7061C17.2618 21.7061 22.025 16.9078 22.025 10.9887C22.025 5.06961 17.2618 0.27124 11.3863 0.27124C5.51067 0.27124 0.747559 5.06961 0.747559 10.9887C0.747559 16.9078 5.51067 21.7061 11.3863 21.7061Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="57" height="91" fill="white" transform="translate(0.747559 0.27124)"/>
</clipPath>
</defs>
</svg>`;


async function init() {
    const mapData = await getMapData(options);
    const mapView = await show3dMap(document.getElementById('mappedin-map') as HTMLDivElement, mapData);
    // Add all the labels to the map.
    mapView.Labels.all();
    // Remove all the labels from the map.
    mapView.Labels.removeAll();
    // Label all spaces with its space name and make them interactive.



    mapData.getByType('space').forEach(space => {
        if (space.name) {
            mapView.Labels.add(space, space.name, { // Added a comma here
                appearance: {
                    marker: {
                        foregroundColor: {
                            active: 'red',
                            inactive: 'green',
                        },
                        icon: icon,
                        iconSize: 15,
                    },
                    text: {
                        foregroundColor: 'light blue',
                    },
                },
            });
        }
    }

    )
    // Set each space to be interactive and its hover color to red.
    mapData.getByType('space').forEach(space => {
        mapView.updateState(space, {
            interactive: true,
            hoverColor: 'red',
        });
    });

};

init();
