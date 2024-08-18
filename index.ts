import { getMapData, show3dMap } from '@mappedin/mappedin-js';
import "@mappedin/mappedin-js/lib/index.css";
import "./styles.css";

async function go() {
  // See Trial API key Terms and Conditions
  // https://developer.mappedin.com/web/v6/trial-keys-and-maps/
  const mapData = await getMapData({
    key: '65ca6d27d53f21f234ae6395',
    secret: '0b25fc24d564c644443663d0b4d083605090d349975d0983fc96e06a5b1934dd',
    mapId: '65c0ff7430b94e3fabd5bb8c',
  });

  //Display the default map in the mappedin-map div.
  await show3dMap(document.getElementById('mappedin-map') as HTMLDivElement, mapData);
}

go();