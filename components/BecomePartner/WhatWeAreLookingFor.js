import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
const Wrapper = styled.div`
  position: relative;
  .MuiGrid-item {
    display: flex;
    align-items: center;
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #000000;
  }

  @media (max-width: 960px) {
    h2 {
      text-align: center;
      margin-bottom: 0;
    }
  }
`;

const Card = styled.div`
  background: #f9f6f4;
  padding: 54px;
  height: 100%;

  h4 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #363636;
  }
  ul {
    margin: 0;
    padding-left: 20px;

    li {
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #363636;
    }
  }
`;
export default function WhatWeAreLookingFor() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <h2>What we are looking for</h2>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <div className="icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 6v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10zM5 5h10c1.1 0 2 .9 2 2v16l-7-3-7 3V7c0-1.1.9-2 2-2z"
                    fill="#993700"
                  />
                </svg>
              </div>
              <h4>The must haves</h4>
              <ul>
                <li> Fast & stable Wifi</li>
                <li>Comfortable workspace inside the room </li>
                <li>An excellent customer service.</li>
                <li>Attractive long-stay rates (1+ months)</li>
                <li>Inspiring surroundings and activities</li>
              </ul>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <div className="icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 6v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10zM5 5h10c1.1 0 2 .9 2 2v16l-7-3-7 3V7c0-1.1.9-2 2-2z"
                    fill="#993700"
                  />
                </svg>
              </div>
              <h4>The bonuses</h4>
              <ul>
                <li> Pet friendly</li>
                <li>Optional in-room kitchen or shared kitchen</li>
                <li>F&B packages for long-term guests</li>
                <li>Open working space outside the hotel room</li>
                <li>
                  Access to additional IT hardware (screens, adapters, ...)
                </li>
              </ul>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
