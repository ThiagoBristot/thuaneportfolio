import React, { useState, useRef } from "react";

// Defina a função scrollToForm fora do componente
function scrollToForm(formularioRef) {
    formularioRef.current.scrollIntoView({ behavior: 'smooth' });
}

const ScheduleForm = () => {
    const formularioRef = useRef(null);

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
        const phoneNumber = "54999416828";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="schedule-form">
            <h2>Agende sua Aula</h2>
            <form onSubmit={handleSubmit} ref={formularioRef} id="formulario">
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

                <button type="button" onClick={handleWhatsAppRedirect}>Agendar via WhatsApp</button>
            </form>
        </section>
    );
};

export default ScheduleForm;
export { scrollToForm };
