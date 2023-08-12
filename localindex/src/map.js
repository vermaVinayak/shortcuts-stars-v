import './App.css';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
// import { setMap, setInitialized } from '@tomtom-international/web-sdk-maps';
import * as tt from "@tomtom-international/web-sdk-maps";
import useEffect from 'react';
import { useRef } from 'react';
import Home from './pages/Home';
// import render from '@testing-library/react';
import { useState } from 'react';
import { render } from 'react-dom';

// function App() {
//   return (
//     <div className="App"> 
//   <Home/>
//     </div>
//   );
//   var map = tt.map({
//     key: 'o8Cegu3yE9Qc7ZxskgAocGJluAfPXAbj',
//     container: "map",
//     dragPan: true
//   });
  // map.addControl(new tt.FullscreenControl());
  // map.addControl(new tt.NavigationControl()); 
// }
// export default App;
// const [mapLongitude, setMapLongitude] = useState(-121.91599);
// const [mapLatitude, setMapLatitude] = useState(37.36765);
// const [mapZoom, setMapZoom] = useState(13);


export function Map(props) {
    const mapElement = useRef();
    const [mapLongitude, setMapLongitude] = useState(-121.91599);
    const [mapLatitude, setMapLatitude] = useState(37.36765);
    const [mapZoom, setMapZoom] = useState(13);
    const [map, setMap] = useState({});

    // const [count, setCount] = useState(0);

    useEffect(() => {
        let map = map({
          key: "o8Cegu3yE9Qc7ZxskgAocGJluAfPXAbj",
          container: mapElement.current,
          center: [mapLongitude, mapLatitude],
          zoom: mapZoom
        });
        setMap(map);
        return () => map.remove();
      }, []);
      
    
    // useEffect(() => {
        // let map = map({
        //     /* 
        //     This key will API key only works on this Stackblitz. To use this code in your own project,
        //     sign up for an API key on the TomTom Developer Portal.
        //     // */
        //     key: "o8Cegu3yE9Qc7ZxskgAocGJluAfPXAbj",
        //     // language: 'English',
        //     // style: { map: 'basic_main' },
        //     // center: [10, 10],
        //     // zoom: 10,
        // });
        
        // setMap(map);
        // // setInitialized(true);
        // return () => map.remove();
    // },[]);

    // return <div ref={mapElement} className="mapDiv" />
    // return (<div ref={mapElement} className="mapDiv" />);

}