import TextDivider from "@design/TextDivider";
import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import ArrowLink from "@design/ArrowLink";
import * as fbq from '../../lib/fbq'
const Wrapper = styled.div`
  padding: 140px 0;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    /* or 167% */

    text-transform: uppercase;
  }
  p {
    max-width: 800px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;

    span {
      color: #993700;
    }
  }
`;
export default function Concept() {
  const handleSubscribe = () => {
    fbq.event('Subscribe', { page: 'Home', section: 'concept' })
  }
  return (
    <Wrapper id="concept">
      <Container style={{ maxWidth: 900 }}>
        <TextDivider />
        <h2>the concept</h2>
        <p>
          We carefully select and curate unique locations for you. We partner
          with exclusive hotels and apartments for long-term stays (1+ months).
          They give you access to an inspiring environment with equally
          stimulating surroundings where you can <span>work</span>,{" "}
          <span>live</span> and <span>discover</span>. As a Worldly member, you
          get access to those favorable long-term deals.
        </p>
        <p>
          Feel home everywhere with all the services and amenities you need to
          be productive, combined with a community to connect.
        </p>
        <ArrowLink
          target="_blank"
          onClick={handleSubscribe}
          href="https://share.hsforms.com/1AmySx7KrRDyn2MbTgkdSAgboy0c"
        >
          Join us
        </ArrowLink>
      </Container>
    </Wrapper>
  );
}
