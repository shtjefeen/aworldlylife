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
    text-transform: uppercase;
  }
  p {
    max-width: 900px;
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
      <Container style={{ maxWidth: 900 }}>
        <TextDivider />
        <h2>
          Work and holiday – two words <br /> that used to be contradictory
        </h2>
        <p>
          Work used to be something that limited you from doing the things you
          wanted (travel, experience, socialise), rather than something that
          enabled you to do those things. But times have changed! Working in a different environment, a
          foreign culture, among inspiring people can be a tremendous creativity
          and productivity booster. We all have spaces where we feel most alive
          - whether it&apos;s a certain city, a farm or an island. All
          necessities are available on demand.
        </p>
        <p>
          We curate the most attractive long-stay deals for you with hotels and houses around the world. Luxury remote work for digital nomads!
        </p>
      </Container>
    </Wrapper>
  );
}
