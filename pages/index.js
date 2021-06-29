import React from "react";
import Concept from "@components/Home/Concept";
import DiveIn from "@components/Home/DiveIn";
import Hero from "@components/Home/Hero";
import Intro from "@components/Home/Intro";
import TwoImages from "@components/Home/TwoImages";
import OurPromise from "@components/Home/OurPromise";
import Community from "@components/Home/Community";
import AboutUs from "@components/Home/AboutUs";
import BecomeMember from "@components/Home/BecomeMember";
import Contact from "@components/Contact";
export default function index() {
  return (
    <>
      <Hero />
      <TwoImages />
      <Intro />
      <DiveIn />
      <Concept />

      <OurPromise />
      <Community />
      <AboutUs />
      <BecomeMember />
      <Contact />
    </>
  );
}
