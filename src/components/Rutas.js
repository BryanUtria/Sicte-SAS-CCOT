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
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='*' element={<Inicio />} />
          <Route exact path='/ReportingCenter' element={<Inicio />} />
          <Route exact path='/ReportingCenter/CorporativoFinanciero' element={<CorporativoFinanciero/>} />
          <Route exact path='/ReportingCenter/CorporativoPuntuacion' element={<CorporativoPuntuacion />} />
          <Route exact path='/ReportingCenter/Centro_de_costos' element={<CentrosDeCostos />} />
          <Route exact path='/ReportingCenter/CorporativoFacturacion' element={<CorporativoFacturacion />} />
          <Route exact path='/ReportingCenter/ConsolidadoNacionalFacturacion' element={<FacturacionConsolidado />} />
          <Route exact path='/ReportingCenter/Compras' element={<Compras />} />
          <Route exact path='/ReportingCenter/HistoricoKPI' element={<HistoricoKPI />} />
          <Route exact path='/ReportingCenter/MantenimientoTecnico' element={<MantenimientoTecnico />} />
          <Route exact path='/ReportingCenter/MantenimientoFinanciero' element={<MantenimientoFinanciero />} />
          <Route exact path='/ReportingCenter/MantenimientoPuntuacion' element={<MantenimientoPuntuacion />} />
          <Route exact path='/ReportingCenter/MantenimientoPuntuacionTMRF' element={<MantenimientoPuntuacionTMRF />} />
          <Route exact path='/ReportingCenter/MantenimientoFacturacion' element={<MantenimientoFacturacion />} />
          <Route exact path='/ReportingCenter/MantenimientoBacklogFO' element={<BacklogFO />} />
          <Route exact path='/ReportingCenter/MantenimientoBacklogHFC' element={<BacklogHFC />} />
          <Route exact path='/ReportingCenter/Mintic' element={<Mintic />} />
          <Route exact path='/ReportingCenter/Moviles' element={<Moviles />} />
          <Route exact path='/ReportingCenter/NPS' element={<NPS />} />
          <Route exact path='/ReportingCenter/OperacionesFinanciero' element={<OperacionesFinanciero />} />
          <Route exact path='/ReportingCenter/OperacionesFacturacion' element={<OperacionesFacturacion />} />
          <Route exact path='/ReportingCenter/OperacionesPuntuacion' element={<OperacionesPuntuacion />} />
          <Route exact path='/ReportingCenter/PlaneacionFinanciero' element={<PlaneacionFinanciero />} />
          <Route exact path='/ReportingCenter/PlaneacionPuntuacion' element={<PlaneacionPuntuacion />} />
          <Route exact path='/ReportingCenter/PlaneacionFacturacion' element={<PlaneacionFacturacion />} />
          <Route exact path='/ReportingCenter/ReporteCorporativo' element={<ReporteCorporativo />} />
          <Route exact path='/ReportingCenter/ReportePlaneacion' element={<ReportePlaneacion/>} />
          <Route exact path='/ReportingCenter/ReingenieriaFinanciero' element={<ReingenieriaFinanciero />} />
          <Route exact path='/ReportingCenter/ReingenieriasPuntuacion' element={<ReingenieriasPuntuacion />} />
          <Route exact path='/ReportingCenter/Seguimiento' element={<Seguimiento />} />
          <Route exact path='/ReportingCenter/SeguimientoProyectos' element={<SeguimientoProyectos/>} />
          <Route exact path='/ReportingCenter/TorreDeControl' element={<TorreControl />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};