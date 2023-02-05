import React from "react";
import tw from "tailwind-styled-components";
//Styled Components
const Container = tw.div`h-16 m-auto`;
const LinkBtn=tw.button`w-[10rem] hover:text-red-500`
//Module
const SelectorBar = () => {
  return (
    <Container className="bg-black text-white align-middle font-playfair text-xl border-y-[1px] border-gray-800">
      <div className="flex justify-center h-full">
        <LinkBtn>Hot</LinkBtn>
        <LinkBtn>Happening</LinkBtn>
        <LinkBtn>InComing</LinkBtn>
        <LinkBtn>Alert</LinkBtn>
      </div>
    </Container>
  );
};
export default SelectorBar;
