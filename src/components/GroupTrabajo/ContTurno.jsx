import React from 'react'
import CardTurno from './CardTurno'
import Line from './Line'
import {  PersonAddRounded } from '@material-ui/icons'
import ButtonIT from '../Compartidos/ButtonIT'
import MiemExis from '../Pops/MiemExis'
import { Modal } from '@material-ui/core'
import AjustesUsuario from '../Pops/AjustesUsuario'


const ContTurno = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <MiemExis onClick={handleClose}/>
    );
    
    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };
    
    const handleClose2 = () => {
        setOpen2(false);
    };
    const body2 = (
        <AjustesUsuario onClick={handleClose2}/>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen2} className="w-full">
            <CardTurno              
                Titulo="Patricia Domenech"
                Texto="Encargado de base"
                Avatar="P"
            />
            </button>
            <Modal
                open={open2}
            >
            {body2}
            </Modal>
            
            <Line/>
            <CardTurno              
                Titulo="Bruno Pastor Amado"
                Texto=" "
                Avatar="B"
            />
            <Line/>
            <CardTurno              
                Titulo="Eulogio Sanchez"
                Texto=" "
                Avatar="E"
            />
            <Line/>
            <CardTurno              
                Titulo="Benita Linares Barragan"
                Texto=" "
                Avatar="B"
            />
            <Line/>
            <CardTurno              
                Titulo="Enrique de la Cruz"
                Texto=" "
                Avatar="E"
            />
            <Line/>
            <CardTurno              
                Titulo="Raimundo Canto"
                Texto=" "
                Avatar="R"
            />
            <Line/>
            <div className="mt-7">
                <button type="button" onClick={handleOpen} className="w-full">
                    <ButtonIT Icono={PersonAddRounded} Texto="Agregar Miembros"/>
                </button>
                <Modal
                    open={open}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                {body}
                </Modal>
                
            </div>

        </div>     

    )
}

export default ContTurno

