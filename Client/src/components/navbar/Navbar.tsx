import React, { useContext } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { authContext } from "../../contexts/authContext/AuthProvider";
import LocationBox from "../locationbox/LocationBox";
import SearchBox from "../searchbox/SearchBox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
//Style Components
const Container = tw.div`flex justify-center border-b-[1px] border-gray-800 `;
const Wrapper = tw.div`flex gap-4 justify-between w-[60rem] my-4  items-center`;
const LogoTag = tw.div`text-3xl font-satisfy font-extrabold text-purple-900 `;
//Module
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoTag style={{ textShadow: "#FC0 1px 0 10px" }}>
          <Link to="/">StoreForm</Link>
        </LogoTag>
        <SearchBox />
        <LocationBox />
        <LinkBox />
      </Wrapper>
    </Container>
  );
};
export default Navbar;

const LinkBox = () => {
  const userCxt = useContext(authContext);

  const handleLogout = () => {
    userCxt.logout();
  };
  return (
    <div>
      {!userCxt.state.isLogin && (
        <>
          <Link
            to="register"
            className=" cursor-pointer hover:text-purple-500 px-2 font-bold"
          >
            Register
          </Link>
          <span>/</span>
          <Link
            to="login"
            className=" cursor-pointer hover:text-purple-500 px-2 font-bold"
          >
            Sign In
          </Link>
        </>
      )}
      {userCxt.state.isLogin && (
        <div>
          <button className="px-4 hover:text-purple-800 font-semibold" title="profile">
            {userCxt.state.user.name}
            <AccountBoxOutlinedIcon />
          </button>
          <Link
            to="/event/new"
            className="  h-6 w-6 text-center text-black rounded-md py-0 inline-block hover:text-purple-800"
            title="post"
          >
            <FileUploadOutlinedIcon/>
          </Link>

          <button
            onClick={handleLogout}
            title="logout"
            className=" hover:text-purple-800 px-4 font-bold"
          >
            <LogoutOutlinedIcon />
          </button>
        </div>
      )}
    </div>
  );
};
