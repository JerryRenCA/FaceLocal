import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import tw from "tailwind-styled-components";
//type

//Styled components
const Container = tw.div`w-full`;
//Module
const ValSelector = ({
  title,
  subTitles,
}: {
  title: string;
  subTitles: string[];
}) => {
  const [selVal, setSelVal] = useState<number>(0);
  const handleChange = (e: SelectChangeEvent<number>) => {
    setSelVal(Number.parseInt(e.target.value as string));
  };
  return (
    <Container>
      <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120,paddingRight:1}}>
      <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
      <Select
        fullWidth
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={selVal}
        onChange={handleChange}
        label="Age"
        sx={{textAlign:"center"}}
      >
        {subTitles.map((it, id) => (
          <MenuItem key={id} value={id} sx={{ fontSize: 15 }}>
            {it}
          </MenuItem>
        ))}
      </Select>
     </FormControl>
    </Container>
  );
};
export default ValSelector;
