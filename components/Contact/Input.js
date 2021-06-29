import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 15px;
  position: relative;
  label,
  input,
  span {
    display: block;
  }

  label {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;
    color: #363636;
  }
  input {
    width: 100%;
    background: #fafafa;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding: 8px;
    height: 40px;

    &:focus {
      outline: none;
    }
  }

  span {
    font-size: 12px;
    color: red;
    position: absolute;
    left: 0;
    bottom: -16px;
  }
`;
export default function Input(props) {
  return (
    <Wrapper>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type ? props.type : "text"}
        name={props.name}
        {...props}
      />
      <span>{props.error}</span>
    </Wrapper>
  );
}
