import * as React from "react";
import { useState, useEffect, useRef } from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from "@tomtom-international/web-sdk-maps"

//const MAX_ZOOM = 17;
export default function Home() {
    const mapElement = useRef();
    const [mapLongitude, setMapLongitude] = useState(174.763336);
    const [mapLatitude, setMapLatitude] = useState(-36.848461);
    const [mapZoom, setMapZoom] = useState(13);
    const [map, setMap] = useState({});
  
    // const increaseZoom = () => {
    //   if (mapZoom < MAX_ZOOM) {
    //     setMapZoom(mapZoom + 1);
    //   }
    // };
  
    // const decreaseZoom = () => {
    //   if (mapZoom > 1) {
    //     setMapZoom(mapZoom - 1);
    //   }
    // };
  
    // const updateMap = () => {
    //   map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    //   map.setZoom(mapZoom);
    // };
    const addMarker = () => {
        const targetCoordinates = [mapLongitude, mapLatitude];
        const marker = new tt.Marker().setLngLat(targetCoordinates).addTo(map);
        const popup = new tt.Popup({ offset: popupOffsets }).setHTML("Custom Marker");
        marker.setPopup(popup)
      };
      
      var popupOffsets = {
        top: [0, 0],
        bottom: [0, -50],
        left: [25, -35],
        right: [-25, -35]
      };
    
    useEffect(() => {
      let map = tt.map({
         key: "o8Cegu3yE9Qc7ZxskgAocGJluAfPXAbj",
        container: mapElement.current,
        center: [mapLongitude, mapLatitude],
        zoom: mapZoom
      });
      setMap(map);
      return () => map.remove();
    }, []);
  return (
    <section class="main">
    <div class="map-container">        
      <h1>Local Shortcut</h1>
        <p> Find local shortcuts. Somewhere you cannot find on google maps. hover over pin to learn more.</p>
            <div ref={mapElement} className="mapDiv map" />
       <input
             type="text"
          name="latitude"
           placeholder="latitude"
          value={mapLatitude}
           onChange={(e) => setMapLatitude(e.target.value)}
           class="latitudebox"
         />

       <b class="longitudetext">Please enter longitude</b>

        <input
         type="text"
       name="longitude"
           placeholder="longitude"
           value={mapLongitude}
          onChange={(e) => setMapLongitude(e.target.value)}
          class="longitudebox"
        />

            <button onClick={addMarker}>
            Add Marker
          </button>
            <div class="pin"></div>
            
        <div class="modal">
            <h2>Queen street Shortcut</h2>
            <p>Walk through the main entrance and take the small lift to the level 5. This will take you to the adjacent street quickly.</p>
            <div>Review : 5.0</div>
        </div>
      </div>
    </section>
  )
}