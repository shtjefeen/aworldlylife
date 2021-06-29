import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import { MdMenu } from "react-icons/md";
import styled from "styled-components";
import Link from "@design/Link";
import Router from "next/router";
const IconWrapper = styled(IconButton)`
  position: absolute !important;
  top: 15px;
  right: 15px;
  display: none !important;
  @media (max-width: 960px) {
    display: block !important;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;

  a {
    font-family: "Work Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000;
    line-height: 70px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.palette.divider};
    padding: 0 30px;

    &:hover,
    &.active {
      background-color: rgba(0, 0, 0, 0.1);
      text-decoration: none;
    }
  }
`;

const Header = styled.div`
  height: 88px;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
`;
function Drawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <React.Fragment>
      <IconWrapper onClick={toggleDrawer}>
        <MdMenu style={{ width: 35, height: 35 }} />
      </IconWrapper>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div style={{ width: "100vw" }}>
          <Header>
            <IconButton onClick={toggleDrawer}>
              <MdMenu style={{ width: 35, height: 35 }} />
            </IconButton>
          </Header>

          <Navigation onClick={toggleDrawer}>
            <Link href="/">Home</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/become-partner">Become a partner</Link>
          </Navigation>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default Drawer;
