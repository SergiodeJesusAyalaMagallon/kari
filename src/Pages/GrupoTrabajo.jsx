import React from 'react'
import HeaderGT from '../components/GroupTrabajo/HeaderGT'
import ContTurno from '../components/GroupTrabajo/ContTurno'
import CardGrupoTurno from '../components/GroupTrabajo/CardGrupoTurno'
import CardSinTurno from '../components/GroupTrabajo/CardSinTurno'

const GrupoTrabajo = () =>{
    return(
           <div>
               <HeaderGT/>
               <div className="mt-14">
                <CardGrupoTurno
                    Titulo="Grupo para turno 1"
                    Content={ContTurno}
                    Edo={<div></div>}
                />
                </div>
               <div className="mt-14">
                <CardGrupoTurno
                    Titulo="Grupo para turno 2"
                    Content={ContTurno}
                    Edo={<div className="bg-primary300 text-onPrimary font-Sans font-bold text-sm rounded-3xl w-10/12 h-2/5 flex flex-wrap justify-center items-center ">Actual</div>}
                />
                </div>
                <div className="mt-14">
                <CardGrupoTurno
                    Titulo="Grupo para turno 3"
                    Content={ContTurno}
                    Edo={<div></div>}
                />
                </div>
                <div className="mt-14 pb-24">
                    <CardSinTurno/>
                </div>
           </div>   
    )
}

export default GrupoTrabajo