import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Filters from "@components/Locations/Filters";
import Posts from "@components/Locations/Posts";
import "react-magic-slider-dots/dist/magic-dots.css";
const Title = styled.div`
  margin: 48px 0;
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: #993700;
    margin: 0;
  }

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #363636;
    margin: 0;
  }
`;
const Wrapper = styled.div``;
export default function locations() {
  return (
    <Wrapper>
      <Container>
        <Title>
          <p>Locations</p>
          <h2>The Worldly spots</h2>
        </Title>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Filters />
          </Grid>
          <Grid item xs={12} md={9}>
            <Posts />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
