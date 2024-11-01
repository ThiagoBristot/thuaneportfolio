import React, { Component } from "react";
//import "./header.css";

export default class Header extends Component {
    render() {
        return(
            <section className="app-header">
                <div className="header-container">
                    <div className="header-logo">
                        <p>LOGO</p>   
                    </div>
                    <div className="header-nav">
                        <nav>
                            <ul>
                                <li>
                                    <a href="">Inicio</a>
                                </li>
                                <li>
                                    <a href="">Sobre mim</a>
                                </li>
                                <li>
                                    <a href="">Sobre as aulas</a>
                                </li>
                                
                                <button>Agendar horário</button>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}
