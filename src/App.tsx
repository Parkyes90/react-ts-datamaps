import React, { useEffect, useRef } from "react";
import DataMap from "datamaps";
function App() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapRef.current) {
      const map = new DataMap({
        element: mapRef.current,
        fills: {
          defaultFill: "rgba(23,48,210, 0.9)",
        },
      });
    }
    return () => {
      console.log("de");
    };
  }, []);
  return (
    <div
      style={{
        height: "100vh",
      }}
      ref={mapRef}
    >
      test
    </div>
  );
}

export default App;
