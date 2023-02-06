import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div` min-h-[20rem] flex justify-center items-center bg-gray-500 text-white`;
const Wrapper = tw.div`grid grid-cols-4 w-[60rem] `;
const ColTag = tw.div``;
const ColTitle = tw.div` uppercase py-4 text-lg`;
const ColItem = tw.div`py-1`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ColTag>
        <ColTitle>StoreForm</ColTitle>
        <ColItem>About</ColItem>
        <ColItem>Join Us</ColItem>
        <ColItem>Membership</ColItem>
        <ColItem>Advertise</ColItem>
        </ColTag>
        <ColTag>
        <ColTitle>StoreForm</ColTitle>
        <ColItem>About</ColItem>
        <ColItem>Join Us</ColItem>
        <ColItem>Membership</ColItem>
        <ColItem>Advertise</ColItem>
        </ColTag>
        <ColTag>
        <ColTitle>StoreForm</ColTitle>
        <ColItem>About</ColItem>
        <ColItem>Join Us</ColItem>
        <ColItem>Membership</ColItem>
        <ColItem>Advertise</ColItem>
        </ColTag>
        <ColTag>
        <ColTitle>StoreForm</ColTitle>
        <ColItem>About</ColItem>
        <ColItem>Join Us</ColItem>
        <ColItem>Membership</ColItem>
        <ColItem>Advertise</ColItem>
        </ColTag>
      </Wrapper>
    </Container>
  );
};
export default Footer;
