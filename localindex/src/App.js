import logo from './logo.svg';
import './App.css';
import tt from "@tomtom-international/web-sdk-maps"; 
import Home from './pages/Home';
function App() {
  return (
    <div className="App"> 
  <Home/>
    </div>
  );
  // var map = tt.map({
  //   key: ,
  //   container: "map",
  //   dragPan: true
  // });
  map.addControl(new tt.FullscreenControl());
  map.addControl(new tt.NavigationControl());  
}



export default App;
