import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import ArrowLink from "@design/ArrowLink";
import Image from "@components/Image";
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

  .under_title {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #363636;
  }

  .bottom {
    padding-right: 100px;
    margin-top: -400px;
    z-index: 10;
    position: relative;
  }

  .top {
    margin-top: -200px;
  }

  @media (max-width: 960px) {
    margin-top: 60px;

    .image {
      margin-top: 60px;
    }
    .top {
      margin-top: 0;
    }
    .bottom {
      padding-right: 0;
      margin-top: 60px;
    }

    .MuiGrid-item {
      min-height: auto;
    }
  }
`;

const Card = styled.div`
  padding: 56px 48px;
  border-radius: 0px;
  background-color: #f9f6f4;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    text-transform: uppercase;
    color: #363636;
    margin-top: 0;
  }
  p {
    color: #363636;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
  }
`;
export default function Hero() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="top">
              <h1>
                Become a <span>worldly</span> partner
              </h1>
              <p style={{ marginTop: 20 }}>
                Tap into the emerging potential of remote workers and long-stay
                customers.
              </p>
              <ArrowLink
                target="_blank"
                href="https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c"
              >
                Apply here
              </ArrowLink>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={"./images/partner/hero.png"}
              alt="Become a worldly partner"
            />
          </Grid>
        </Grid>
      </Container>

      <Container className="bottom">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <h2 className="under_title">
                Get access to a new customer group
              </h2>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <h2>
                Are you the owner of a hotel, looking for new revenue streams?
              </h2>

              <p>
                Become part of the “Worldly” network, list your unique hideaway
                for free and we help you acquiring a new customer group.
              </p>
              <p>
                We are looking to partner with boutique hotels in unique
                locations that offer all amenities that a modern remote worker
                requires.
              </p>
              <ArrowLink
                target="_blank"
                href="https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c"
              >
                Become a partner
              </ArrowLink>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
