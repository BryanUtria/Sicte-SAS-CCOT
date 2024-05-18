import React, { useState } from 'react'
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
                            <a id='SubMenu-Titulo' href='/ReportingCenter'>
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
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/ConsolidadoNacionalFacturacion'>
                                        Consolidado nacional
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/PlaneacionFacturacion'>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/SeguimientoProyectos'>
                                        Seguimiento proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/CorporativoFacturacion'>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/MantenimientoFacturacion'>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/OperacionesFacturacion'>
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
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/PlaneacionFinanciero'>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/CorporativoFinanciero'>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/MantenimientoFinanciero'>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/ReingenieriaFinanciero'>
                                        Reingenierias
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/OperacionesFinanciero'>
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
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/HistoricoKPI'>
                                        Histórico KPI 
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/MantenimientoTecnico'>
                                        G1 Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/Mintic'>
                                        G5 MINTIC
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/NPS'>
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
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/PlaneacionPuntuacion'>
                                        Proyectos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/CorporativoPuntuacion'>
                                        Corporativo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/MantenimientoPuntuacion'>
                                        Mantenimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/ReingenieriasPuntuacion'>
                                        Reingenierias
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/OperacionesPuntuacion'>
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
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/MantenimientoBacklogFO'>
                                        Cumplimiento SLA FO
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/MantenimientoBacklogHFC'>
                                        Cumplimiento SLA HFC
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/MantenimientoPuntuacionTMRF'>
                                        Correctivo - Preventivo
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/Seguimiento'>
                                        Seguimiento
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/TorreDeControl'>
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
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/Centro_de_costos'>
                                        Centros de costos
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/Moviles'>
                                        Composición móviles
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/Compras'>
                                        Compras
                                    </a>
                                    <a id='SubMenu-Contenido-Titulo' href='/ReportingCenter/SSTA'>
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
                            <a id='SubMenu-Titulo' href='/ReportingCenter'>
                                <span id='SubMenu-Titulo-Icono'><FaHome/></span>
                            </a>      
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