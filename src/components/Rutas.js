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
          <Route exact path='/CCOT' element={<Inicio />} />
          <Route exact path='/CCOT/CorporativoFinanciero' element={<CorporativoFinanciero/>} />
          <Route exact path='/CCOT/CorporativoPuntuacion' element={<CorporativoPuntuacion />} />
          <Route exact path='/CCOT/Centro_de_costos' element={<CentrosDeCostos />} />
          <Route exact path='/CCOT/CorporativoFacturacion' element={<CorporativoFacturacion />} />
          <Route exact path='/CCOT/ConsolidadoNacionalFacturacion' element={<FacturacionConsolidado />} />
          <Route exact path='/CCOT/Compras' element={<Compras />} />
          <Route exact path='/CCOT/HistoricoKPI' element={<HistoricoKPI />} />
          <Route exact path='/CCOT/MantenimientoTecnico' element={<MantenimientoTecnico />} />
          <Route exact path='/CCOT/MantenimientoFinanciero' element={<MantenimientoFinanciero />} />
          <Route exact path='/CCOT/MantenimientoPuntuacion' element={<MantenimientoPuntuacion />} />
          <Route exact path='/CCOT/MantenimientoPuntuacionTMRF' element={<MantenimientoPuntuacionTMRF />} />
          <Route exact path='/CCOT/MantenimientoFacturacion' element={<MantenimientoFacturacion />} />
          <Route exact path='/CCOT/MantenimientoBacklogFO' element={<BacklogFO />} />
          <Route exact path='/CCOT/MantenimientoBacklogHFC' element={<BacklogHFC />} />
          <Route exact path='/CCOT/Mintic' element={<Mintic />} />
          <Route exact path='/CCOT/Moviles' element={<Moviles />} />
          <Route exact path='/CCOT/NPS' element={<NPS />} />
          <Route exact path='/CCOT/OperacionesFinanciero' element={<OperacionesFinanciero />} />
          <Route exact path='/CCOT/OperacionesFacturacion' element={<OperacionesFacturacion />} />
          <Route exact path='/CCOT/OperacionesPuntuacion' element={<OperacionesPuntuacion />} />
          <Route exact path='/CCOT/PlaneacionFinanciero' element={<PlaneacionFinanciero />} />
          <Route exact path='/CCOT/PlaneacionPuntuacion' element={<PlaneacionPuntuacion />} />
          <Route exact path='/CCOT/PlaneacionFacturacion' element={<PlaneacionFacturacion />} />
          <Route exact path='/CCOT/ReporteCorporativo' element={<ReporteCorporativo />} />
          <Route exact path='/CCOT/ReportePlaneacion' element={<ReportePlaneacion/>} />
          <Route exact path='/CCOT/ReingenieriaFinanciero' element={<ReingenieriaFinanciero />} />
          <Route exact path='/CCOT/ReingenieriasPuntuacion' element={<ReingenieriasPuntuacion />} />
          <Route exact path='/CCOT/Seguimiento' element={<Seguimiento />} />
          <Route exact path='/CCOT/SeguimientoProyectos' element={<SeguimientoProyectos/>} />
          <Route exact path='/CCOT/TorreDeControl' element={<TorreControl />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};