import React from 'react'

export default function MainPage() {
  return (
    <div>
        <div class="map-container"> 
        <section class="main">
        <h1>Local Shortcut</h1>
        <p> Find local shortcuts. Somewhere you cannot find on google maps. hover over pin to learn more.</p>
        <div id='map' class='map'></div> 
        <img src="./assets/pin.svg" class="pin" />
        <div class="modal">
            <h2>Queen street Shortcut</h2>
            <p>Walk through the main entrance and take the small lift to the level 5. This will take you to the adjacent street quickly.</p>
        </div>
        </section>
    </div>
    </div>
  )
}

