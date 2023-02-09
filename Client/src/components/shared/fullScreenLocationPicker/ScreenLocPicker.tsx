import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function ScreenLocPicker() {
  const [open, setOpen] = React.useState(false);
  const [locationInfo, setLocationInfo] = React.useState("Halifax");
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<LocationOnOutlinedIcon />}
        onClick={handleToggle}
      >
        {locationInfo}
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onDoubleClick={handleClose}
      >
        <div className="w-[80vw] h-[80vh]">
          <MapContainer
            style={{ height: "80vh" }}
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
                Halifax. <br /> A beautiful city.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Backdrop>
    </div>
  );
}
