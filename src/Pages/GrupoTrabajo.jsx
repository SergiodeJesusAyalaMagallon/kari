import React from 'react'
import HeaderGT from '../components/GroupTrabajo/HeaderGT'
import ContTurno from '../components/GroupTrabajo/ContTurno'
import CardGrupoTurno from '../components/GroupTrabajo/CardGrupoTurno'

const GrupoTrabajo = () =>{
    return(
           <div>
               <HeaderGT/>
               <div className="my-10">
                <CardGrupoTurno
                    Titulo="Grupo para turno 2"
                    Content={ContTurno}
                    Color="actual"
                    Edo="Actual"
                />
            </div>
           </div>   
    )
}

export default GrupoTrabajo