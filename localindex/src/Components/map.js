import React from "react";
import { useState, useEffect, useRef } from "react";
import tt from "@tomtom-international/web-sdk-maps";

export default function Map({ pins }) {
  const MAX_ZOOM = 20;

  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(174.755465);
  const [mapLatitude, setMapLatitude] = useState(-36.842207);
  const [mapZoom, setMapZoom] = useState(15);
  const [map, setMap] = useState({});

  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  const addMarker = (pin) => {
    const targetCoordinates = [pin.longitude, pin.latitude];
    const marker = new tt.Marker().setLngLat(targetCoordinates).addTo(map);
    const popup = new tt.Popup({ offset: popupOffsets }).setHTML(
      `<h3>${pin.title}</h3>rating ${pin.rating} <br /> <img src=${pin.icon} alt=${pin.title} width='100px' height='100px'/><br/><p align="left">${pin.description}
      </p>`
    );
    marker.setPopup(popup);
  };

  function addMarkers(pins) {
    pins.forEach((pin) => {
      addMarker(pin);
    });
  }

  React.useEffect(() => {
    addMarkers(pins);
  }, [map]);

  var popupOffsets = {
    top: [0, 0],
    bottom: [0, -50],
    left: [25, -35],
    right: [-25, -35],
  };

  function reloadMap() {
    let map = tt.map({
      key: "8h504Wc4AXL6OPndqhrtKf70AovVBL3V",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
  }

  useEffect(() => {
    reloadMap();
  }, [pins]);

  return (
    <div className="App">
      <div
        ref={mapElement}
        className="mapDiv"
        style={{ height: "80vh", width: "96vw", margin: "0" }}
      ></div>
      {/* <b class="latitudetext">Please enter latitude</b>
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
      /> */}
      {/* <div className="zoomplay">
        <button onClick={decreaseZoom} class="zoomout">
          -
        </button>
        {mapZoom}
        <button onClick={increaseZoom} class="zoomin">
          +
        </button>
      </div>
      <div className="zoomplay">
        <button onClick={updateMap}>Update Map</button>
        <button onClick={addMarkers}>Add Marker</button>
      </div> */}
    </div>
  );
}
