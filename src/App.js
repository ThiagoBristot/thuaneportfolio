import React, { useRef } from 'react';
import './App.css';
import Header from "./header/Header";
import Home from "./home/Home";
import AboutMe from './aboutme/Aboutme';
import Classes from './classes/Classes';
import ScheduleForm from './scheduleform/ScheduleForm';

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
      <section ref={homeRef}><Home /></section>
      <section ref={aboutMeRef}><AboutMe /></section>
      <section ref={classesRef}><Classes /></section>
      <section ref={formularioRef}><ScheduleForm /></section>
    </div>
  );
}

export default App;
