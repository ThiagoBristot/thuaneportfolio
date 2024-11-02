import React from "react";
//import "./classes.css";

const Classes = () => (
    <section className="classes">
        <h2>Sobre as Aulas</h2>
        <p>Oferecemos aulas personalizadas de Pilates e Yoga que ajudam no equilíbrio entre corpo e mente...</p>
        
        <div className="gallery">
            <div className="gallery-item">
                <div className="media-container">
                    <img src="" alt="img" />
                </div>
                <div className="description">
                    <p>Descrição da imagem ou vídeo aqui</p>
                </div>
            </div>
            <div className="gallery-item">
                <div className="media-container">
                    <video src="" controls></video>
                </div>
                <div className="description">
                    <p>Descrição do vídeo aqui</p>
                </div>
            </div>
        </div>
    </section>
);

export default Classes;
