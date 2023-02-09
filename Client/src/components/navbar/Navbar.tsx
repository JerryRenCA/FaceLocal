import React, { useContext } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { authContext } from "../../contexts/authContext/AuthProvider";
import SearchBox from "../searchbox/SearchBox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Avatar, Button, ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ScreenLocPicker from "../shared/fullScreenLocationPicker/ScreenLocPicker";
//Style Components
const Container = tw.div`flex justify-center border-b-[1px] border-gray-800 `;
const Wrapper = tw.div`flex gap-4 justify-between w-[60rem] my-4  items-center`;
const LogoTag = tw.div`text-3xl font-satisfy font-extrabold text-blue-900 `;
//Module
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoTag style={{ textShadow: "#069 1px 0 10px" }}>
          <Link to="/">StoreForm</Link>
        </LogoTag>
        <SearchBox />
        <ScreenLocPicker />
        <LinkBox />
      </Wrapper>
    </Container>
  );
};
export default Navbar;

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
              <Link
                to="register"
                className="  hover:text-purple-500 font-bold"
              >
                Register
              </Link>
            </Button>
            <Button>
              <Link
                to="login"
                className="  hover:text-purple-500 font-bold"
              >
                Sign In
              </Link>
            </Button>
          </ButtonGroup>
        </>
      )}
      {authCxt.state.isLogin && (
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>
            <Link to="/user/profile" className="  hover:text-purple-500 ">
              <Avatar sx={{ bgcolor: deepPurple[500],width: 28, height: 28 }}>{authCxt.state.user.name[0]}</Avatar>
            </Link>
          </Button>
          <Button>
            <Link to="/" className="  hover:text-purple-500 ">
              <Tooltip title='Home' arrow>
              <HomeOutlinedIcon />
              </Tooltip> 
            </Link>
          </Button>
          <Button>
            <Link to="/event/post" className="  hover:text-purple-500 ">
              <Tooltip title='Post' arrow>
              <FileUploadOutlinedIcon />
              </Tooltip>
            </Link>
          </Button>
          <Button onClick={handleLogout} className="  hover:text-purple-500 ">
          <Tooltip title='Exit' arrow>
            <LogoutOutlinedIcon />
            </Tooltip>
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};
