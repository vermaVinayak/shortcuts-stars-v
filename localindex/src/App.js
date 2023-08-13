import "@tomtom-international/web-sdk-maps/dist/maps.css";
import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home";
import {useState} from 'react';

function App() {
  const [pins, setPins] = useState([]);
  return (
    <>
      <Header setPins={setPins}/>
      <Home pins={pins}/>
    </>
  );
}

export default App;