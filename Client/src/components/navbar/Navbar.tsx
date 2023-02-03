import React from "react";
import tw from "tailwind-styled-components";
import LocationBox from "../locationbox/LocationBox";
import SearchBox from "../searchbox/SearchBox";


//Style Components
const Container = tw.div`flex justify-center border-b-2`;
const Wrapper = tw.div`flex gap-4 justify-between w-[60rem] my-4  items-center`;
const LogoTag = tw.div`text-3xl font-satisfy font-bold text-purple-800`;
//Module
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoTag>StoreForm</LogoTag>
        <SearchBox />
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
      <button>Register</button>
      <span>/</span>
      <button>Sign In</button>
      <span>/</span>
      <button>Profile</button>
    </div>
  );
};
