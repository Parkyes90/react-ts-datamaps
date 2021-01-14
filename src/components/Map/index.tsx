import React, { useEffect, useRef, useState } from "react";
import DataMap from "datamaps";
import { css } from "styled-components";

export const Mixin = css`
  height: 100%;
  width: 100%;
`;

interface MapProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  filter: Record<string, string>;
}

const Map: React.FC<MapProps> = ({ filter, ...props }) => {
  const mapRef = useRef<HTMLDivElement>(null);
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
  return <div ref={mapRef} {...props} />;
};

export default Map;
