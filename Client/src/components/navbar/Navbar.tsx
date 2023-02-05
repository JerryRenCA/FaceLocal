import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import LocationBox from "../locationbox/LocationBox";
import SearchBox from "../searchbox/SearchBox";


//Style Components
const Container = tw.div`flex justify-center border-b-[1px] border-gray-800 bg-black text-white`;
const Wrapper = tw.div`flex gap-4 justify-between w-[60rem] my-4  items-center`;
const LogoTag = tw.div`text-3xl font-satisfy font-bold text-purple-500`;
//Module
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoTag>StoreForm</LogoTag>
        <SearchBox/>
        <LocationBox />
        <LinkBox />
      </Wrapper>
    </Container>
  );
};
export default Navbar;

const LinkBox = () => {
  return (
    <div>
      <Link to='Register' className=" cursor-pointer hover:text-purple-600">Register</Link>
      <span>/</span>
      <button>Sign In</button>
      <span>/</span>
      <button>Profile</button>
    </div>
  );
};
