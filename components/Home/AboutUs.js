import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Image from "@components/Image";
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

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
export default function AboutUs() {
  return (
    <Wrapper id="about">
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Image src={"./images/about_us.png"} alt="About us" />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <TextDivider />
              <h1>About Us</h1>
              <p>
                We are a diverse team of conscious travelers that discovered the
                need for “Worldly” when we were looking for someone who is
                curating the most fascinating locations around the world, suited
                for remote work that gives us access to a unique community at
                the same time. We love to experiment around new lifestyles; on
                our own, as a couple or with our young family.
              </p>
              <p>
                Worldly’s business is built by entrepreneurial individuals from
                tech, hospitality and travel. The guest will always come first
                and for them we hustle. By designing a single community where
                all members can each contribute to the success of Worldly, we
                engage each and every individual. Together we experience a
                journey towards our mission of changing the way people feel
                about work, life and travel.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
