import React, { useState } from "react";
//import "./scheduleform.css";

const ScheduleForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: "",
        address: "",
        date: "",
        time: "",
    });
    const [showAddress, setShowAddress] = useState(false);
    const [availableTimes, setAvailableTimes] = useState(["10:00", "14:00", "16:00"]); // Exemplos de horários

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLocationChange = (location) => {
        setFormData({ ...formData, location });
        setShowAddress(location === "home");
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setFormData({ ...formData, date: selectedDate });
        // Aqui você pode adicionar lógica para buscar horários disponíveis com base na data
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio
        alert("Agendamento enviado com sucesso!");
    };

    return (
        <section className="schedule-form">
            <h2>Agende sua Aula</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
                
                <div className="checkbox-group" style={{display: "flex"}}>
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
                    <div className="locations" style={{display: "flex", gap: "15px"}}>
                        <button type="button" onClick={() => setFormData({ ...formData, address: "Local 1" })}>Local 1</button>
                        <button type="button" onClick={() => setFormData({ ...formData, address: "Local 2" })}>Local 2</button>
                    </div>
                )}

                <input type="date" name="date" value={formData.date} onChange={handleDateChange} required />

                {formData.date && (
                    <div className="time-options">
                        <label>Horários Disponíveis:</label>
                        <select name="time" value={formData.time} onChange={handleChange} required>
                            <option value="">Selecione um horário</option>
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                )}

                <button type="submit">Agendar</button>
            </form>
        </section>
    );
};

export default ScheduleForm;
