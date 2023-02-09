import React, { useState } from "react";
import tw from "tailwind-styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button } from "@mui/material";

//Styled Components
const Container = tw.div`flex cursor-pointer hover:text-purple-800 font-semibold text-lg`;
const LocInfo = tw.div`pl-2 pr-6`;
// Module
const LocationBox = () => {
  const [loctionInfo, setLocationInfo] = useState("Halifax");
  return (
    <Container>
      <Button variant="outlined" startIcon={<LocationOnOutlinedIcon />}>
        {loctionInfo}
      </Button>
    </Container>
  );
};
export default LocationBox;
