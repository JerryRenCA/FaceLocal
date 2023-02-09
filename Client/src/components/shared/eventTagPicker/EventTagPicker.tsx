
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function EventTagPicker() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags"
      options={filteredTags}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8}}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Description tags" placeholder=""/>
      )}
    />
   
  );
}

const filteredTags = [
  { title: 'tag1', year: 1994 },
  { title: 'tag2', year: 1972 },
  { title: 'tag3', year: 1974 },
  { title: 'aTag1', year: 2008 },
  { title: 'aTag2', year: 2008 },
  { title: 'aTag3', year: 2008 },
  
];