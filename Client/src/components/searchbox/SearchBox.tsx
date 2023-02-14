import React from "react";
import tw from "tailwind-styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";

//Style Components
const Container = tw.div` border-2 grow rounded-md pl-1 flex overflow-hidden  bg-white text-black`;
const SearchBtn = tw.div` `;
//module
const SearchBox = () => {
  return (
    <Container>
      <SearchOutlinedIcon className="my-auto " />
      <input type="text" className="grow outline-none px-3" />
      <SearchBtn>
        <Button variant="contained">
          Search
        </Button>
      </SearchBtn>
    </Container>
  );
};
export default SearchBox;
