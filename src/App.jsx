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

function App() {
  return (
    <div className="bg-background h-screen">
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
        <Route path='/DetServicio'>
            <DetServicio/>
        </Route>
        <Route path='/workgroup'>
            <GrupoTrabajo/>
        </Route>
        <Route path='/GTT'>
            <GestionTTrabajo/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
