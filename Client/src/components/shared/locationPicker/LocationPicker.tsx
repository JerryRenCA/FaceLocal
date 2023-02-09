import React from "react";
import tw from "tailwind-styled-components";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Box, Tooltip } from "@mui/material";
import ValSelector from "../valSelector/ValSelector";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const Container = tw.div`mt-[-8px]`;

const LocationPicker = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "flex-end", }}>
        <Tooltip title="Address of the event." arrow>
          <LocationOnOutlinedIcon
            sx={{ color: "action.active", fontSize: 40, pb: 1 }}
          />
        </Tooltip>
        <ValSelector title="Location" subTitles={["opt0", "opt1", "opt2"]} />
      </Box>
      <div className=" mt-[-8px]">
      <MapContainer
        style={{ height: "20rem"}}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </Container>
  );
};
export default LocationPicker;
