import TextDivider from "@design/TextDivider";
import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
const Wrapper = styled.div`
  padding: 140px 0;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    /* or 167% */

    text-transform: uppercase;
  }
  p {
    max-width: 800px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
  }
`;
export default function Intro() {
  return (
    <Wrapper>
      <Container>
        <TextDivider />
        <h2>
          Work and holiday – two words <br /> that used to be contradictory
        </h2>
        <p>
          Work used to be something that limited you from doing the things you
          wanted (travel, experience, socialise), rather than something that
          enabled you to do those things. Working in a different environment, a
          foreign culture, among inspiring people can be a tremendous creativity
          and productivity booster. We all have spaces where we feel most alive
          - whether it's a certain city, a farm or an island. All necessities
          are available on demand.
        </p>
        <p>
          We curate the most attractive long-stay deals for you with hotels
          around the world.
        </p>
      </Container>
    </Wrapper>
  );
}
