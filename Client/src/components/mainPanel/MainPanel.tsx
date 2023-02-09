import React from "react";
import tw from "tailwind-styled-components";
import RecipeReviewCard from "../shared/eventCard/EventCard";

const Container = tw.div`grid grid-cols-2 gap-4 my-8`;
const HappeningDiv = tw.div``;
const MainPanel = () => {
  return (
    <Container className="">
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </Container>
  );
};
export default MainPanel;
