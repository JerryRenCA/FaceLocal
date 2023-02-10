import { DivIcon, Icon, LatLng, LocationEvent } from "leaflet";
import { useCallback, useMemo, useRef, useState } from "react";

import React from "react";
import tw from "tailwind-styled-components";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Button, FormControlLabel, Switch } from "@mui/material";
// Types
// Styled Components
const Container = tw.div`w-[80vw] h-[80vh]`;
// Functions & Data
const center = { lat: 44.65107, lng: -63.582687 };
// Module
const LocationMakerPicker = ({
  flyto,
  handleFlytoEnd,
  setFlyto,
}: {
  flyto: boolean;
  handleFlytoEnd: () => void;
  setFlyto: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <MapContainer
      style={{ height: "80vh" }}
      center={[44.65107, -63.582687]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        flyto={flyto}
        handleFlytoEnd={handleFlytoEnd}
        setFlyto={setFlyto}
      />
      <DraggableMarker />
    </MapContainer>
  );
};

// // Sub Module #1
function LocationMarker({
  flyto,
  handleFlytoEnd,
  setFlyto,
}: {
  flyto: boolean;
  handleFlytoEnd: () => void;
  setFlyto: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [position, setPosition] = useState<LatLng | null>(
    new LatLng(center.lat, center.lng)
  );
  const [selfLocated, setSelfLocated] = useState(false);
  const map = useMapEvents({
    locationfound(e: LocationEvent) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      handleFlytoEnd();
      setSelfLocated(true)
    },
  });

  if (flyto) {map.locate()};
  var myIcon = new Icon({
    iconUrl: "/vite.svg",
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20],
  });
  return position === null ? null : (
    <Marker position={position} icon={myIcon} draggable={!selfLocated}>
      <Popup>
        <div className="flex flex-col items-center">
          <div className=" text-base pb-2">
            Your location. <span>{!selfLocated && "Not"} Auto-located!</span>
          </div>
          <Button fullWidth variant="text" onClick={() => {setFlyto(true)}}>
            Location
          </Button>
        </div>
      </Popup>
    </Marker>
  );
}
//   // Sub Module #2
function DraggableMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current as any;
        if (marker) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span className="flex flex-col justify-center items-center">
          <span className="text-lg pb-1 border-b-[2px] self-stretch text-center font-mono">
            Location
          </span>
          <FormControlLabel
            control={
              <Switch
                draggable
                onClick={toggleDraggable}
                sx={{ fontSize: "small" }}
              />
            }
            label="Movable"
          />
        </span>
      </Popup>
    </Marker>
  );
}
export default LocationMakerPicker;
