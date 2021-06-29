import React from "react";
import styled from "styled-components";
import Hero from "@components/BecomePartner/Hero";
import WhatWeOffer from "@components/BecomePartner/WhatWeOffer";
import WhatWeAreLookingFor from "@components/BecomePartner/WhatWeAreLookingFor";
import FeelLike from "@components/BecomePartner/FeelLike";
import HowItWorks from "@components/BecomePartner/HowItWorks";
import Contact from "@components/Contact";
const Wrapper = styled.div``;
export default function BecomePartner() {
  return (
    <Wrapper>
      <Hero />
      <WhatWeOffer />
      <WhatWeAreLookingFor />
      <FeelLike />
      <HowItWorks />
      <Contact />
    </Wrapper>
  );
}
