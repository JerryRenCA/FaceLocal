import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.div``;

const LeftSidePanel = () => {
  const list = ["Products", "Event","Products", "Event"];
  return (
    <Container>
      {list.map((it) => (
        <AListItem title={it} />
      ))}
    </Container>
  );
};
export default LeftSidePanel;

const AListItem = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};
