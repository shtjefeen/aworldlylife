import React from "react";
import styled from "styled-components";
import Link from "./Link";
const Wrapper = styled(Link)`
  position: relative;
  > div {
    display: flex;
    align-items: center;
  }
  .text {
    color: #993704;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      bottom: -10px;
      background-color: #993704;
      width: 100%;
      height: 3px;
    }
  }
  .icon {
    margin-left: 15px;
    transition: 0.3s ease-in-out;
    margin-top: 3px;
  }
  &:hover {
    text-decoration: none !important;

    .icon {
      transform: translateX(10px);
    }
  }
`;
export default function ArrowLink({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <div>
        <span className="text">{children}</span>
        <span className="icon">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path
              d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8-8-8z"
              fill="#993704"
            />
          </svg>
        </span>
      </div>
    </Wrapper>
  );
}
