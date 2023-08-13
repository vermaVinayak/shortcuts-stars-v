import React from 'react'
import Map from '../Components/map'


export default function Home({pins}) {
  console.log("home", pins)
    
    
  return (
    <section class="main">
    <div class="map-container">        
      <h1>Local Shortcut</h1>
        <p> Find local shortcuts. Somewhere you cannot find on google maps. hover over pin to learn more.</p>
        <>
          <Map pins={pins}/>
        </>
        <img src="./assets/pin.svg" class="pin" />
        <div class="modal">
            <h2>Queen street Shortcut</h2>
            <p>Walk through the main entrance and take the small lift to the level 5. This will take you to the adjacent street quickly.</p>
            <div>Review : 5.0</div>
        </div>
      </div>
    </section>
  )
}