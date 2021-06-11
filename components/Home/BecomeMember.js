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
export default function BecomeMember() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <LazyLoadImage
              src={"/images/member.png"}
              effect="blur"
              wrapperClassName="image"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <TextDivider />
              <h1>Become a member</h1>
              <p>
                Enjoy exclusive access to our offers - Join the waitlist today!
              </p>
              <ArrowLink href="/">Join Us</ArrowLink>

              <p style={{ marginTop: 60 }}>
                What happens next? <br />
                You sign up and get on the waitlist. As soon as it is your turn,
                we share the hidden spots with you. <br />
                You tell us where you want to go and we take care of the rest.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
