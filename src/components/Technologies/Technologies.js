import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies used in mechanical, electrical, and software design.
    </SectionText>
    <List>
      <ListItem>
        
        <ListContainer>
          <ListTitle>Software</ListTitle>
          <ListParagraph>
            Matlab, React.js, MySQL, Linux, and Firebase 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      
        <ListContainer>
          <ListTitle>Mechanical</ListTitle>
          <ListParagraph>
            Autodesk Inventor, 3D printing, and Lean Six Sigma 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
     
        <ListContainer>
          <ListTitle>Electrical</ListTitle>
          <ListParagraph>
            Digital and analog circuits to create various filters and implement sequential logic 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
