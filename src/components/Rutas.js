import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
    <BrowserRouter basename="/Sicte-SAS-CCOT">
      <Routes>
        <Route path="/" element={<CCOTRoutes />} />  
        <Route path="*" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};

const CCOTRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Inicio />} />
        <Route path='/CCOT' element={<Inicio />} />
        <Route path='/CorporativoFinanciero' element={<CorporativoFinanciero/>} />
        <Route path='/CorporativoPuntuacion' element={<CorporativoPuntuacion />} />
        <Route path='/Centro_de_costos' element={<CentrosDeCostos />} />
        <Route path='/CorporativoFacturacion' element={<CorporativoFacturacion />} />
        <Route path='/ConsolidadoNacionalFacturacion' element={<FacturacionConsolidado />} />
        <Route path='/Compras' element={<Compras />} />
        <Route path='/HistoricoKPI' element={<HistoricoKPI />} />
        <Route path='/MantenimientoTecnico' element={<MantenimientoTecnico />} />
        <Route path='/MantenimientoFinanciero' element={<MantenimientoFinanciero />} />
        <Route path='/MantenimientoPuntuacion' element={<MantenimientoPuntuacion />} />
        <Route path='/MantenimientoPuntuacionTMRF' element={<MantenimientoPuntuacionTMRF />} />
        <Route path='/MantenimientoFacturacion' element={<MantenimientoFacturacion />} />
        <Route path='/MantenimientoBacklogFO' element={<BacklogFO />} />
        <Route path='/MantenimientoBacklogHFC' element={<BacklogHFC />} />
        <Route path='/Mintic' element={<Mintic />} />
        <Route path='/Moviles' element={<Moviles />} />
        <Route path='/NPS' element={<NPS />} />
        <Route path='/OperacionesFinanciero' element={<OperacionesFinanciero />} />
        <Route path='/OperacionesFacturacion' element={<OperacionesFacturacion />} />
        <Route path='/OperacionesPuntuacion' element={<OperacionesPuntuacion />} />
        <Route path='/PlaneacionFinanciero' element={<PlaneacionFinanciero />} />
        <Route path='/PlaneacionPuntuacion' element={<PlaneacionPuntuacion />} />
        <Route path='/PlaneacionFacturacion' element={<PlaneacionFacturacion />} />
        <Route path='/ReporteCorporativo' element={<ReporteCorporativo />} />
        <Route path='/ReportePlaneacion' element={<ReportePlaneacion/>} />
        <Route path='/ReingenieriaFinanciero' element={<ReingenieriaFinanciero />} />
        <Route path='/ReingenieriasPuntuacion' element={<ReingenieriasPuntuacion />} />
        <Route path='/Seguimiento' element={<Seguimiento />} />
        <Route path='/SeguimientoProyectos' element={<SeguimientoProyectos/>} />
        <Route path='/TorreDeControl' element={<TorreControl />} />
      </Routes>
    </div>
  )
};