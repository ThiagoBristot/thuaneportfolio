import React from 'react';
import styled from 'styled-components';
import thuaneAbout from '../assets/thuaneAbout.jpg'

const AboutMeContainer = styled.section`
  color: #2a3d34;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 8rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  text-align: left;
`;

const AboutMeLogo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  img {
  width: 80%;
  height: auto;
  border-radius: 15px;
  border: 1px solid white;
  }
`;

const AboutMeContent = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #4a4a4a;
    line-height: 1.6;
    max-width: 90%;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeContent>
        <h2>Sobre Mim</h2>
        <p>Sou uma professora de Pilates e Yoga com experiência em práticas de relaxamento e fortalecimento corporal...</p>
      </AboutMeContent>
      <AboutMeLogo>
        <img src={thuaneAbout} alt="" />
      </AboutMeLogo>
    </AboutMeContainer>
  );
};

export default AboutMe;