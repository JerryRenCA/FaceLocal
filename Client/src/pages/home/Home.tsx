import React from "react";
import tw from "tailwind-styled-components";
import Banner from "../../components/banner/Banner";
import LeftSidePanel from "../../components/leftSidePanel/LeftSidePanel";
import MainPanel from "../../components/mainPanel/MainPanel";
import Navbar from "../../components/navbar/Navbar";
import Notification from "../../components/notification/Notification";
import RightSidePanel from "../../components/rightSidePanel/RightSidePanel";
import SelectorBar from "../../components/selectorBar/SelectorBar";

//Styled Components
const Container = tw.div``;
const MainWrapper = tw.div`grid grid-cols-4 w-4/5`;
//Module
const Home = () => {
  return (
    <Container>
      <Notification />
      <Navbar />
      <Banner/>
      <SelectorBar/>
      <div className="flex justify-center">
        <MainWrapper>
          <LeftSidePanel />
          <div className=" col-span-2">
            <MainPanel />
          </div>
          <RightSidePanel />
        </MainWrapper>
      </div>
    </Container>
  );
};
export default Home;
