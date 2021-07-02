import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowLink from "@design/ArrowLink";
const Wrapper = styled.div`
  background: #f4f7f9;
  padding: 120px 0;

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
    text-align: center;
  }
`;

const CardWrapper = styled.div`
  background-color: #fff;
  padding: 30px;
  height: 100%;

  .icon {
    margin-bottom: 12px;
  }

  h6 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #363636;
    margin: 0;
    margin-bottom: 26px;
  }
  p {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #363636;
  }
`;
function Card({ icon, title, description }) {
  return (
    <CardWrapper>
      <div className="icon">{icon}</div>
      <h6>{title}</h6>
      <p>{description}</p>
    </CardWrapper>
  );
}

export default function HowItWorks() {
  return (
    <Wrapper>
      <Container>
        <h2>how it works?</h2>

        <Grid container spacing={2} style={{ marginTop: 60 }}>
          <Grid item xs={12} md={3}>
            <Card
              icon={
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
                    d="M14.82 4H19c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-.14 0-.27-.01-.4-.03a2.008 2.008 0 01-1.44-1.19c-.1-.24-.16-.51-.16-.78V6c0-.28.06-.54.16-.77A2.008 2.008 0 014.6 4.04c.13-.03.26-.04.4-.04h4.18C9.6 2.84 10.7 2 12 2c1.3 0 2.4.84 2.82 2zM7 10V8h10v2H7zm10 4v-2H7v2h10zm-3 2H7v2h7v-2zM12 3.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM5 20h14V6H5v14z"
                    fill="#993700"
                  />
                </svg>
              }
              title="Fill the form"
              description="Complete the form and tell us why you are interested"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              icon={
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
                    d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2zm2 14h14V4H4v14l2-2z"
                    fill="#993700"
                  />
                </svg>
              }
              title="Let's chat"
              description="We get in touch with you and discuss the details. If both sides feel comfortable, we start our collaboration."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              icon={
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
                    d="M2 12.675c0-5.52 4.48-10 10-10s10 4.48 10 10c0 3.7-2.01 6.92-5 8.65l-1-1.73c2.39-1.39 4-3.96 4-6.92 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.96 1.61 5.53 3.99 6.92l-1 1.73C4.01 19.595 2 16.375 2 12.675zm16 0c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zm-6-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                    fill="#993700"
                  />
                </svg>
              }
              title="Get online"
              description="Welcome! We onboard your hotel on your platform and off we go!"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              icon={
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.39 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                    fill="#993700"
                  />
                </svg>
              }
              title="Earn money"
              description="As soon as you are onboarded, we share your deal among our community. Over to you."
            />
          </Grid>
        </Grid>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 60 }}
        >
          <ArrowLink
            target="_blank"
            href="https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c"
          >
            Become a partner
          </ArrowLink>
        </div>
      </Container>
    </Wrapper>
  );
}
