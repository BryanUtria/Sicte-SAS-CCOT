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
          <Route exact path='/CorporativoFinanciero' element={<CorporativoFinanciero/>} />
          <Route exact path='/CorporativoPuntuacion' element={<CorporativoPuntuacion />} />
          <Route exact path='/Centro_de_costos' element={<CentrosDeCostos />} />
          <Route exact path='/CorporativoFacturacion' element={<CorporativoFacturacion />} />
          <Route exact path='/ConsolidadoNacionalFacturacion' element={<FacturacionConsolidado />} />
          <Route exact path='/Compras' element={<Compras />} />
          <Route exact path='/HistoricoKPI' element={<HistoricoKPI />} />
          <Route exact path='/MantenimientoTecnico' element={<MantenimientoTecnico />} />
          <Route exact path='/MantenimientoFinanciero' element={<MantenimientoFinanciero />} />
          <Route exact path='/MantenimientoPuntuacion' element={<MantenimientoPuntuacion />} />
          <Route exact path='/MantenimientoPuntuacionTMRF' element={<MantenimientoPuntuacionTMRF />} />
          <Route exact path='/MantenimientoFacturacion' element={<MantenimientoFacturacion />} />
          <Route exact path='/MantenimientoBacklogFO' element={<BacklogFO />} />
          <Route exact path='/MantenimientoBacklogHFC' element={<BacklogHFC />} />
          <Route exact path='/Mintic' element={<Mintic />} />
          <Route exact path='/Moviles' element={<Moviles />} />
          <Route exact path='/NPS' element={<NPS />} />
          <Route exact path='/OperacionesFinanciero' element={<OperacionesFinanciero />} />
          <Route exact path='/OperacionesFacturacion' element={<OperacionesFacturacion />} />
          <Route exact path='/OperacionesPuntuacion' element={<OperacionesPuntuacion />} />
          <Route exact path='/PlaneacionFinanciero' element={<PlaneacionFinanciero />} />
          <Route exact path='/PlaneacionPuntuacion' element={<PlaneacionPuntuacion />} />
          <Route exact path='/PlaneacionFacturacion' element={<PlaneacionFacturacion />} />
          <Route exact path='/ReporteCorporativo' element={<ReporteCorporativo />} />
          <Route exact path='/ReportePlaneacion' element={<ReportePlaneacion/>} />
          <Route exact path='/ReingenieriaFinanciero' element={<ReingenieriaFinanciero />} />
          <Route exact path='/ReingenieriasPuntuacion' element={<ReingenieriasPuntuacion />} />
          <Route exact path='/Seguimiento' element={<Seguimiento />} />
          <Route exact path='/SeguimientoProyectos' element={<SeguimientoProyectos/>} />
          <Route exact path='/TorreDeControl' element={<TorreControl />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};