import React from "react";
import tw from "tailwind-styled-components";
//Styled Components
const Container = tw.div`h-16 m-auto`;
const LinkBtn=tw.button`w-[10rem] hover:text-red-500`
//Module
const SelectorBar = () => {
  return (
    <Container className=" align-middle font-satisfy text-2xl font-bold border-y-[1px] border-gray-800 ">
      <div className="flex justify-center h-full">
        <LinkBtn>hot</LinkBtn>
        <LinkBtn>happening</LinkBtn>
        <LinkBtn>incoming</LinkBtn>
        <LinkBtn>alert</LinkBtn>
      </div>
    </Container>
  );
};
export default SelectorBar;
