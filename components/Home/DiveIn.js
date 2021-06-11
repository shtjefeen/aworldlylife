import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-image: url("./images/dive_in.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    max-width: 700px;
    padding: 30px;
    background-color: #fff;

    font-weight: 300;
    font-size: 40px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;

    span {
      color: #993700;
    }
  }
`;
export default function DiveIn() {
  return (
    <Wrapper>
      <div className="card">
        DIVE IN, LET GO AND START a <span>worldly</span> life.
      </div>
    </Wrapper>
  );
}
