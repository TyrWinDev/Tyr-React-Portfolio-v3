import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id erat
        sed neque pretium posuere. Phasellus consequat ante bibendum, molestie
        risus vitae, interdum metus.
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.com")}>
        Hire Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
