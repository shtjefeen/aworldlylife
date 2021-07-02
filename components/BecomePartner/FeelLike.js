import React from "react";
import styled from "styled-components";
import ArrowLink from "@design/ArrowLink";
import Container from "@material-ui/core/Container";
const Wrapper = styled.div`
  background-image: url("./images/partner/feel-like.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  margin-top: 140px;

  .card {
    max-width: 1024px;
    padding: 40px 100px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 50px;

    h2 {
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      text-transform: uppercase;
      color: #202020;
      margin-top: 0;

      span {
        color: #993700;
      }
    }
  }
`;
export default function FeelLike() {
  return (
    <Wrapper>
      <div className="card">
        <h2>
          Feel like you want to be part of <span>Worldly</span>?
        </h2>

        <ArrowLink
          color="#000"
          target="_blank"
          href="https://share.hsforms.com/18Y4I9TkbQl68vJnxj8Swqgboy0c"
        >
          Become a partner
        </ArrowLink>
      </div>
    </Wrapper>
  );
}
