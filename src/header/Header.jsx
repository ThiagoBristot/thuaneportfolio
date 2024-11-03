import React from "react";

const Header = ({ scrollToSection }) => {
  return (
    <section className="app-header">
      <div className="header-container">
        <div className="header-logo">
          <p>LOGO</p>   
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <a onClick={() => scrollToSection('home')}>Início</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('aboutMe')}>Sobre mim</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('classes')}>Sobre as aulas</a>
              </li>
              <li>
                <button onClick={() => scrollToSection('scheduleForm')} className="agendar-horario">Agendar horário</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
