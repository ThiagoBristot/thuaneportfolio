import React, { useRef } from 'react';
import './App.css';
import Header from "./header/Header";
import HeroSection from './HeroSection';
import BenefitsSection from './BenefitsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutMe from './aboutme/Aboutme';
import Classes from './classes/Classes';
import ScheduleForm from './scheduleform/ScheduleForm';
import CourseCard from './CourseCard';
import PricingSection from './PricingSection';
import Footer from './Footer';

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const classesRef = useRef(null);
  const formularioRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'aboutMe' && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'classes' && classesRef.current) {
      classesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'scheduleForm' && formularioRef.current) {
      formularioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <section ref={homeRef}><HeroSection /></section>
      <BenefitsSection />
      <section ref={aboutMeRef}><AboutMe /></section>
      <section ref={classesRef}><Classes /></section>
      <section ref={formularioRef}><ScheduleForm /></section>
      <CourseCard/>
      <PricingSection/>
    </div>
  );
}

export default App;