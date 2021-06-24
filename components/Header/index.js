import React from "react";
import styled from "styled-components";
import Logo from "@components/design/Logo";
import Link from "@design/Link";
import Mobile from "./Mobile";
import Container from "@material-ui/core/Container";
import Router from "next/router";
const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 88px;
  background-color: #fff;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
  z-index: 300;
  padding: 0 30px;

  > div {
    display: flex;
    height: 88px;
  }

  @media (max-width: 960px) {
    padding-left: 15px;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 60px;
  justify-content: flex-end;

  a {
    font-family: "Work Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #000;
    margin-left: 30px;
    cursor: pointer;

    &:hover,
    &.active {
      background-color: rgba(255, 255, 255, 0.4);
      text-decoration: none;
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

function Index() {
  const scrollToTargetAdjusted = (element) => {
    Router.push(`/#${element}`);
    var element = document.getElementById(element);
    if (element) {
      var headerOffset = 85;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Header>
      <Container>
        <Logo style={{ width: 200, fill: "#000" }} link />
        <Navigation>
          <a onClick={(e) => scrollToTargetAdjusted("concept")}>The concept</a>
          <a onClick={(e) => scrollToTargetAdjusted("community")}>
            The community
          </a>
          <a onClick={(e) => scrollToTargetAdjusted("about")}>About us</a>
          <Link href="/locations">Locations</Link>
          <Link href="/become-partner">Become a partner</Link>
        </Navigation>
      </Container>
      <Mobile />
    </Header>
  );
}

export default Index;
