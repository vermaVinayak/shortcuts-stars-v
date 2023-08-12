import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";

const MAX_ZOOM = 17;


function App() {
  // const mapElement = useRef();
  // const [mapLongitude, setMapLongitude] = useState(-121.91599);
  // const [mapLatitude, setMapLatitude] = useState(37.36765);
  // const [mapZoom, setMapZoom] = useState(13);
  // const [map, setMap] = useState({});

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
  
  // const addMarker = () => {
  //   const targetCoordinates = [mapLongitude, mapLatitude];
  //   const marker = new tt.Marker().setLngLat(targetCoordinates).addTo(map);
  //   const popup = new tt.Popup({ offset: popupOffsets }).setHTML("Custom Marker");
  //   marker.setPopup(popup)
  // };
  
  // var popupOffsets = {
  //   top: [0, 0],
  //   bottom: [0, -50],
  //   left: [25, -35],
  //   right: [-25, -35]
  // };

  // var marker = new tt.Marker()
  //            .setLngLat([mapLongitude, mapLatitude])
  //            .addTo(map);

  // var popup = new tt.Popup({ offset: popupOffsets })
  //     .setHTML("Custom Marker");
  //     marker.setPopup(popup)

  // useEffect(() => {
  //   let map = tt.map({
  //     key: "8h504Wc4AXL6OPndqhrtKf70AovVBL3V",
  //     container: mapElement.current,
  //     center: [mapLongitude, mapLatitude],
  //     zoom: mapZoom,
  //   });
  //   setMap(map);
  //   return () => map.remove();
  // }, []);

 return (
  
<Home />
  //   <div className="App">
  //       <div ref={mapElement} className="mapDiv"></div>

       
  //       <b class="latitudetext">Please enter latitude</b>

  //       <input
  //         type="text"
  //         name="latitude"
  //         placeholder="latitude"
  //         value={mapLatitude}
  //         onChange={(e) => setMapLatitude(e.target.value)}
  //         class="latitudebox"
  //       />

  //       <b class="longitudetext">Please enter longitude</b>

  //       <input
  //         type="text"
  //         name="longitude"
  //         placeholder="longitude"
  //         value={mapLongitude}
  //         onChange={(e) => setMapLongitude(e.target.value)}
  //         class="longitudebox"
  //       />


  //       <div className="zoomplay">
  //         <button onClick={decreaseZoom} class='zoomout'>-</button>
  //         {mapZoom}
  //         <button onClick={increaseZoom} class='zoomin'>+</button>
          
  //       </div>
  //       <div className="zoomplay">
  //       <button onClick={updateMap}>
  //           Update Map
  //         </button>
  //         <button onClick={addMarker}>
  //           Add Marker
  //         </button>
  //       </div>

        

        
  //   </div>


      
      
    
  );
}

export default App;