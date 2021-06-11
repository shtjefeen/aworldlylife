import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TextDivider from "@design/TextDivider";
const Wrapper = styled.div`
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
export default function OurPromise() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <LazyLoadImage
              src={"/images/we_at_worldly.png"}
              effect="blur"
              wrapperClassName="image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <TextDivider />
              <h1>OUR PROMISE</h1>

              <div>
                <ul>
                  <li>
                    Access to the best long-stay deals at unique locations
                    around the world
                  </li>
                  <li>Inspiring surroundings and activities</li>
                  <li>Pet friendly! 😉</li>
                </ul>

                <ul>
                  <li>
                    The perfect remote working infrastructure with all amenities
                    you need
                    <ul>
                      <li>Fast and stable Wifi connection</li>
                      <li>Comfortable workspace in- and outside the room</li>
                      <li>
                        Access to local IT services including IT infrastructure
                        (screen etc.)
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul>
                  <li>Access to like-minded people: the Worldly community.</li>
                  <li>Safe & easy -from booking to payment</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
