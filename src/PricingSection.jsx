// PricingSection.js
import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.section`
  padding: 4rem;
  text-align: center;
`;

const PricingPlans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const PricingPlan = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #2a3d34;
  }

  p {
    font-size: 1rem;
    color: #4a4a4a;
    margin-bottom: 2rem;
  }

  button {
    padding: 12px 24px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    background-color: #047dc8;
    color: #ffffff;
    font-size: 1rem;
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

const PricingSection = () => {
  return (
    <PricingContainer>
      <h2>Cursos online</h2>
      <p>Ensinamentos de pilates e fisioterapia.</p>
      <PricingPlans>
        <PricingPlan>
          <h3>Básico</h3>
          <p>R$ 40,00</p>
          <button>Comprar</button>
        </PricingPlan>
        <PricingPlan>
          <h3>Regular</h3>
          <p>R$ 50,00</p>
          <button>Comprar</button>
        </PricingPlan>
        <PricingPlan>
          <h3>Premium</h3>
          <p>R$ 70,00</p>
          <button>Comprar</button>
        </PricingPlan>
      </PricingPlans>
    </PricingContainer>
  );
};

export default PricingSection;