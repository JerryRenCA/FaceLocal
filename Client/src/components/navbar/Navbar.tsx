import React, { useContext } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { authContext } from "../../contexts/authContext/AuthProvider";
import SearchBox from "../searchbox/SearchBox";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
  Button,
  ButtonGroup,
  Tooltip,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ScreenLocPicker from "../shared/screenLocationPicker/ScreenLocPicker";
import PopupProfileMenu from "./components/PopupProfileMenu";
//Style Components
const Container = tw.div`flex justify-center border-b-[1px] border-gray-800 `;
const Wrapper = tw.div`flex gap-4 justify-between  my-4  items-center`;
const LogoTag = tw.div`text-3xl font-satisfy font-extrabold text-blue-900 `;
//Module
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoTag style={{ textShadow: "#069 1px 0 10px" }}>
          <Link to="/">StoreForm - in CI/CD ing</Link>
        </LogoTag>
        <SearchBox />
        <ScreenLocPicker />
        <LinkBox />
      </Wrapper>
    </Container>
  );
};
export default Navbar;

//component for some link buttons, register,login,logout,
const LinkBox = () => {
  const authCxt = useContext(authContext);
  const handleLogout = () => {
    authCxt.logout();
  };
  return (
    <div>
      {!authCxt.state.isLogin && (
        <>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>
              <Link to="register" className="  hover:text-purple-500 font-bold">
                Register
              </Link>
            </Button>
            <Button>
              <Link to="login" className="  hover:text-purple-500 font-bold">
                Sign In
              </Link>
            </Button>
          </ButtonGroup>
        </>
      )}
      {authCxt.state.isLogin && (
        <ButtonGroup variant="text" aria-label="text button group">
          <PopupProfileMenu
            profileIcon={authCxt.state.user.userCollection.profileIcon}
            name={authCxt.state.user.userCollection.name}
          />
          <Button>
            <Link to="/" className="  hover:text-purple-500 ">
              <Tooltip title="Home" arrow>
                <HomeOutlinedIcon />
              </Tooltip>
            </Link>
          </Button>
          <Button>
            <Link to="/event/post" className="  hover:text-purple-500 ">
              <Tooltip title="Post" arrow>
                <FileUploadOutlinedIcon />
              </Tooltip>
            </Link>
          </Button>
          <Button onClick={handleLogout} className="  hover:text-purple-500 ">
            <Tooltip title="Logout" arrow>
              <LogoutOutlinedIcon />
            </Tooltip>
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};
