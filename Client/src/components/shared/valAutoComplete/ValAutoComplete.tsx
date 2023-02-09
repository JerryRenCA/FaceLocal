import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import tw from "tailwind-styled-components";
//types
export type T_DataOptionType = {
  title: string;
};

const Container = tw.div``;

const ValAutoComplete = <T extends T_DataOptionType>({
  dataArr,
  title
}: {
  dataArr: T[],
  title:string
}) => {
  const defaultProps = {
    options: dataArr,
    getOptionLabel: (option: T) => option.title,
  };
  return (
    <Container>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label={title}
            variant="standard"
          />
        )}
      />
    </Container>
  );
};
export default ValAutoComplete;
