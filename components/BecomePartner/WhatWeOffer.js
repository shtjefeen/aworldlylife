import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Wrapper = styled.div`
  margin: 140px auto;

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

  .info--wrapper {
    max-width: 600px;
    padding: 60px;

    h2 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 40px;
      text-transform: uppercase;
      color: #363636;
    }

    ul {
      li {
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        color: #363636;
        margin-bottom: 30px;
      }
    }
  }
`;
export default function WhatWeOffer() {
  return (
    <Wrapper>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <LazyLoadImage
            src={"/images/partner/what-we-offer.png"}
            effect="blur"
            wrapperClassName="image"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="info--wrapper">
            <h2>What we offer</h2>

            <ul>
              <li>
                Access to a unique crowd of modern travellers that further
                elevate the hotel's brand
              </li>

              <li>
                Reduced operational costs: less housekeeping, less customer
                acquisition
              </li>

              <li>Increased benefits: guaranteed long-term revenue</li>

              <li>
                Increase of occupancy rate and flattening of occupancy curve
              </li>

              <li>Easy listing options for long-term stays</li>

              <li>Transparent commission base pricing -no hidden fees</li>

              <li>
                An open and hands-on approach to tie customized packages to
                create a win-win-win
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
