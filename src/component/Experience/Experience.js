import React from "react";
import "./style.css"
export default function App() {

  return (
    <div className="experience-container">
      <div className="upper-container-exp">
        <div className="upper-spam">
          2+
        </div>
      </div>
      <div className="lower-container-exp">
      <div className="lower-container-exp-left">
      YEARS OF EXPERIENCE <br/>
      IN CREATING <br/><span>SCALABLE,</span> <br/><span>ROBUST</span><br/> <span>AND INTERACTIVE</span> APPLICATIONS
      </div>
      <div className="lower-container-exp-right">
        <div style={{ height: '80vh', width: '100%' }}>
      <Globe
        ref={globeEl}
        backgroundColor="#0c101b"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        // specify the texture for the earth's surface
        surfaceImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
        // add markers if needed
        markers={[
          {
            id: 'marker1',
            name: 'New York',
            color: 'red',
            coordinates: [40.7128, -74.006],
            value: 50,
          },
          {
            id: 'marker2',
            name: 'San Francisco',
            color: 'blue',
            coordinates: [37.7749, -122.4194],
            value: 25,
          },
        ]}
        // set autoRotate to true to make the earth revolve
        autoRotate={true}
        // set camera position and zoom level
        cameraPosition={[0, 0, 2.2]}
        // disable zoom and dragging
        enableZoom={false}
        enableDragging={false}
        // stop propagation of events to parent elements
        onClickMarker={(marker) => {
          console.log(marker);
          globeEl.current.controls().autoRotate = false;
        }}
        onDefocus={() => {
          globeEl.current.controls().autoRotate = true;
        }}
      />
    </div>
      </div>
      </div>
    </div>
  );
}