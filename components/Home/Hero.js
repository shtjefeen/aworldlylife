import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import ArrowLink from "@design/ArrowLink";
import Image from "@components/Image";
const Wrapper = styled.div`
  margin-top: 60px;
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
  }
  img {
    width: 100%;
  }
  @media (max-width: 960px) {
    .image {
      margin-top: 60px;
    }
  }
`;
export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={7}>
            <div>
              <h1>
                we curate <span>unique</span> locations for you. To work, live
                and discover.
              </h1>
              <p style={{ marginTop: 20 }}>
                Sign up today and get exclusive access to the Worldly universe.
              </p>
              <ArrowLink
                target="_blank"
                href="https://share.hsforms.com/1AmySx7KrRDyn2MbTgkdSAgboy0c"
              >
                Join us
              </ArrowLink>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image
              alt="To work, live and discover."
              src={"./images/hero.png"}
            />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
