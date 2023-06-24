import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Poonam Vijaywargiya
        </SectionTitle>
        <SectionText>
        My objective is to build Scalable, Performant and Accessible webapps. 
        Also, guide and mentor people. 
        I have 10+ years of experience in building front end web applications in wide 
        variety of domains starting from HRMS to Aviation to Networking.
        
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;