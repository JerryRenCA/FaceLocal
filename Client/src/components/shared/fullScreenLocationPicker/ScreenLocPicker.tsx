import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMakerPicker from "../locationMakerPicker/LocationMakerPicker";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";

export default function ScreenLocPicker() {
  const [open, setOpen] = React.useState(false);
  const [flyto, setFlyto] = React.useState(false);
  const [locationInfo, setLocationInfo] = React.useState("Halifax");
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleFlyto = (val: boolean) => {
    setFlyto(val);
  };
  const handleFlytoEnd = () => setFlyto(false);
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
      >
        <div className="w-[80vw] h-[80vh] relative">
          <div className="absolute right-[1rem] z-[1000] top-4 bg-slate-50  border-black rounded-md">
            <MapButtons handleClose={handleClose} handleFlyto={handleFlyto} />
          </div>
          <LocationMakerPicker flyto={flyto} handleFlytoEnd={handleFlytoEnd} setFlyto={setFlyto}/>
          {flyto&&<div className="absolute z-[1001] left-1/2 top-1/2">
            <Box sx={{ display: "flex" }}>
              <CircularProgress color="secondary" size='60px'/>
            </Box>
          </div>}
        </div>
      </Backdrop>
    </div>
  );
}
// Sub Module #1
const MapButtons = ({
  handleClose,
  handleFlyto,
}: {
  handleClose: () => void;
  handleFlyto: (val: boolean) => void;
}) => {
  const buttons = [
    <Button
      key="one"
      sx={{ paddingY: 1, width: 10 }}
      onClick={() => handleFlyto(true)}
    >
      <MyLocationIcon fontSize="small" color="primary" />
    </Button>,
    <Button key="two" sx={{ paddingY: 1, width: 10 }} onClick={handleClose}>
      <FullscreenExitOutlinedIcon fontSize="small" color="primary" />
    </Button>,
  ];
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="map buttons"
      variant="outlined"
      sx={{ width: "100%" }}
    >
      {buttons}
    </ButtonGroup>
  );
};
