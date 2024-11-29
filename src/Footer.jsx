// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2a3d34;
  color: #ffffff;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 3vw;
`;

const FooterLinks = styled.div`
  display: flex;
  margin-right: 3vw;
  gap: 1.5rem;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #bbdefb;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>GYM</FooterLogo>
      <FooterLinks>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Classes</a>
        <a href="#">Contact</a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;