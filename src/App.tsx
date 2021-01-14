import React, { useState } from "react";
import styled from "styled-components";
import Map, { Mixin } from "./components/Map";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MapBox = styled.div`
  flex: 1;
  ${Mixin}
`;

const ButtonBox = styled.div`
  padding: 2rem;
`;

function App() {
  const [filter, setFilter] = useState<Record<string, string>>({});
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
        <Map filter={filter} style={{ height: "100%", width: "100%" }} />
      </MapBox>
    </Container>
  );
}

export default App;
