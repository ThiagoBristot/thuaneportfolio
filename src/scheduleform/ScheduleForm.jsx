import React, { useState } from "react";
import styled from 'styled-components';
import thuaneSchedule from '../assets/thuaneSchedule.jpg'

const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background-color: #1979c7;
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
`;

const ScheduleForm = ({ formularioRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    address: "",
    turno: "",
  });
  const [showAddress, setShowAddress] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = (location) => {
    setFormData({ ...formData, location });
    setShowAddress(location === "home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Agendamento enviado com sucesso!");
  };

  const handleWhatsAppRedirect = () => {
    const { name, turno, location, address } = formData;

    if (!name || !turno) {
      alert("Por favor, preencha seu nome e selecione o turno.");
      return;
    }

    const message = `Olá! Meu nome é ${name} e gostaria de agendar um horário no turno da ${turno}. Na localização (${location}) ${address}`;
    const phoneNumber = "5491502490";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="schedule-form" ref={formularioRef}>
          <div className="schedule-div">
          <div className="schedule-form-img">
            <img src={thuaneSchedule} alt="" />
          </div>
          
          <div className="schedule-form-div">
          <h1>Faça parte você também!</h1>
          <h2>Agende sua Aula</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />

            <div className="checkbox-group" style={{ display: "flex" }}>
              <label>
                <input type="radio" name="location" onChange={() => handleLocationChange("studio")} checked={formData.location === "studio"} />
                No estúdio
              </label>
              <label>
                <input type="radio" name="location" onChange={() => handleLocationChange("home")} checked={formData.location === "home"} />
                Na sua casa
              </label>
            </div>

            {showAddress && (
              <input type="text" name="address" placeholder="Endereço" value={formData.address} onChange={handleChange} required />
            )}

            {formData.location === "studio" && (
              <div className="locations" style={{ display: "flex", gap: "15px" }}>
                <button type="button" onClick={() => setFormData({ ...formData, address: "Local 1" })}>Local 1</button>
                <button type="button" onClick={() => setFormData({ ...formData, address: "Local 2" })}>Local 2</button>
              </div>
            )}

            <div className="time-options">
              <label>Preferência de Turno:</label>
              <select name="turno" value={formData.turno} onChange={handleChange} required>
                <option value="">Selecione o turno</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
              </select>
            </div>

            <SubmitButton type="button" onClick={handleWhatsAppRedirect}>Agendar via WhatsApp</SubmitButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ScheduleForm;
