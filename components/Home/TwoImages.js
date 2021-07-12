import React from "react";
import styled from "styled-components";
import Image from "@components/Image";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 144px;

  .image {
    width: 50%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    .image {
      width: 100%;
    }
  }
`;
export default function TwoImages() {
  return (
    <Wrapper>
      <Image src={"./images/image_one.png"} alt="" />
      <Image src={"./images/image_two.png"} alt="" />
    </Wrapper>
  );
}
