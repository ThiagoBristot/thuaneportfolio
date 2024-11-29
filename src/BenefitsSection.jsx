// BenefitsSection.js
import React from 'react';
import styled from 'styled-components';

const BenefitsContainer = styled.section`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 4rem;
  background: linear-gradient(90deg, #ffffff, #bbdefb);
  width: 100%;
`;

const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  height: 220px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 25px;
  padding: 2rem;
  max-width: 20vw;
    
  h3 {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #2a3d34;
  }

  p {
    font-size: 1rem;
    color: #4a4a4a;
  }
`;

const BenefitsSection = () => {
  return (
    <BenefitsContainer>
      <BenefitItem>
        <h3>Bem-Estar Completo</h3>
        <p>Conecte sua mente e corpo em harmonia, promovendo saúde física e mental.</p>
      </BenefitItem>
      <BenefitItem>
        <h3>Mais Flexibilidade</h3>
        <p>Alongue-se e aumente sua mobilidade com posturas suaves e eficazes.</p>
      </BenefitItem>
      <BenefitItem>
        <h3>Redução do Estresse</h3>
        <p>Respire profundamente e deixe o peso do dia a dia para trás, encontrando paz interior.</p>
      </BenefitItem>
    </BenefitsContainer>
  );
};

export default BenefitsSection;