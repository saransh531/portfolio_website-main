import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I've acquired a range of skills used in mechanical, electrical, and software design.
    </SectionText>
    <List>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Software</ListTitle>
          <ListParagraph>
            Python, C, Matlab, ARM Assembly, Java, React.js, MySQL, Linux, and Firebase 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      
        <ListContainer>
          <ListTitle>Mechanical</ListTitle>
          <ListParagraph>
            Autodesk Inventor, 3D printing, and Lean Six Sigma Fundamentals 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
     
        <ListContainer>
          <ListTitle>Electrical</ListTitle>
          <ListParagraph>
            Experience with digital and analog circuits to create various filters and implement sequential logic along with industry grade softwares like MultiSim 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
