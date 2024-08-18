import { getMapData, show3dMap } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/index.css";

// See Demo API key Terms and Conditions
// https://developer.mappedin.com/v6/demo-keys-and-maps/
const options = {
  key: '65ca6d27d53f21f234ae6395',
  secret: '0b25fc24d564c644443663d0b4d083605090d349975d0983fc96e06a5b1934dd',
  mapId: '65c0ff7430b94e3fabd5bb8c'
};

async function init() {
  const mapData = await getMapData(options);
  const mapView = await show3dMap(document.getElementById('mappedin-map') as HTMLDivElement, mapData);

  // // Set each space to be interactive.
  // mapData.getByType('space').forEach(space => {
  //   mapView.updateState(space, {
  //     interactive: true,
  //   });
  // });

  // // Set each space to be interactive and its hover color to red.
  // mapData.getByType('space').forEach(space => {
  //   mapView.updateState(space, {
  //     interactive: true,
  //     hoverColor: 'grey',
  //   });
  // });
  // // Add a label on each space with a name and make the labels interactive.
  // mapData.getByType('space').forEach(space => {
  //   if (space.name) {
  //     mapView.Labels.add(space, space.name, {
  //       interactive: true,
  //     });
  //   }
  // });
  // // Add a marker on each space with a name and make the markers interactive.
  // mapData.getByType('space').forEach(space => {
  //   if (space.name) {
  //     mapView.Markers.add(space, `<div>${space.name}</div>`, {
  //       interactive: true,
  //     });
  //   }
  // });
  // // Act on the click event to log the id of the marker that was clicked and then remove it.
  // mapView.on('click', async e => {
  //   if (e.markers.length > 0) {
  //     console.log('Clicked on marker: ' + e.markers[0].id);
  //     mapView.Markers.remove(e.markers[0]);
  //   }
  // });
  // mapData.getByType("space").forEach((space) => {
  //   // Generate a random color
  //   const hexColor =
  //     "#" +
  //     Math.floor(Math.random() * 16777215)
  //       .toString(16)
  //       .padStart(6, "0");
  //   // Apply it to each space
  //   mapView.updateState(space, {
  //     color: hexColor, // Set all space colors to teal
  //     interactive: true, // Make interactive (clickable and hoverable)
  //     hoverColor: hexColor // Set the same value as hover color
  //   });
  // });
  // SVG image for the label's icon.
  const washroomIcon = `
  <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Rectangle for the restroom -->
    <rect x="2" y="4" width="20" height="16" fill="#b0bec5" stroke="#455a64" stroke-width="2"/>
    
    <!-- Door -->
    <rect x="10" y="10" width="4" height="6" fill="#ffffff" stroke="#455a64" stroke-width="2"/>
    
    <!-- Male symbol -->
    <circle cx="7" cy="8" r="2" fill="#ffffff" stroke="#455a64" stroke-width="2"/>
    <line x1="7" y1="10" x2="7" y2="15" stroke="#455a64" stroke-width="2"/>
    <line x1="7" y1="10" x2="9" y2="8" stroke="#455a64" stroke-width="2"/>
    
    <!-- Female symbol -->
    <circle cx="17" cy="8" r="2" fill="#ffffff" stroke="#455a64" stroke-width="2"/>
    <line x1="17" y1="10" x2="17" y2="14" stroke="#455a64" stroke-width="2"/>
    <line x1="15" y1="12" x2="19" y2="12" stroke="#455a64" stroke-width="2"/>
    
    <!-- Water closet icon -->
    <rect x="4" y="15" width="16" height="2" fill="#ffffff" stroke="#455a64" stroke-width="2"/>
    <line x1="5" y1="17" x2="5" y2="19" stroke="#455a64" stroke-width="2"/>
    <line x1="19" y1="17" x2="19" y2="19" stroke="#455a64" stroke-width="2"/>
  </svg>
  `;


  const colors = ['blue', 'pink', 'green', 'orange', 'tomato', 'gray'];
  // Add all the labels to the map.

  mapView.Labels.all();
  // Label all spaces with its space name and add styling using a custom appearance and SVG icon.
  // Remove all the labels from the map.
  mapView.Labels.removeAll();
  // Label all spaces with its space name and make them interactive.
  mapData.getByType("space").forEach((space, index) => {
    if (space.name) {
      const color = colors[index % colors.length];

      mapView.Labels.add(space, space.name, {
        appearance: {
          marker: {
            foregroundColor: {
              active: color,
              inactive: color,
            },
            icon: washroomIcon,
          },
          text: {
            foregroundColor: color,
          },
        },
      });
    }
  });
  // Set the floor to Floor.id 'm_987654321'. 
  mapView.setFloor(`m_987654321`);
  // Listen for changes to the floor.
  mapView.on('floor-change', event => {
    console.log('Floor changed to: ', event.floor.name);
  });







}

init();

