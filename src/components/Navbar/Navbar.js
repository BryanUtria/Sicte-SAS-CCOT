import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import {FaBars, FaTimes, FaHome, FaFileInvoice, FaIndustry, FaChartLine, FaStar, FaTools, FaBuilding, FaChevronDown, FaChevronUp} from 'react-icons/fa';

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showDropdownFacturacion, setShowDropdownFacturacion] = useState(false);
    const [showDropdownProduccion, setShowDropdownProduccion] = useState(false);
    const [showDropdownIndicadores, setShowDropdownIndicadores] = useState(false);
    const [showDropdownPuntuacion, setShowDropdownPuntuacion] = useState(false);
    const [showDropdownMantenimiento, setShowDropdownMantenimiento] = useState(false);
    const [showDropdownDireccion, setShowDropdownDireccion] = useState(false);

    return (
        <div id='Contenedor'>
            <div id='Icono-Menu' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {
                    showMobileMenu ? <FaTimes /> : <FaBars />
                }
            </div> 

            <div id='Titulo'>
                <p>
                    Sicte CCOT
                </p>
                <p>
                    Centro de Control de Operaciones Técnicas
                </p>
            </div>  

            {showMobileMenu && (
                <div id='MenuContainer' className={showMobileMenu ? 'open' : 'closed'}>
                    <ul id='Menu'>
                        <li id='SubMenu'>
                            <a id='SubMenu-Titulo' href='#/CCOT'>
                                <span id='SubMenu-Titulo-Icono'><FaHome/></span>
                                <span id="SubMenu-Titulo-Texto">Inicio</span>
                            </a>      
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => setShowDropdownFacturacion(!showDropdownFacturacion)}>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaFileInvoice/></span>
                                    <span id="SubMenu-Titulo-Texto">Facturación</span>
                                    <span id="SubMenu-Titulo-Icono2">
                                        {
                                            showDropdownFacturacion ? <FaChevronUp /> : <FaChevronDown />
                                        }
                                    </span>
                                </span>
                            </div>
                            {showDropdownFacturacion && (
                                <div id='SubMenu-Contenido'>
                                    <a id='SubMenu-Contenido-Titulo' href='#/ConsolidadoNacionalFacturacion'>
                                        Consolidado nacional
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/PlaneacionFacturacion'>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/SeguimientoProyectos'>
                                        Seguimiento proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/CorporativoFacturacion'>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoFacturacion'>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/OperacionesFacturacion'>
                                        Operaciones
                                    </a>
                                </div>
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => setShowDropdownProduccion(!showDropdownProduccion)}>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaIndustry/></span>
                                    <span id="SubMenu-Titulo-Texto">Producción</span>
                                    <span id="SubMenu-Titulo-Icono2">
                                        {
                                            showDropdownProduccion ? <FaChevronUp /> : <FaChevronDown />
                                        }
                                    </span>
                                </span>
                            </div>
                            {showDropdownProduccion && (
                                <div id='SubMenu-Contenido'>
                                    <a id='SubMenu-Contenido-Titulo' href='#/PlaneacionFinanciero'>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/CorporativoFinanciero'>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoFinanciero'>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/ReingenieriaFinanciero'>
                                        Reingenierias
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/OperacionesFinanciero'>
                                        Operaciones
                                    </a>
                                </div>
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => setShowDropdownIndicadores(!showDropdownIndicadores)}>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaChartLine/></span>
                                    <span id="SubMenu-Titulo-Texto">Indicadores</span>
                                    <span id="SubMenu-Titulo-Icono2">
                                        {
                                            showDropdownIndicadores ? <FaChevronUp /> : <FaChevronDown />
                                        }
                                    </span>
                                </span>
                            </div>
                            {showDropdownIndicadores && (
                                <div id='SubMenu-Contenido'>
                                    <a id='SubMenu-Contenido-Titulo' href='#/HistoricoKPI'>
                                        Histórico KPI 
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoTecnico'>
                                        G1 Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Mintic'>
                                        G5 MINTIC
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/NPS'>
                                        NPS - Contraseña: 4434
                                    </a>
                                </div>
                            )}
                        </li>
                            
                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => setShowDropdownPuntuacion(!showDropdownPuntuacion)}>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaStar/></span>
                                    <span id="SubMenu-Titulo-Texto">Puntuación</span>
                                    <span id="SubMenu-Titulo-Icono2">
                                        {
                                            showDropdownPuntuacion ? <FaChevronUp /> : <FaChevronDown />
                                        }
                                    </span>
                                </span>
                            </div>
                            {showDropdownPuntuacion && (
                                <div id='SubMenu-Contenido'>
                                    <a id='SubMenu-Contenido-Titulo' href='#/PlaneacionPuntuacion'>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/CorporativoPuntuacion'>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoPuntuacion'>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/ReingenieriasPuntuacion'>
                                        Reingenierias
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/OperacionesPuntuacion'>
                                        Operaciones
                                    </a>
                                </div> 
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => setShowDropdownMantenimiento(!showDropdownMantenimiento)}>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaTools/></span>
                                    <span id="SubMenu-Titulo-Texto">Mantenimiento</span>
                                    <span id="SubMenu-Titulo-Icono2">
                                        {
                                            showDropdownMantenimiento ? <FaChevronUp /> : <FaChevronDown />
                                        }
                                    </span>
                                </span>
                            </div>
                            {showDropdownMantenimiento && (
                                <div id='SubMenu-Contenido'>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoBacklogFO'>
                                        Cumplimiento SLA FO
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoBacklogHFC'>
                                        Cumplimiento SLA HFC
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoPuntuacionTMRF'>
                                        Correctivo - Preventivo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Seguimiento'>
                                        Seguimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/TorreDeControl'>
                                        Torre de control
                                    </a>
                                </div>
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => setShowDropdownDireccion(!showDropdownDireccion)}>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaBuilding/></span>
                                    <span id="SubMenu-Titulo-Texto">Dirección</span>
                                    <span id="SubMenu-Titulo-Icono2">
                                        {
                                            showDropdownDireccion ? <FaChevronUp /> : <FaChevronDown />
                                        }
                                    </span>
                                </span>
                            </div>
                            {showDropdownDireccion && (
                                <div id='SubMenu-Contenido'>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Centro_de_costos'>
                                        Centros de costos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Moviles'>
                                        Composición móviles
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Compras'>
                                        Compras
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/SSTA'>
                                        SSTA
                                    </a>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            )}

            {!showMobileMenu && (
                <div id='MenuContainerCerrado' onMouseEnter={() => setShowMobileMenu(true)}>
                    <ul id='Menu'>
                        <li id='SubMenu'>
                            <span id='SubMenu-Titulo'>
                                <span id='SubMenu-Titulo-Icono'><FaHome/></span>
                            </span>      
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo'>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaFileInvoice/></span>
                                </span>
                            </div>
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo'>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaIndustry/></span>
                                </span>
                            </div>
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo'>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaChartLine/></span>
                                </span>
                            </div>
                        </li>
                            
                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo'>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaStar/></span>
                                </span>
                            </div>
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo'>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaTools/></span>
                                </span>
                            </div>
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo'>
                                <span id='SubMenu-Titulo-Contenedor'>
                                    <span id='SubMenu-Titulo-Icono'><FaBuilding/></span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
};