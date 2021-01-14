import React, { useEffect, useRef, useState } from "react";
import DataMap from "datamaps";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Mixin = css`
  height: 100%;
  width: 100%;
`;
const Map = styled.div`
  ${Mixin};
`;

const MapBox = styled.div`
  flex: 1;
  ${Mixin}
`;

const ButtonBox = styled.div`
  padding: 2rem;
`;

function App() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Record<string, string>>({});
  const [map, setMap] = useState<any | null>(null);
  useEffect(() => {
    if (mapRef.current) {
      setMap((prev: any) => {
        if (!prev) {
          return new DataMap({
            element: mapRef.current,
            projection: "mercator",
            fills: {
              defaultFill: "#ABDDA4",
              authorHasTraveledTo: "#fa0fa0",
            },
          });
        }
        return prev;
      });
    }
  }, [mapRef]);
  if (map) {
    map.updateChoropleth(filter);
  }
  return (
    <Container>
      <ButtonBox>
        <button
          onClick={() => {
            setFilter({ USA: "red" });
          }}
        >
          필터1
        </button>
        <button
          onClick={() => {
            setFilter({ USA: "blue" });
          }}
        >
          필터2
        </button>
        <button
          onClick={() => {
            setFilter({ USA: "green" });
          }}
        >
          필터3
        </button>
        <button
          onClick={() => {
            setFilter({ USA: "yellow" });
          }}
        >
          필터4
        </button>
      </ButtonBox>
      <MapBox>
        <Map ref={mapRef} />
      </MapBox>
    </Container>
  );
}

export default App;
