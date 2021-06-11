import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
`;
export default function TwoImages() {
  return (
    <Wrapper>
      <LazyLoadImage
        src={"/images/image_one.png"}
        effect="blur"
        wrapperClassName="image"
      />
      <LazyLoadImage
        src={"/images/image_two.png"}
        effect="blur"
        wrapperClassName="image"
      />
    </Wrapper>
  );
}
