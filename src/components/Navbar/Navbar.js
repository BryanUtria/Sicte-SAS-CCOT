import React, { useState } from 'react'
import './Navbar.css'
import {FaBars, FaTimes, FaHome, FaFileInvoice, FaIndustry, FaChartLine, FaStar, FaTools, FaBuilding, FaChevronDown, FaChevronUp} from 'react-icons/fa';

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(true);
    const [showDropdownFacturacion, setShowDropdownFacturacion] = useState(false);
    const [showDropdownProduccion, setShowDropdownProduccion] = useState(false);
    const [showDropdownIndicadores, setShowDropdownIndicadores] = useState(false);
    const [showDropdownPuntuacion, setShowDropdownPuntuacion] = useState(false);
    const [showDropdownMantenimiento, setShowDropdownMantenimiento] = useState(false);
    const [showDropdownDireccion, setShowDropdownDireccion] = useState(false);

    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

    const closeAllDropdowns = () => {
        setShowDropdownFacturacion(false);
        setShowDropdownProduccion(false);
        setShowDropdownIndicadores(false);
        setShowDropdownPuntuacion(false);
        setShowDropdownMantenimiento(false);
        setShowDropdownDireccion(false);
    };

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
                <div id='MenuContainer'>
                    <ul id='Menu'>
                        <li id='SubMenu'>
                            <a id='SubMenu-Titulo' href='#/CCOT'>
                                <span id='SubMenu-Titulo-Icono'><FaHome/></span>
                                <span id="SubMenu-Titulo-Texto">Inicio</span>
                            </a>      
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => 
                            {
                                closeAllDropdowns();
                                setShowDropdownFacturacion(!showDropdownFacturacion);
                            }}>
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
                                    <a id='SubMenu-Contenido-Titulo' href='#/ConsolidadoNacionalFacturacion' onClick={toggleMobileMenu}>
                                        Consolidado nacional
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/PlaneacionFacturacion' onClick={toggleMobileMenu}>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/SeguimientoProyectos' onClick={toggleMobileMenu}>
                                        Seguimiento proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/CorporativoFacturacion' onClick={toggleMobileMenu}>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoFacturacion' onClick={toggleMobileMenu}>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/OperacionesFacturacion' onClick={toggleMobileMenu}>
                                        Operaciones
                                    </a>
                                </div>
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => 
                            {   
                                closeAllDropdowns();
                                setShowDropdownProduccion(!showDropdownProduccion)
                            }}>
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
                                    <a id='SubMenu-Contenido-Titulo' href='#/PlaneacionFinanciero' onClick={toggleMobileMenu}>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/CorporativoFinanciero' onClick={toggleMobileMenu}>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoFinanciero' onClick={toggleMobileMenu}>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/ReingenieriaFinanciero' onClick={toggleMobileMenu}>
                                        Reingenierias
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/OperacionesFinanciero' onClick={toggleMobileMenu}>
                                        Operaciones
                                    </a>
                                </div>
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => 
                            {
                                closeAllDropdowns();
                                setShowDropdownIndicadores(!showDropdownIndicadores)
                            }}>
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
                                    <a id='SubMenu-Contenido-Titulo' href='#/HistoricoKPI' onClick={toggleMobileMenu}>
                                        Histórico KPI 
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoTecnico' onClick={toggleMobileMenu}>
                                        G1 Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Mintic' onClick={toggleMobileMenu}>
                                        G5 MINTIC
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/NPS' onClick={toggleMobileMenu}>
                                        NPS - Contraseña: 4434
                                    </a>
                                </div>
                            )}
                        </li>
                            
                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => 
                            {   
                                closeAllDropdowns();
                                setShowDropdownPuntuacion(!showDropdownPuntuacion)
                            }}>
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
                                    <a id='SubMenu-Contenido-Titulo' href='#/PlaneacionPuntuacion' onClick={toggleMobileMenu}>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/CorporativoPuntuacion' onClick={toggleMobileMenu}>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoPuntuacion' onClick={toggleMobileMenu}>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/ReingenieriasPuntuacion' onClick={toggleMobileMenu}>
                                        Reingenierias
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/OperacionesPuntuacion' onClick={toggleMobileMenu}>
                                        Operaciones
                                    </a>
                                </div> 
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => 
                            {
                                closeAllDropdowns();
                                setShowDropdownMantenimiento(!showDropdownMantenimiento)
                            }}>
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
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoBacklogFO' onClick={toggleMobileMenu}>
                                        Cumplimiento SLA FO
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoBacklogHFC' onClick={toggleMobileMenu}>
                                        Cumplimiento SLA HFC
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/MantenimientoPuntuacionTMRF' onClick={toggleMobileMenu}>
                                        Correctivo - Preventivo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Seguimiento' onClick={toggleMobileMenu}>
                                        Seguimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/TorreDeControl' onClick={toggleMobileMenu}>
                                        Torre de control
                                    </a>
                                </div>
                            )}
                        </li>

                        <li id='SubMenu'>
                            <div id='SubMenu-Titulo' onClick={() => 
                            {
                                closeAllDropdowns();
                                setShowDropdownDireccion(!showDropdownDireccion)
                            }}>
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
                                    <a id='SubMenu-Contenido-Titulo' href='#/Centro_de_costos' onClick={toggleMobileMenu}>
                                        Centros de costos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Moviles' onClick={toggleMobileMenu}>
                                        Composición móviles
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/Compras' onClick={toggleMobileMenu}>
                                        Compras
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='#/SSTA' onClick={toggleMobileMenu}>
                                        SSTA
                                    </a>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            )}

            {!showMobileMenu && (
                <div id='MenuContainerCerrado' onMouseEnter={() => 
                {
                    closeAllDropdowns();
                    setShowMobileMenu(true)
                }}>
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