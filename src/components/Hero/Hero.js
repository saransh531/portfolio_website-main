import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Saransh Bedi <br />
          
        </SectionTitle>
        <SectionText>
        I am an aspiring Mechatronics and Biomedical Engineer with a passion for creating health solutions using mechanical, electrical, and software design principles. 
        </SectionText>
        <Button onClick= {() => window.location = 'https://www.linkedin.com/in/saransh-bedi/' }>LinkedIn</Button> 
      </LeftSection>
    </Section>
  </>
);

export default Hero;