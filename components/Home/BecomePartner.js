import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TextDivider from "@design/TextDivider";
import ArrowLink from "@design/ArrowLink";
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
export default function BecomePartner() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <div>
              <TextDivider />
              <h1>Become a partner</h1>
              <p>
                Are you interested in becoming part of the “Worldly” network? We
                are looking to partner with boutique hotels in unique locations
                that offer all amenities that a modern remote worker requires:
                fast Wifi, a stimulating working and living environment and an
                excellent customer service.
              </p>

              <p>
                The rooms will be made available for long term bookings (1+
                months).
              </p>

              <p>If you are interested in becoming a partner apply here:</p>
              <ArrowLink href="/">Become a partner</ArrowLink>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <LazyLoadImage
              src={"/images/partner.png"}
              effect="blur"
              wrapperClassName="image"
            />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
