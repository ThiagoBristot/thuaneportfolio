// HeroSection.js
import React from 'react';
import styled from 'styled-components';
import thuaneHero from './assets/thuaneHERO.png';


const HeroContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(135deg, #ffffff, #bbdefb);
  width: 100%;
  padding: 4rem;
  height: 105vh;
  gap: 30px;
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #2a3d34;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #4a4a4a;
  }

  button {
    padding: 12px 24px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    background-color: #047dc8;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #203b7a;
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  border-radius: 50%;
  background: radial-gradient(circle, #bbdefb 40%, #e3f2fd 70%, #b3e5fc);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  img {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o Equilíbrio Interior</h1>
        <p>Descubra a serenidade e harmonia que o yoga pode trazer para sua mente e corpo. Junte-se a nós para uma aula transformadora, onde cada respiração é um passo em direção ao bem-estar.</p>
      </HeroContent>
      <HeroImage>
        <img src={thuaneHero} alt="thuanehero" />
      </HeroImage>
    </HeroContainer>
  );
};

export default HeroSection;