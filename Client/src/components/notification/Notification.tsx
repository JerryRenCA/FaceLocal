import React, { useState } from "react";
import tw from "tailwind-styled-components";

const Container = tw.div`bg-red-600 text-sm flex `;
//Style component
const InfoTag=tw.div`grow text-center`
const CloseBtn=tw.button` mr-4 hover:text-white`
//Module
const Notification = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      {visible && (
        <>
          <InfoTag>Notification infomation</InfoTag>
          <CloseBtn onClick={(e) => setVisible(false)}>X</CloseBtn>
        </>
      )}
    </Container>
  );
};
export default Notification;
