import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TextDivider from "@design/TextDivider";
const Wrapper = styled.div`
  margin: 144px auto;
  h1 {
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
    color: #000000;

    span {
      color: #993704;
    }
  }
  p {
    font-size: 18px;
    font-family: Work Sans;
    margin: 0;
    margin-bottom: 30px;
  }

  .MuiGrid-item {
    display: flex;
    align-items: center;
  }
  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
export default function Community() {
  return (
    <Wrapper id="community">
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <LazyLoadImage
              src={"/images/community.png"}
              effect="blur"
              wrapperClassName="image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <TextDivider />
              <h1>The community</h1>

              <p>
                Worldly is a community of conscious travelers that appreciate
                the opportunities of the 21st century. We love to discover new
                places and get fresh inputs from exchanges with new, inspiring
                and ambitious people. The community is key to prosper, grow and
                jointly tackle the myriad challenges the world is facing. We
                give priority to cultural fit, personality and passion over
                skills, experience and degrees.
              </p>

              <p>
                Worldly connects you with like-minded individuals at our partner
                locations and at inspiring events throughout the year.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
