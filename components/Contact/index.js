import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TextDivider from "@design/TextDivider";
import ArrowLink from "@design/ArrowLink";
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
            <LazyLoadImage
              src={"/images/contact.png"}
              effect="blur"
              wrapperClassName="image"
            />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
