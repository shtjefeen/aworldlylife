import React from "react";
import styled from "styled-components";
import Hero from "@components/BecomePartner/Hero";
import WhatWeOffer from "@components/BecomePartner/WhatWeOffer";
import WhatWeAreLookingFor from "@components/BecomePartner/WhatWeAreLookingFor";
import FeelLike from "@components/BecomePartner/FeelLike";
import HowItWorks from "@components/BecomePartner/HowItWorks";
import Contact from "@components/Contact";
import { NextSeo } from 'next-seo';
const Wrapper = styled.div``;
export default function BecomePartner() {
  return (
    <Wrapper>
      <NextSeo
        title="Become a partner"
        description="Become a Worldly partner, Tap into the emerging potential of remote workers and long-stay customers."
      />
      <Hero />
      <WhatWeOffer />
      <WhatWeAreLookingFor />
      <FeelLike />
      <HowItWorks />
      <Contact />
    </Wrapper>
  );
}
