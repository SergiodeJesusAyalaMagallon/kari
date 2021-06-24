import { Modal } from '@material-ui/core'
import { AddCircleRounded } from '@material-ui/icons'
import React from 'react'
import ButtonIT from '../components/Compartidos/ButtonIT'
import ContDetTurno from '../components/GestionTTrabajo/ContDetTurno'
import HeaderGTT from '../components/GestionTTrabajo/HeaderGTT'
import CardGrupoTurno from '../components/GroupTrabajo/CardGrupoTurno'
import PopAgrTurno from '../components/Pops/PopAgrTurno'


const GestionTTrabajo = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <PopAgrTurno onClick={handleClose}/>
    );

    return (
        <div>
            <HeaderGTT/>
            <div className="w-8/12 m-auto">
            <button type="button" onClick={handleOpen} className="w-full">
            <ButtonIT Icono={AddCircleRounded} Texto="Agregar nuevo turno"/>
            </button>
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body}
            </Modal>
            </div>
            <div className="mt-14">
                <CardGrupoTurno
                    Titulo="Detalles del turno 1"
                    Content={ContDetTurno}
                    Edo={<div></div>}
                    Color="Surface"
                />
            </div>
            <div className="mt-14">
                <CardGrupoTurno
                    Titulo="Detalles del turno 2"
                    Content={ContDetTurno}
                    Edo={<div className="bg-primary300 text-onPrimary font-Sans font-bold text-sm rounded-3xl w-10/12 h-2/5 flex flex-wrap justify-center items-center ">Actual</div>}
                    Color="Surface"
                />
            </div>
            <div className="mt-14 pb-20">
                <CardGrupoTurno
                    Titulo="Detalles del turno 3"
                    Content={ContDetTurno}
                    Edo={<div className="bg-primary300 text-onPrimary font-Sans font-bold text-sm rounded-3xl w-10/12 h-2/5 flex flex-wrap justify-center items-center ">Actual</div>}
                    Color="Surface"
                />
            </div>
        </div>
    )
}

export default GestionTTrabajo
