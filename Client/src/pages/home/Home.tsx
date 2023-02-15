import tw from "tailwind-styled-components";
import Banner from "../../components/banner/Banner";
import LeftSidePanel from "../../components/leftSidePanel/LeftSidePanel";
import MainPanel from "../../components/mainPanel/MainPanel";
import RightSidePanel from "../../components/rightSidePanel/RightSidePanel";
import SelectorBar from "../../components/selectorBar/SelectorBar";

//Styled Components
const Container = tw.div``;
const MainWrapper = tw.div`grid grid-cols-10 w-4/5`;
//Module
const Home = () => {
  return (
    <Container>
      <Banner />
      <SelectorBar />
      <div className="flex justify-center">
        <MainWrapper>
          <LeftSidePanel />
          <div className=" col-span-8">
            <MainPanel />
          </div>
          <RightSidePanel />
        </MainWrapper>
      </div>
    </Container>
  );
};
export default Home;
