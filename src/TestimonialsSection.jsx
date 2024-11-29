// TestimonialsSection.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 4rem;
  background-color: #f2f7f5;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const TestimonialItem = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TestimonialAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #7ac7b1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffff;
`;

const TestimonialContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #2a3d34;
  }

  p {
    font-size: 1rem;
    color: #4a4a4a;
  }
`;

const TestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <h2>Testimonials</h2>
      <TestimonialsGrid>
        <TestimonialItem>
          <TestimonialAvatar>JS</TestimonialAvatar>
          <TestimonialContent>
            <h3>Sylvia Schneider</h3>
            <p>The classes have been great so far and have helped me to build strength and flexibility. I'm really enjoying the personalized attention.</p>
          </TestimonialContent>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialAvatar>AL</TestimonialAvatar>
          <TestimonialContent>
            <h3>Sylvia Schneider</h3>
            <p>The classes have been great so far and have helped me to build strength and flexibility. I'm really enjoying the personalized attention.</p>
          </TestimonialContent>
        </TestimonialItem>
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection; 