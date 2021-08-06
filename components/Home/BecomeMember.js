import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Image from "@components/Image";
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

  /* .MuiGrid-item {
    display: flex;
    align-items: center;
  } */
  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  margin: 0 0.2rem;

  &:visited:{
    color: black;
  }
`

export default function BecomeMember() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <div>
              <TextDivider />
              <h1>Become a member</h1>
              <p>
                Register 
                <Link target="_blank"
                  href="https://share.hsforms.com/1AmySx7KrRDyn2MbTgkdSAgboy0c">
                  HERE
                </Link> 
                and become part of the Worldly community. As partof our beta testing, as a registered user, youcan then book your location of choice.
              </p>
              <p>
                Your favourite region or country is not listed? No worries, tell us which region you want to discover and we take care of the rest.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Image src={"./images/member.png"} alt="Become a member" />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
