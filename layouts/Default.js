import React from "react";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
const Content = styled.div`
  padding-top: 88px;
  transition: 0.05s ease-in-out;
  width: 100%;
`;

export default function Default({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
