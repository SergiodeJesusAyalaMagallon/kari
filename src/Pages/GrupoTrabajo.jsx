import React from 'react'
import HeaderGT from '../components/GroupTrabajo/HeaderGT'
import ContTurno from '../components/GroupTrabajo/ContTurno'
import CardGrupoTurno from '../components/GroupTrabajo/CardGrupoTurno'
import CardSinTurno from '../components/GroupTrabajo/CardSinTurno'
import { AddCircleRounded } from '@material-ui/icons'
import { Modal } from '@material-ui/core'
import ActionMiembros from '../components/Pops/ActionMiembros'

const GrupoTrabajo = () =>{
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <ActionMiembros onClick={handleClose}/>
    );
    return(
           <div>
               <div className="h-screen overflow-scroll">
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
                <div className="text-secondary500 absolute bottom-5 right-4 lg:right-12 lg:bottom-8">
                <button type="button" onClick={handleOpen} className="w-6/12">
                    <AddCircleRounded style={{fontSize:"450%"}}/>
                </button>
                <Modal
                    open={open}
                >
                {body}
                </Modal>
                </div>
           </div>   
    )
}

export default GrupoTrabajo