import Notifications from "./Pages/Notifications";
import SearchPage from './Pages/SearchPage'
import HomePage from './Pages/HomePage'
import DetServicio from "./Pages/DetServicio";
import Configuration from './Pages/Configuracion'
import PopActFotPer from "./components/Pops/PopActFotPer";
import PopElimFoto from "./components/Pops/PopElimFoto";
import PopActNombre from "./components/Pops/PopActNombre";
import GrupoTrabajo from "./Pages/GrupoTrabajo";

function App() {
  return (
      <div className="bg-background h-full">
        <GrupoTrabajo/>
      </div>
  )
}

export default App;
