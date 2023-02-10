import { AccountCircle, PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";

import React, { useState } from "react";
import tw from "tailwind-styled-components";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendIcon from '@mui/icons-material/Send';
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

import DatePicker from "../../components/shared/datePicker/DatePicker";
import EventTagPicker from "../../components/shared/eventTagPicker/EventTagPicker";
import LocationPicker from "../../components/shared/locationPicker/LocationPicker";
import ValSelector from "../../components/shared/valSelector/ValSelector";
import { lightBlue } from "@mui/material/colors";
//Types

//Styled Components
const Container = tw.div`flex justify-center items-center`;
const Form = tw.form`w-[35rem] border-2 my-8 min-h-[30rem] rounded-lg`;
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
              helperText="More information about this post. Length: 0 - 50 characters."
            />
          </Box>
        </FieldWrapper>
        <FieldWrapper>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DescriptionRoundedIcon
              sx={{ color: "action.active", mr: 1, mb: 4.3 }}
            />
            <EventTagPicker />
          </Box>
          <label className="text-xs text-gray-500 pl-8">
            Tags for this event. 1 tag at least.
          </label>
        </FieldWrapper>

        <FieldWrapper>
          <div>
            <DatePicker title="Start Time" />
          </div>
        </FieldWrapper>
        <FieldWrapper>
          <div className=" ">
            <DatePicker title="End Time" />
          </div>
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
          <div className=" w-full">
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
          <Button fullWidth variant="contained"  endIcon={<FileUploadOutlinedIcon />}>Submit</Button>
        </FieldWrapper>
      </Form>
    </Container>
  );
};
export default NewEvent;
