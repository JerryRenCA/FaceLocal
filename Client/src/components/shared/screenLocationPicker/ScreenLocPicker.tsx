import * as React from "react";
import tw from "tailwind-styled-components";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMakerPicker from "../locationMakerPicker/LocationMakerPicker";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Autocomplete,
  ButtonGroup,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
//types
type T_autoCompleteData = {
  title: string;
};
const default_autoCompleteDAta = [{ title: "First" }, { title: "Second" }];
//Styled Components
const Wrapper = tw.div`flex flex-col`;
// Functions & Data
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const defaultProps = {
  options: default_autoCompleteDAta,
  getOptionLabel: (option: T_autoCompleteData) => option.title,
};
//Module
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
        <Wrapper>
          <div className="bg-white text-black rounded-tl-md rounded-tr-md ">
            <Autocomplete
              // {...defaultProps}
              options={default_autoCompleteDAta.map((option) => option.title)}
              freeSolo
              id="clear-on-escape"
              clearOnEscape
              renderInput={(params) => (
                <Stack direction="row" spacing={0}>
                  <IconButton color="primary" aria-label="Search...">
                    <SearchRoundedIcon />
                  </IconButton>
                  <TextField
                    {...params}
                    label="Search ..."
                    variant="standard"
                  />
                </Stack>
              )}
              sx={{ paddingX: 2, paddingTop: 1 }}
            />
          </div>
          <div className="w-[80vw] h-[80vh] relative">
            <div className="absolute right-[1rem] z-[1000] top-4 bg-slate-50  border-black rounded-md">
              <MapButtons handleClose={handleClose} handleFlyto={handleFlyto} />
            </div>
            <LocationMakerPicker
              flyto={flyto}
              handleFlytoEnd={handleFlytoEnd}
              setFlyto={setFlyto}
            />
            {flyto && (
              <div className="absolute z-[1001] left-1/2 top-1/2">
                <Box sx={{ display: "flex" }}>
                  <CircularProgress color="secondary" size="60px" />
                </Box>
              </div>
            )}
          </div>
        </Wrapper>
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
