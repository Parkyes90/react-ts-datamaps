import React, { useEffect, useRef } from "react";
import DataMap from "datamaps";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Map = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapRef.current) {
      const map = new DataMap({
        element: mapRef.current,
        projection: "mercator",
        fills: {
          defaultFill: "#ABDDA4",
          authorHasTraveledTo: "#fa0fa0",
        },
      });
      map.updateChoropleth({
        USA: "red",
      });
    }
    return () => {
      console.log("de");
    };
  }, [mapRef]);
  return (
    <Container>
      <Map ref={mapRef} />
    </Container>
  );
}

export default App;
