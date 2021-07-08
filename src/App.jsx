import React from 'react'
import HomePage from './Pages/HomePage'
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Notifications from "./Pages/Notifications";
import SearchPage from './Pages/SearchPage'
import Configuration from './Pages/Configuracion'
import DetServicio from './Pages/DetServicio'
import GrupoTrabajo from './Pages/GrupoTrabajo'
import GestionTTrabajo from './Pages/GestionTTrabajo'
import Diagnostico from './Pages/Diagnostico';
import Kilometraje from './Pages/Kilometraje';
import Crono from './Pages/Crono';
import EdoPaciente from './Pages/EdoPaciente';
import Informes from './Pages/Informes';
import ElemServ from './Pages/ElemServ';
import AddPetitioner from './Pages/AddPetitioner';
import ConfService from './Pages/ConfService';
import ReadyService from './Pages/ReadyService';
import { FolderSharedRounded, LocalHospitalRounded, SentimentVeryDissatisfiedRounded } from '@material-ui/icons';
import ClasDiagnostica from './Pages/ClasDiagnostica';
import History from './Pages/History';
import Filtrar from './Pages/Filtrar';
import Login2 from './Pages/Login2';
import LoginPrin from './components/Login/LoginPrin';


function App() {
  return (
    <div className="bg-background h-full">
      <Router>
      <Switch>
        <Route exact path= '/'>
            <HomePage/>
        </Route>
        <Route path='/Search'>
            <SearchPage/>
        </Route>
        <Route path='/Noti'>
            <Notifications/>
        </Route>
        <Route path='/Config'>
            <Configuration/>
        </Route>
        <Route path='/DetServicio'>
            <DetServicio/>
        </Route>
        <Route path='/workgroup'>
            <GrupoTrabajo/>
        </Route>
        <Route path='/GTT'>
            <GestionTTrabajo/>
        </Route>
        <Route path='/Diagnostico'>
            <Diagnostico/>
        </Route>
        <Route path='/Km'>
            <Kilometraje/>
        </Route>
        <Route path='/Crono'>
            <Crono/>
        </Route>
        <Route path='/EdoPaciente'>
            <EdoPaciente titulo="Estado del paciente" ico={<LocalHospitalRounded style={{fontSize:"500%"}}/>}/>
        </Route>
        <Route path='/DatoPaciente'>
            <EdoPaciente titulo="Datos del paciente" ico={<FolderSharedRounded style={{fontSize:"500%"}}/>}/>
        </Route>
        <Route path='/Lesiones'>
            <EdoPaciente titulo="Lesiones / enfermedades" ico={<SentimentVeryDissatisfiedRounded style={{fontSize:"500%"}}/>}/>
        </Route>
        <Route path='/Informes'>
            <Informes/>
        </Route>
        <Route path='/ElemServ'>
            <ElemServ/>
        </Route>
        <Route path='/AddPetitioner'>
            <AddPetitioner/>
        </Route>
        <Route path='/ConfService'>
            <ConfService/>
        </Route>
        <Route path='/ReadyService'>
            <ReadyService/>
        </Route>
        <Route path='/ClasDiagnostica'>
            <ClasDiagnostica/>
        </Route>
        <Route path='/Historia'>
            <History/>
        </Route>
        <Route path='/Filtrar'>
            <Filtrar/>
        </Route>
        <Route path='/login'>
            <Login2/>
        </Route>
        <Route path='/azul'>
            <LoginPrin/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
