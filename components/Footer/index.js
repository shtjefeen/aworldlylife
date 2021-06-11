import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Logo from "@design/Logo";
const Wrapper = styled.footer`
  border-top: 1px solid ${(props) => props.theme.palette.divider};
  margin-top: 100px;
  padding: 60px 0;
`;
export default function index() {
  return (
    <Container>
      <Wrapper>
        <Logo style={{ width: 200 }} />
      </Wrapper>
    </Container>
  );
}
