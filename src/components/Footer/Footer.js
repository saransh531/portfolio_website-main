import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Social Media</LinkTitle>  
          <LinkItem href="https://www.linkedin.com/in/saransh-bedi/">LinkedIn</LinkItem>
        </LinkColumn>
        
        <LinkColumn>  
        <LinkTitle>Code for Projects</LinkTitle>  
        <LinkItem href="https://github.com/saransh531">Github</LinkItem>
        </LinkColumn>

        <LinkColumn>  
        <LinkTitle>YouTube</LinkTitle>  
        <LinkItem href="https://www.youtube.com/channel/UCV1O9NJrQGtjEofbb-D27Rg">Digital/Analog Circuits Playlist</LinkItem>
        </LinkColumn>

        <LinkColumn>
        <LinkTitle>Additional Projects</LinkTitle>  
        <LinkItem href="https://bedis9.wixsite.com/1p10portfolio">Academic Project Portfolio</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="saranshbedi@gmail.com">
          saranshbedi@gmail.com          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
