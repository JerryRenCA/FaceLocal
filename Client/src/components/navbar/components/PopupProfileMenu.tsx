import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import tw from "tailwind-styled-components";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
// Types
// Styled Components
const Container = tw.div``;
// Functions
// Module
const PopupProfileMenu = ({
  profileIcon,
  name,
}: {
  profileIcon: string;
  name: string;
}) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="text" {...bindTrigger(popupState)}>
            <Avatar
              sx={{ bgcolor: deepPurple[500], width: 28, height: 28 }}
              src={profileIcon}
            >
              {name}
            </Avatar>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <Link to="/user/profile">Profile</Link>{" "}
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/user/password">Change Password</Link>{" "}
            </MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
export default PopupProfileMenu;
