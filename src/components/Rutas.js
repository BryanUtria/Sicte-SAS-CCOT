import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import BacklogFO from '../pages/Mantenimiento/Backlog_FO';
import BacklogHFC from '../pages/Mantenimiento/Backlog_HFC';
import CorporativoPuntuacion from '../pages/Puntuacion/CorporativoPuntuacion';
import CorporativoFinanciero from '../pages/Produccion/CorporativoFinanciero';
import CentrosDeCostos from '../pages/Direccion/CentrosDeCostos';
import CorporativoFacturacion from '../pages/Facturacion/CorporativoFacturacion';
import Compras from '../pages/Direccion/Compras';
import Inicio from '../pages/Inicio/Inicio';
import FacturacionConsolidado from '../pages/Facturacion/FacturacionConsolidado';
import HistoricoKPI from '../pages/Indicadores/HistoricoKPI';
import MantenimientoTecnico from '../pages/Indicadores/MantenimientoTecnico';
import MantenimientoFinanciero from '../pages/Produccion/MantenimientoFinanciero';
import MantenimientoPuntuacion from '../pages/Puntuacion/MantenimientoPuntuacion';
import MantenimientoPuntuacionTMRF from '../pages/Mantenimiento/MantenimientoPuntuacionTMRF';
import MantenimientoFacturacion from '../pages/Facturacion/MantenimientoFacturacion';
import Moviles from '../pages/Direccion/Moviles';
import Mintic from '../pages/Indicadores/Mintic';
import NPS from '../pages/Indicadores/NPS';
import OperacionesFinanciero from '../pages/Produccion/OperacionesFinanciero';
import OperacionesPuntuacion from '../pages/Puntuacion/OperacionesPuntuacion';
import OperacionesFacturacion from '../pages/Facturacion/OperacionesFacturacion';
import PlaneacionFinanciero from '../pages/Produccion/PlaneacionFinanciero';
import PlaneacionPuntuacion from '../pages/Puntuacion/PlaneacionPuntuacion';
import PlaneacionFacturacion from '../pages/Facturacion/PlaneacionFacturacion';
import ReingenieriaFinanciero from '../pages/Produccion/ReingenieriaFinanciero';
import ReporteCorporativo from "../pages/ReporteCorporativo";
import ReportePlaneacion from '../pages/ReportePlaneacion';
import ReingenieriasPuntuacion from '../pages/Puntuacion/ReingenieriasPuntuacion';
import Seguimiento from '../pages/Mantenimiento/Seguimiento';
import SeguimientoProyectos from '../pages/Facturacion/SeguimientoProyectos';
import TorreControl from '../pages/Mantenimiento/TorreControl';


export const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exect element={<Inicio />} />
        <Route path='/CCOT' exect element={<Inicio />} />
        <Route path='/CorporativoFinanciero' exect element={<CorporativoFinanciero/>} />
        <Route path='/CorporativoPuntuacion' exect element={<CorporativoPuntuacion />} />
        <Route path='/Centro_de_costos' exect element={<CentrosDeCostos />} />
        <Route path='/CorporativoFacturacion' exect element={<CorporativoFacturacion />} />
        <Route path='/ConsolidadoNacionalFacturacion' exect element={<FacturacionConsolidado />} />
        <Route path='/Compras' exect element={<Compras />} />
        <Route path='/HistoricoKPI' exect element={<HistoricoKPI />} />
        <Route path='/MantenimientoTecnico' exect element={<MantenimientoTecnico />} />
        <Route path='/MantenimientoFinanciero' exect element={<MantenimientoFinanciero />} />
        <Route path='/MantenimientoPuntuacion' exect element={<MantenimientoPuntuacion />} />
        <Route path='/MantenimientoPuntuacionTMRF' exect element={<MantenimientoPuntuacionTMRF />} />
        <Route path='/MantenimientoFacturacion' exect element={<MantenimientoFacturacion />} />
        <Route path='/MantenimientoBacklogFO' exect element={<BacklogFO />} />
        <Route path='/MantenimientoBacklogHFC' exect element={<BacklogHFC />} />
        <Route path='/Mintic' exect element={<Mintic />} />
        <Route path='/Moviles' exect element={<Moviles />} />
        <Route path='/NPS' exect element={<NPS />} />
        <Route path='/OperacionesFinanciero' exect element={<OperacionesFinanciero />} />
        <Route path='/OperacionesFacturacion' exect element={<OperacionesFacturacion />} />
        <Route path='/OperacionesPuntuacion' exect element={<OperacionesPuntuacion />} />
        <Route path='/PlaneacionFinanciero' exect element={<PlaneacionFinanciero />} />
        <Route path='/PlaneacionPuntuacion' exect element={<PlaneacionPuntuacion />} />
        <Route path='/PlaneacionFacturacion' exect element={<PlaneacionFacturacion />} />
        <Route path='/ReporteCorporativo' exect element={<ReporteCorporativo />} />
        <Route path='/ReportePlaneacion' exect element={<ReportePlaneacion/>} />
        <Route path='/ReingenieriaFinanciero' exect element={<ReingenieriaFinanciero />} />
        <Route path='/ReingenieriasPuntuacion' exect element={<ReingenieriasPuntuacion />} />
        <Route path='/Seguimiento' exect element={<Seguimiento />} />
        <Route path='/SeguimientoProyectos' exect element={<SeguimientoProyectos/>} />
        <Route path='/TorreDeControl' exect element={<TorreControl />} />
      </Routes>
    </Router>
  );
};