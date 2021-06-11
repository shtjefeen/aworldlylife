import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@design/Link";
import styled from "styled-components";
import ArrowLink from "@design/ArrowLink";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Wrapper = styled.div`
  h1 {
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    color: #000000;
    margin: 0;

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
    min-height: 708px;
  }
  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <h1>
                we curate <span>unique</span> locations for you. To work, live
                and discover.
              </h1>
              <p>
                Sign up today and get exclusive access to the Worldly universe.
              </p>
              <ArrowLink href="/join">Join us</ArrowLink>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <LazyLoadImage
              alt="hero"
              src={"/images/hero.png"}
              effect="blur"
              wrapperClassName="image"
            />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
