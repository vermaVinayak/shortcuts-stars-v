import React from "react";
import Map from "../Components/map";

export default function Home({ pins }) {
  console.log("home", pins);

  return (
    <section class="main">
      <div class="map-container">
        <h1>Local Tips</h1>
        <p>
          {" "}
          Find local tips. Somewhere you cannot find on google maps. Click on
          pin to learn more.
        </p>
        <>
          <Map pins={pins} />
        </>
      </div>
    </section>
  );
}
