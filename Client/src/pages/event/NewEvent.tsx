import { AccountCircle, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  TextField,
  Tooltip,
} from "@mui/material";

import React, { useState } from "react";
import tw from "tailwind-styled-components";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import DatePicker from "../../components/shared/datePicker/DatePicker";
import EventTagPicker from "../../components/shared/eventTagPicker/EventTagPicker";
import LocationPicker from "../../components/shared/locationPicker/LocationPicker";
//Types

//Styled Components
const Container = tw.div`flex justify-center items-center`;
const Form = tw.form`w-[30rem] border-2 my-8 min-h-[30rem] rounded-lg`;
const Title = tw.div`m-4 text-center text-3xl font-playfair `;
const FieldWrapper = tw.div`m-4`;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
];
//Module
const NewEvent = () => {
  const [value, setValue] = useState<DateValueType | null>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const handleMaximumText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value.length > 100) {
      e.target.value = e.target.value.slice(0, 100);
    }
  };
  return (
    <Container>
      <Form>
        <Title>New</Title>
        <FieldWrapper>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TitleRoundedIcon sx={{ color: "action.active", mr: 1, mb: 3.3 }} />
            <TextField
              fullWidth
              id="input-with-sx"
              label="Title*"
              variant="standard"
              helperText="Title of your post. Length: 6 - 30 characters."
            />
          </Box>
        </FieldWrapper>
        <FieldWrapper>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TitleRoundedIcon sx={{ color: "action.active", mr: 1, mb: 3.3 }} />
            <TextField
              fullWidth
              id="input-with-sx"
              label="Subtitle (optional)"
              variant="standard"
              helperText="Moer information about this post. Length: 0 - 50 characters."
            />
          </Box>
        </FieldWrapper>
        <FieldWrapper>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DescriptionRoundedIcon
              sx={{ color: "action.active", mr: 1, mb: 4.0 }}
            />
            <EventTagPicker />
          </Box>

          <label className="text-xs text-gray-500 pl-8">
            Tags for this event. 1 tag at least.
          </label>
        </FieldWrapper>

        <FieldWrapper>
          <div>
            <DatePicker />
          </div>
        </FieldWrapper>
        <FieldWrapper>
          <div className=" ">
            <DatePicker title="End Time" />
          </div>
        </FieldWrapper>
        <FieldWrapper className="flex justify-center">
          <IconButton
            color="primary"
            aria-label="set location"
            component="label"
          >
            <Tooltip title="Address of the event." arrow>
              <LocationOnOutlinedIcon sx={{ fontSize: 30 }} />
            </Tooltip>
          </IconButton>
        </FieldWrapper>
        <FieldWrapper>

        <LocationPicker />
        </FieldWrapper>
        <FieldWrapper className="flex  flex-col justify-center items-center">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <Tooltip title="Upload 1 or 2 pictures about this event." arrow>
              <PhotoCamera />
            </Tooltip>
          </IconButton>
          <div className=" w-4/5">
            <ImageList cols={2}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </FieldWrapper>
        <FieldWrapper>
          {/* <DateTimePicker
          label="Date&Time picker"
          value={Date.now()}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        </FieldWrapper>
      </Form>
    </Container>
  );
};
export default NewEvent;
