import "@tomtom-international/web-sdk-maps/dist/maps.css";

import "./App.css";

import Pins from "./Components/pins";
import Map from "./Components/map";


const MAX_ZOOM = 20;


function App() {
 

  return (
    <>
    
    <Pins />
    <Map />
    
    </>

   
      
      
    
  );
}

export default App;