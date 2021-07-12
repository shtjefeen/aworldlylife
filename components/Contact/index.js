import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Image from "@components/Image";
import TextDivider from "@design/TextDivider";
import Link from "@material-ui/core/Link";
import Form from "./Form";

const Wrapper = styled.div`
  margin: 144px auto;
  h1 {
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 0;
    span {
      color: #993704;
    }
  }
  p {
    font-size: 16px;
    font-family: Work Sans;
    margin: 0;
    margin-bottom: 15px;
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
          <Grid item xs={12} md={4}>
            <div>
              <TextDivider />
              <h1>Contact</h1>
              <p>
                <Link href="mailto:tobias@aworldlylife.com">
                  tobias@aworldlylife.com
                </Link>
              </p>
              <Form />
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <Image src={"./images/contact.png"} alt="Contact us" />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
